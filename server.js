var express = require('express')
var app = express()

app.get('/:timestamp', function (req, res) {
    console.log("Hello");
    document.body.innerHTML = req.params;
});

app.listen(3000)