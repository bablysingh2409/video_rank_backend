const nodemailer = require('nodemailer');
require('dotenv').config();


const smtpPassword = process.env.SMTP_PASSWORD;

const callbackController = {
  requestCallback: async (req, res) => {
    try {
      const { name, contactNumber } = req.body;

      // Send email notification
      await sendEmailNotification({ name, contactNumber });

      res.status(200).json({ message: 'Callback request submitted successfully' });
    } catch (error) {
      console.error('Error submitting callback request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

async function sendEmailNotification({ name, contactNumber }) {
  // nodemailer to send emails
  const transporter = nodemailer.createTransport({
    // email service 
    service:'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'bablysingh2409@gmail.com',
        pass: smtpPassword
    }
  });


  // Email content
  const emailContent = {
    from: 'bablysingh2409@gmail.com',
    to: 'singhlovely1309@gmail.com',
    subject: 'Callback Request',
    text: `Callback request details:\nName: ${name}\nContact Number: ${contactNumber}`,
  };

  // Send the email

  const sendMail=async(transporter,emailContent)=>{
    try{
       await transporter.sendMail(emailContent);
       console.log('email has sent')
    }
    catch(err){
        console.log(err)
    }
  }
  sendMail(transporter,emailContent);
}



module.exports = callbackController;
