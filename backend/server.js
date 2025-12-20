require('dotenv').config({ path: './.env' }); // Load .env from backend folder
const express = require('express');
const emailjs = require('@emailjs/nodejs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the parent directory 
app.use(express.static(path.join(__dirname, '..')));

// Initialize EmailJS
emailjs.init({
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    privateKey: process.env.EMAILJS_PRIVATE_KEY,
});

// Endpoint for Contact Form (updated comments)
app.post('/send-contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ status: 'error', message: 'All fields are required' });
    }

    const templateParams = {
        name,        // {{name}} in your EmailJS template
        email,       // {{email}}
        subject,     // {{subject}}
        message      // {{message}}
    };

    try {
        await emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_CONTACT_TEMPLATE_ID,  // Make sure this template uses {{name}}, {{email}}, etc.
            templateParams
        );
        res.status(200).json({ status: 'success', message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Failed to send contact email:', error);
        res.status(500).json({ status: 'error', message: 'Failed to send message. Please try again.' });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});