const express = require('express');

const app = express();
const mongoose = require('mongoose')
require('dotenv/config');

// //Middleware
// app.use('/post' , () => {
//     console.log('middleware is runing');
// })
// Routs

app.get('/', (req, res) => {
    res.send('hello world kir be arase mos ')
});

app.get('/post', (req, res) => {
    let a = {
        "namr": "aras",
        "age": 20
    }
    res.send(a)
});


//connect to db
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    },
    () => {
        console.log('mongo is connected')
    }
);

// Listening to the server 
app.listen(3000);