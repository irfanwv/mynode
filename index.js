var express = require('express');
var nodemailer = require("nodemailer");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "james01.matthew@gmail.com",
        pass: "success@123"
    }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/
app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/send',function(req,res){
    var mailOptions={
        to : 'mohdirfan11@gmail.com', //req.query.to,
        subject :'node test',  // req.query.subject,
        text : 'test'   // req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});/*--------------------Routing Over----------------------------*/
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


