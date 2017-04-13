var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000));

app.get('/:timestamp', (req, res) => {
    res.send(req.params);
});

app.listen(app.get('port'), () => {
    console.log("App is running", app.get('port'));
});