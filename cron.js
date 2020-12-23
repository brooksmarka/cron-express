const express = require('express')
const cron = require('node-cron')
require('dotenv').config()
var nodemailer = require('nodemailer')
const app = express()
const port = 3000



//sends every 4 hours
//cron.schedule("* */4 * * *",()=> {
//sends every minute
cron.schedule("* * * * *",()=> {
    console.log("send the email now")
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
})

var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.MAILTRAP_EMAIL,
        pass: process.env.MAILTRAP_PASSWORD
}
});

var mailOptions = {
    from: 'markabrooks@gmail.com',
    to: 'markabrooks@gmail.com',
    subject: 'Sending Email using our sweet node app',
    text: `Hi this is node and we are sending this email`
};

// configure routes
app.get("/", (req, res) => {
    res.send("index route")
})
// start the server
app.listen(port, () => console.log(`Server: PORT ${port} active`))
