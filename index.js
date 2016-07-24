"use strict"

let nodemailer, express, app, bodyParser, path, data, fs, creds, smtpTransport, goodreads, transporter, options, mailOptions, key, secret, gr;


nodemailer = require('nodemailer');
smtpTransport = require('nodemailer-smtp-transport');
express = require('express');
app = express();
bodyParser = require('body-parser');
path = require('path');
fs = require('fs');
creds = JSON.parse(fs.readFileSync('creds.json', 'utf8'));

//  console.log(creds)
goodreads = require('goodreads');
// trying requiring files for goodreads in this one

key = creds.key;
secret = creds.secret;

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use('/', function(req, res) {
// res.sendFile(path.join(__dirname + '/public/index.html'))
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



gr = new goodreads.client({
  'key': key,
  'secret': secret
});

app.get('/', function (req, res) {
  res.send('Hello Server');
});

app.get('/books', function (req, res) {

  gr.getSingleShelf({
    'userID': '40688141',
    'shelf': 'web',
    'page': 1,
    'per_page': 200
  }, function (json) {
    if (json) {
      res.send(json);
      console.log(JSON.stringify(json));
      // return res.end();
    }
  });

});


app.post('/data', function (req, res) {
  console.log(req.body);
  data = req.body;


  options = {
    service: 'hotmail',
    auth: {
      user: 'ymberhe@outlook.com',
      pass: 'Four81234206'
    }
  };
  transporter = nodemailer.createTransport(smtpTransport(options))



  // setup e-mail data with unicode symbols
  mailOptions = {
    // check if you need these from
    from: data.Email, // sender address
    to: 'yonas.berhe007@gmail.com', // list of receivers
    subject: 'Message from personal website', // Subject line
    // text: // plaintext body
    html: "</b>" + data.Name + "</br>" + data.Email + "</br> " + data.Message
  };



  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
  // res.sendStatus(200);
})


app.listen(4812, function () {
  console.log("server has started on port 4812");

});
