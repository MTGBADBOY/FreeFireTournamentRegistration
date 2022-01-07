const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/contactform.html')
})

app.post('/', (req, res) =>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sendmailincs@gmail.com',
            pass: 'sendmailincs@@$$',
        }
    })

    const mailOptions = {
        from: 'sendmailincs@gmail.com',
        to: 'nirjoyhasanantor@gmail.com',
        subject: 'Registration',
        text:"Team Name:"+req.body.name+"\n"+"Player 1:"+req.body.player1+"\nPlayer 2:"+req.body.player2 +"\nPlayer 3:"+ req.body.player3 +"\nPlayer 4:"+req.body.player4 +"\nPlayer 5:"+req.body.player5+"\n \nPlayer 1 UID:"+req.body.player1UID+"\nPlayer 2 UID:"+req.body.player2UID+"\nPlayer 3 UID:"+req.body.player3UID+"\nPlayer 4 UID:"+req.body.player4UID+"\nPlayer 5 UID:"+req.body.player5UID
    }

    transporter.sendMail(mailOptions,(error,info) => {
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})


app.listen(PORT, ()=>{
    console.log(`Server Running On Port ${PORT}`);
})