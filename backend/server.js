// require('dotenv').config(); // Loads .env from backend/ automatically with Root Directory set
// const express = require('express');
// const emailjs = require('@emailjs/nodejs');
// const path = require('path');

// const app = express();

// // Render-provided PORT + bind to 0.0.0.0 (required on Render)
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());

// // Serve static files from parent directory (project root)
// app.use(express.static(path.join(__dirname, '..')));

// // Initialize EmailJS
// emailjs.init({
//     publicKey: process.env.EMAILJS_PUBLIC_KEY,
//     privateKey: process.env.EMAILJS_PRIVATE_KEY,
// });

// // Contact Form Endpoint
// app.post('/send-contact', async (req, res) => {
//     const { name, email, subject, message } = req.body;

//     // Validation
//     if (!name || !email || !subject || !message) {
//         return res.status(400).json({
//             status: 'error',
//             message: 'All fields are required.'
//         });
//     }

//     // Add formatted timestamp to template
//     const receivedTime = new Date().toLocaleString('en-US', {
//         weekday: 'long',
//         month: 'long',
//         day: 'numeric',
//         year: 'numeric',
//         hour: 'numeric',
//         minute: '2-digit',
//         hour12: true,
//         timeZoneName: 'short'
//     }); // Example: "Friday, December 20, 2025 at 5:47 PM IST"

//     const templateParams = {
//         name,
//         email,
//         subject,
//         message,
//         time: receivedTime
//     };

//     try {
//         await emailjs.send(
//             process.env.EMAILJS_SERVICE_ID,
//             process.env.EMAILJS_CONTACT_TEMPLATE_ID,
//             templateParams
//         );

//         res.status(200).json({
//             status: 'success',
//             message: 'Message sent successfully!'
//         });
//     } catch (error) {
//         console.error('EmailJS Error:', error);
//         res.status(500).json({
//             status: 'error',
//             message: 'Failed to send message. Please try again later.'
//         });
//     }
// });

// // FIXED: Proper catch-all route for Express v5+ / path-to-regexp v8+
// app.get('/*catchall', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'index.html'));
// });

// // Start server
// app.listen(port, '0.0.0.0', () => {
//     console.log(`Server running on port ${port}`);
//     console.log(`Serving static files from: ${path.join(__dirname, '..')}`);
// });













require('dotenv').config();
const express = require('express');
const emailjs = require('@emailjs/nodejs');

const app = express();

// Render-provided PORT + bind to 0.0.0.0 (required on Render)
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Initialize EmailJS
emailjs.init({
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    privateKey: process.env.EMAILJS_PRIVATE_KEY,
});

// Optional: Simple health check endpoint (useful for uptime monitors)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'API is alive' });
});

// Contact Form Endpoint
app.post('/send-contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            status: 'error',
            message: 'All fields are required.'
        });
    }

    // Add formatted timestamp to template
    const receivedTime = new Date().toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    });

    const templateParams = {
        name,
        email,
        subject,
        message,
        time: receivedTime
    };

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

// Optional: Catch-all for unknown routes (returns 404 instead of serving files)
app.use((req, res) => {
    res.status(404).json({ status: 'error', message: 'Endpoint not found' });
});

// Start server
app.listen(port, '0.0.0.0', () => {
    console.log(`API server running on port ${port}`);
});