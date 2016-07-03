'use strict';

var express = require("express"),
    mongoose = require("mongoose"),
    routes = require("./app/routes/index.js");
    
var app = express();
require("dotenv").load();
mongoose.connect(process.env.MONGO_URI);

app.use("/public",express.static(process.cwd() + '/public'));
app.use("/controllers",express.static(process.cwd() + '/app/controllers'));
app.use("/common",express.static(process.cwd() + '/app/common'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port,function(){
    console.log('Listening on port ' + port + '...');
});
