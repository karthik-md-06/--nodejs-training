const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID = '38548963332-1ouerppa2qdj37m0loe0ufjlgl8idlgp.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04ulhBzRMDkTiCgYIARAAGAQSNwF-L9Irja02k_Rmd0TMmjnPWolxNw7HB_TyW6nPF5VNInQtmkoQNtTEJP4gBlr39flbneJrAHM';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'karthik.md@polynomial.ai',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'YOURPOLYNOMIAL📧<karthik.md@polynomial.ai>',
      to: 'hppriya27@gmail.com',
      subject: 'Hello from gmail using API',
      text: 'Hello from gmail email using API',
      html: '<h1>Hello from gmail email using API</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));