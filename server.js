require('dotenv').config(); 

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use(cors());

app.post('/submit-form', (req, res) => {
  const formData = req.body;



  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com', 
    port: 587, 
    secure: false, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: 'amirysvehlaform@outlook.com',
    to: 'admin@amirysvehla.com.au',
    subject: 'Form Submission',
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Form submitted successfully and email sent: ' + info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
