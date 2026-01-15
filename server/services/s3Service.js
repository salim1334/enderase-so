// AWS S3 Upload Service for Bid Documents
// Install: npm install aws-sdk multer

const AWS = require('aws-sdk');
const multer = require('multer');

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || 'us-east-1'
});

const s3 = new AWS.S3();

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow only PDF, DOC, DOCX files
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, and DOCX are allowed.'));
    }
  }
});

// Upload file to S3
async function uploadToS3(file, bidId) {
  const fileKey = `bids/${bidId}/${Date.now()}_${file.originalname}`;
  
  const params = {
    Bucket: process.env.AWS_S3_BUCKET || 'enderase-bid-documents',
    Key: fileKey,
    Body: file.buffer,
    ContentType: file.mimetype,
    // Make file private - use pre-signed URLs for access
    ACL: 'private',
    // Add metadata
    Metadata: {
      'bid-id': bidId.toString(),
      'uploaded-by': 'staff',
      'original-name': file.originalname
    }
  };

  try {
    const result = await s3.upload(params).promise();
    return {
      url: result.Location,
      key: result.Key,
      bucket: result.Bucket
    };
  } catch (error) {
    console.error('S3 Upload Error:', error);
    throw new Error('Failed to upload file to S3');
  }
}

// Generate pre-signed URL for secure file access
async function getSignedUrl(fileKey, expiresIn = 3600) {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET || 'enderase-bid-documents',
    Key: fileKey,
    Expires: expiresIn // URL expires in 1 hour (3600 seconds)
  };

  try {
    const url = await s3.getSignedUrlPromise('getObject', params);
    return url;
  } catch (error) {
    console.error('Error generating signed URL:', error);
    throw new Error('Failed to generate download URL');
  }
}

// Delete file from S3
async function deleteFromS3(fileKey) {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET || 'enderase-bid-documents',
    Key: fileKey
  };

  try {
    await s3.deleteObject(params).promise();
    return true;
  } catch (error) {
    console.error('S3 Delete Error:', error);
    throw new Error('Failed to delete file from S3');
  }
}

module.exports = {
  upload,
  uploadToS3,
  getSignedUrl,
  deleteFromS3
};
