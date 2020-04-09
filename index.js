var express = require('express');
var app  = express();
//var User = require('./models/user');

app.set('view engine', 'ejs');

app.use(express.static('static'));

app.use(function (req, res, next) {
    res.tpl = {};
    return next();
});

require('./routes/user')(app);
require('./routes/outside')(app);
require('./routes/ticket')(app);


app.use('/',function (req,res,next) {

});

app.use(function (err, req, res, next) {
    res.status(500).send('Houston, we have a problem!');
    console.error(err.stack);
});

var server  = app.listen(2000,function(){
    console.log("Listen on: 2000");
    /*User.findOne({'name':'asd'}).exec(function (err,result) {
        console.log(err,result)
    });*/
});