const express = require('express');
const router = express.Router();

router.get('/' , (req, res) => {
    let a = {
        "namr": "aras",
        "age": 20
    }
    res.send(a)
});


module.exports = router;
