var express = require('express');
var app = express();
var response =require('/.response');
app.use('/response' , response);
app.listen(3000);