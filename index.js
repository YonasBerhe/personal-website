"use strict"

let nodemailer, express, app, bodyParser, path, data, fs, creds;


 nodemailer = require('nodemailer');
 express = require('express');
 app = express();
 bodyParser = require('body-parser');
 path = require('path');
 fs = require('fs');
 creds = fs.readFileSync('creds.json', 'utf8');
 console.log(creds)


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


  var transporter = nodemailer.createTransport('SMTP', {
    service: 'outlook',
    auth: {
      user: 'ymberhe@outlook.com',
      pass: creds.pass
    }
  });

  // var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');


  // setup e-mail data with unicode symbols
  var mailOptions = {
    // check if you need these from
    from: data.Email, // sender address
    to: 'yonas.berhe007@gmail.com', // list of receivers
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
