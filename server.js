const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import cors to allow cross-origin requests (if needed)
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;
const passwordd = encodeURIComponent("Marijuana08&@");


  
// Middleware
app.use(cors()); // Allow all origins (you can configure cors options as needed)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(`mongodb+srv://vicreno08:${passwordd}@renocluster.gjai6v8.mongodb.net/Contact-Form`, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

//check if mongodb connection is successful
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
db.once('open', () => {
  console.log('MongoDB connected successfully!');
});
db.on('disconnected', () => {
  console.log('MongoDB disconnected.');
});

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Message = mongoose.model('Message', MessageSchema);

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'smtp.gmail.com', // Replace this with the email service you're using (e.g., Gmail, Outlook, etc.)
    port: 465, // Use port 465 for SSL (secure)
    secure: true, // Use SSL (secure)
    auth: {
      user: 'vicreno08@gmail.com', // Replace this with your email address
      pass: 'henbdnfprzexvnhe', // Replace this with your email password or an app-specific password if using Gmail
    },
  });/**/


// API Endpoint for form submission
app.post('/api/messages', async (req, res) => {
  const { name, email, message } = req.body;
 // Check for empty fields
 if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Email validation using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Create a new message instance
  const newMessage = new Message({
    name,
    email,
    message,
  });

  try {
  // Save the message to the database
  const savedMessage = await newMessage.save();
  console.log('Message saved successfully:', savedMessage);

 
 // Send email notification to the designated email address
 const mailOptions = {
    from: email, // Replace this with your email address
    to: 'vicreno08@gmail.com', // Replace this with the designated email address for notifications
    subject: 'New Message Received',
    text: `You've received a new message from ${name} (${email}): ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });/**/

return res.json({ message: 'Message saved successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to save message' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
