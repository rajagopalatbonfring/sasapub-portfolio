require('dotenv').config(); // Loads .env from backend/ automatically with Root Directory set
const express = require('express');
const emailjs = require('@emailjs/nodejs');
const path = require('path');

const app = express();

// Render-provided PORT + bind to 0.0.0.0 (required on Render)
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files from parent directory (project root)
app.use(express.static(path.join(__dirname, '..')));

// Initialize EmailJS
emailjs.init({
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    privateKey: process.env.EMAILJS_PRIVATE_KEY,
});

// Contact Form Endpoint
app.post('/send-contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            status: 'error',
            message: 'All fields are required.'
        });
    }

    const templateParams = { name, email, subject, message };

    try {
        await emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_CONTACT_TEMPLATE_ID,
            templateParams
        );

        res.status(200).json({
            status: 'success',
            message: 'Message sent successfully!'
        });
    } catch (error) {
        console.error('EmailJS Error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to send message. Please try again later.'
        });
    }
});

// FIXED: Catch-all route compatible with Express v5+ / path-to-regexp v8+
app.get('/:catchAll*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Start server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
    console.log(`Serving static files from: ${path.join(__dirname, '..')}`);
});