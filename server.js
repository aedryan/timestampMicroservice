const path = require("path");
const express = require('express');
const app = express();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.set('port', (process.env.PORT || 5000));
app.use('/favicon.ico', express.static("favicon.ico"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/:date', (req, res) => {
    const param = req.params.date;
    const unixTest = /^-?\d+$/;
    let result, date;

    if (unixTest.test(param)) {
        date = new Date(param * 1000);
    } else if (Object.prototype.toString.call(new Date(param)) === "[object Date]" && !isNaN(new Date(param).getTime())) {
        date = new Date(param);
    }
    console.log(new Date(param));
    result = { unix: (date ? (+ date / 1000) : null), natural: (date ? (months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()) : null) };
    res.json(result);
});

app.listen(app.get('port'), () => {
    console.log("App is running", app.get('port'));
});