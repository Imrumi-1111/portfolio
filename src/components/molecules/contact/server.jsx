// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// const port = 3000; // Change this to the desired port number

// app.use(express.json());

// // Define a POST route to handle sending emails
// app.post('/send-email', (req, res) => {
//   const { subject, body, recipient } = req.body;

//   // Create a nodemailer transporter using your email provider settings
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail', // e.g., Gmail, Yahoo, etc.
//     auth: {
//       user: 'upasanachakraborty18@gmail.com',
//       pass: 'I@mrumif9',
//     },
//   });

//   // Define the email options
//   const mailOptions = {
//     from: 'your-email@example.com',
//     to: recipient,
//     subject: subject,
//     text: body,
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('Email sent successfully');
//     }
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
