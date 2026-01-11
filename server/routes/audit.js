
const express = require('express');
const Lead = require('../models/Lead');
const nodemailer = require('nodemailer');

const router = express.Router();

// POST a new audit request
router.post('/', async (req, res) => {
    const { name, organization, phone, services, visitDate, visitTime } = req.body;

    // Validate Ethiopian phone number format
    const phoneRegex = /^\+251[79]\d{8}$/;
    if (!phone.replace(/\s/g, '').match(phoneRegex)) {
        return res.status(400).json({ error: 'Invalid Ethiopian phone number format.' });
    }
    
    try {
        // Save to MongoDB
        const lead = await Lead.create({ name, organization, phone, services, visitDate, visitTime });

        // Send email notification
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Enderase Website" <noreply@enderasesolutions.com>`,
            to: process.env.ADMIN_EMAIL,
            subject: 'New Site Audit Request Received',
            html: `
                <h2>New Site Audit Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Organization:</strong> ${organization}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Services of Interest:</strong> ${services.join(', ')}</p>
                <p><strong>Preferred Visit Date:</strong> ${visitDate}</p>
                <p><strong>Preferred Visit Time:</strong> ${visitTime}</p>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                // Don't block the response to the user, just log the error
            } else {
                console.log('Email sent:', info.response);
            }
        });
        
        res.status(201).json(lead);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
