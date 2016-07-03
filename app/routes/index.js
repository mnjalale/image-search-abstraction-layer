'use strict';

var path = process.cwd();
var ImageSearchAbstractionHandler = require(path + "/app/controllers/server/imageSearchAbstractionHandler.js");

module.exports = function(app){
    var imageSearchAbstractionHandler = new ImageSearchAbstractionHandler();
    
    app.route("/")
    .get(function(req,res){
        res.sendFile(path + '/public/index.html');
    });
    
    app.route("/latest/imagesearch")
        .get(imageSearchAbstractionHandler.getLatestSearchTerms);
        
    app.route("/imagesearch/:searchTerm")
        .get(imageSearchAbstractionHandler.searchImages);
    
};