// AWS SES Email Service for Bid Notifications
// No additional install needed - aws-sdk is already installed

const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || 'us-east-1'
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

/**
 * Send email notification when a new bid is created
 */
async function sendNewBidNotification(recipientEmail, bidDetails) {
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
        .bid-card { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .btn { display: inline-block; background: #f97316; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px; }
        .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px; }
        .label { font-weight: bold; color: #4b5563; }
        .value { color: #111827; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔔 New Bid Opportunity Available!</h1>
        </div>
        <div class="content">
          <p>Hello,</p>
          <p>A new bid has been posted on Enderase Solutions that might interest you.</p>
          
          <div class="bid-card">
            <h2 style="margin-top: 0; color: #f97316;">${bidDetails.tender_name}</h2>
            
            <p><span class="label">Company:</span> <span class="value">${bidDetails.company_name}</span></p>
            <p><span class="label">Document Price:</span> <span class="value">ETB ${parseFloat(bidDetails.document_price).toLocaleString()}</span></p>
            <p><span class="label">Bid Bond Amount:</span> <span class="value">ETB ${parseFloat(bidDetails.bid_bond_amount).toLocaleString()}</span></p>
            ${bidDetails.region ? `<p><span class="label">Region:</span> <span class="value">${bidDetails.region}</span></p>` : ''}
            <p><span class="label">Closing Date:</span> <span class="value">${new Date(bidDetails.bid_closing_date).toLocaleString()}</span></p>
            
            ${bidDetails.additional_notes ? `
              <div style="margin-top: 15px; padding: 15px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
                <p style="margin: 0;"><strong>Note:</strong> ${bidDetails.additional_notes}</p>
              </div>
            ` : ''}
          </div>
          
          <center>
            <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/bids/${bidDetails.id}" class="btn">
              View Full Details →
            </a>
          </center>
          
          <p style="margin-top: 30px; color: #6b7280;">
            Don't miss this opportunity! Visit our platform to submit your proposal.
          </p>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} Enderase Solutions. All rights reserved.</p>
          <p>This is an automated notification. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const params = {
    Source: process.env.SES_FROM_EMAIL || 'noreply@enderase.com', // Must be verified in SES
    Destination: {
      ToAddresses: [recipientEmail]
    },
    Message: {
      Subject: {
        Data: `New Bid: ${bidDetails.tender_name}`,
        Charset: 'UTF-8'
      },
      Body: {
        Html: {
          Data: emailHtml,
          Charset: 'UTF-8'
        },
        Text: {
          Data: `
New Bid Posted: ${bidDetails.tender_name}

Company: ${bidDetails.company_name}
Document Price: ETB ${parseFloat(bidDetails.document_price).toLocaleString()}
Closing Date: ${new Date(bidDetails.bid_closing_date).toLocaleString()}

View details: ${process.env.FRONTEND_URL || 'http://localhost:5173'}/bids/${bidDetails.id}
          `,
          Charset: 'UTF-8'
        }
      }
    }
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log('Email sent successfully:', result.MessageId);
    return {
      success: true,
      messageId: result.MessageId
    };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}

/**
 * Send bid closing reminder email
 */
async function sendBidClosingReminder(recipientEmail, bidDetails, hoursLeft) {
  const params = {
    Source: process.env.SES_FROM_EMAIL || 'noreply@enderase.com',
    Destination: {
      ToAddresses: [recipientEmail]
    },
    Message: {
      Subject: {
        Data: `⏰ Reminder: Bid closing in ${hoursLeft} hours - ${bidDetails.tender_name}`,
        Charset: 'UTF-8'
      },
      Body: {
        Html: {
          Data: `
            <h2>Bid Closing Soon!</h2>
            <p>This is a reminder that the bid "<strong>${bidDetails.tender_name}</strong>" is closing in <strong>${hoursLeft} hours</strong>.</p>
            <p>Closing Date: ${new Date(bidDetails.bid_closing_date).toLocaleString()}</p>
            <p><a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/bids/${bidDetails.id}">View Bid Details</a></p>
          `,
          Charset: 'UTF-8'
        }
      }
    }
  };

  try {
    const result = await ses.sendEmail(params).promise();
    return {
      success: true,
      messageId: result.MessageId
    };
  } catch (error) {
    console.error('Error sending reminder email:', error);
    throw new Error(`Failed to send reminder: ${error.message}`);
  }
}

/**
 * Verify email address (for testing)
 */
async function verifyEmail(email) {
  const params = {
    EmailAddress: email
  };

  try {
    await ses.verifyEmailIdentity(params).promise();
    console.log(`Verification email sent to ${email}`);
    return {
      success: true,
      message: `Verification email sent to ${email}. Please check your inbox.`
    };
  } catch (error) {
    console.error('Error verifying email:', error);
    throw new Error(`Failed to verify email: ${error.message}`);
  }
}

module.exports = {
  sendNewBidNotification,
  sendBidClosingReminder,
  verifyEmail
};
