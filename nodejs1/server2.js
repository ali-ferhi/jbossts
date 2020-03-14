var express = require('express');
var bodyParser = require('body-parser');
const nodemailer = require("nodemailer");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res, next) {
    res.render('../view2/index2.ejs');
});

app.post('/email', function(req, res, next) {

    /*console.log('from : ' + req.body.sender);
    console.log('to : ' + req.body.destination);
    console.log('subject : ' + req.body.subject);
    console.log('text : ' + req.body.message);*/

    /* Notre code pour nodemailer */
    var transporter = nodemailer.createTransport(
        /*{
            host: "smtp.gmail.com",
            port: 465,
            secure: false,
            auth: {
              user: "afialkal05@gmail.com",
              pass: "alkhal2027"
            }
        }*/
        {
            service: 'gmail',
            auth: {
                user: 'afialkal05@gmail.com',
                pass: 'alkhal2027'
            }
        }
    );

    var mailOptions = {
        from: 'afialkal05@gmail.com',
        to: 'ali.ferhi1987@gmail.com',
        subject: 'hello',
        //text: req.body.message
        html: '<p>hello my friend</p>'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
           return console.log('failure to send email : ' + error);
        }
        console.log('mail sent succesfully : ' + info);
   });
   
   transporter.close();
});

app.use( function(req, res) {
    res.sendStatus(404);
});

app.listen(8080);


