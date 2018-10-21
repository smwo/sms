// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC84f28d1198bfb2436129321765e82667';
const authToken = '1ea258ac84429523bd44428e6a581a39';
const client = require('twilio')(accountSid, authToken);
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.post('/', (req, res) => { 
	var number = req.body.num;
	var text = res.body.text;
	sendSms(num,text,res);
	console.log('send to '+ number);
	
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function sendSms(num,body,res) {
	client.messages
  .create({
     body: body,
     from: '+17044198828',
     to: num,
   })
  .then(message => console.log(message.sid))
  .done();
	res.end(message.sid);
	
}

