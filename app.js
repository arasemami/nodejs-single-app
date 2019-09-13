const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('hello world')
});

app.get('/aras', (req,res) => {
    let a = { "namr":"aras","age":20 }
    res.send(a)
});


// listening to the server 
app.listen(3000);
