'use strict';

var path = process.cwd();
var ImageSearchAbstractionHandler = require(path + "/app/controllers/server/imageSearchAbstractionHandler.js");

module.exports = function(app){
    var imageSearchAbstractionHandler = new ImageSearchAbstractionHandler();
    
    app.route("/")
    .get(function(req,res){
        res.sendFile(path + '/public/index.html');
    });
    
    app.route("/api/latest/imagesearch")
        .get(imageSearchAbstractionHandler.getLatestSearchTerms);
        
    app.route("/api/imagesearch/:searchTerm")
        .get(imageSearchAbstractionHandler.searchImages);
    
};