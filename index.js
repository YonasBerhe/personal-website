"use strict"

let nodemailer, express, app, bodyParser, path, data, fs, creds, smtpTransport;


 nodemailer = require('nodemailer');
 smtpTransport = require('nodemailer-smtp-transport');
 express = require('express');
 app = express();
 bodyParser = require('body-parser');
 path = require('path');
 fs = require('fs');
 creds = fs.readFileSync('creds.json', 'utf8');
//  console.log(creds)


// var morgan = require('morgan');
// app.use(morgan('combined'));

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use('/', function(req, res) {
// res.sendFile(path.join(__dirname + '/public/index.html'))
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.post('/data', function(req, res) {
  console.log(req.body);
  data = req.body;

//Check out node mailer well known servies!
//  https://nodemailer.com/2-0-0-beta/setup-smtp/well-known-services/

var options = {
    service: 'EMAIL PROVIDER',
    auth: {
        user: 'YOUREMAIL',
        pass: 'YOURPASS WORD'
    }};
  var transporter = nodemailer.createTransport(smtpTransport(options))



  // setup e-mail data with unicode symbols
  var mailOptions = {
    // check if you need these from
    from: data.Email, // sender address
    to: 'exp@expmail.com', // list of receivers
    subject: 'Message from personal website', // Subject line
    // text: // plaintext body
    html: "</b>" + data.Name +  "</br>" + data.Email + "</br> " +   data.Message 
  };

  // send mail with defined transport object
  // transporter.sendMail(mailOptions, function(error, info) {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   console.log('Message sent: ' + info.response);
  // });


transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
  // res.sendStatus(200);
})


app.listen(4812, function() {
  console.log("server has started on port 4812");

});
