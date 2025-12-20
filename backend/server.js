require('dotenv').config(); // Automatically loads .env from the current directory (backend/)
const express = require('express');
const emailjs = require('@emailjs/nodejs');
const path = require('path');

const app = express();

// Use Render's provided PORT, fallback to 3000 for local development
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files (HTML, CSS, JS, images) from the parent directory (project root)
app.use(express.static(path.join(__dirname, '..')));

// Initialize EmailJS with your credentials
emailjs.init({
    publicKey: process.env.EMAILJS_PUBLIC_KEY,   // Optional for server-side, but safe to include
    privateKey: process.env.EMAILJS_PRIVATE_KEY, // Required for server-side sending
});

// Contact Form Endpoint
app.post('/send-contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Basic validation
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

// IMPORTANT: Catch-all route to serve index.html for client-side routing (hash # links)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Start server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
    console.log(`Serving static files from: ${path.join(__dirname, '..')}`);
});