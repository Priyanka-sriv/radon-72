const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


// Write a middleware that logs (console.log) some data everytime any API is hit
app.use (
    function (req, res, next) {
        console.log ("you should be logging something like this on each line");
        const dateTime = new Date();
        console.log(dateTime);
        console.log(" IP Addresss " + req.socket.localAddress);
        console.log(req.url);
        next();
  }
  );

app.use('/', route);




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
