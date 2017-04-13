var express = require('express')
var app = express()

app.get('/:timestamp', function (req, res) {
    document.body.innerHTML = req.params;
});

app.listen(3000)