'use strict';

var path = process.cwd();
var SearchTerms = require(path + "/app/models/searchTerm.js");
var request = require("request");

function ImageSearchAbstractionHandler(){
    
    this.getLatestSearchTerms = function(req,res){
        SearchTerms.find({},{"_id":false})
            .sort({ when : 'desc'})
            .select({ term:1,when:1})
            .limit(10)
            .exec(function(err,result){
                if(err){
                    throw err;
                }
                
                res.json(result);
            });
    };
    
    this.searchImages = function(req,res){
        var searchQuery = req.params.searchTerm;
        var date = new Date();
        var searchTerm = new SearchTerms({term: searchQuery,when:date});
        var searchEngineId = process.env.SEARCH_ENGINE_ID;
        var apiKey = process.env.API_KEY;
        
        var offset =1;
        if(req.query.offset){
            offset= req.query.offset;
        }
        
        var searchURL = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + searchEngineId + "&q=" + searchQuery + "&searchType=image&start=" + offset + "";
        
        searchTerm.save(function(err,result){
            if(err){
                throw err;
            }
            
            request({
                url:searchURL,
                json:true
            }, function(error,response,body){
                if(!error && response.statusCode===200){
                    var items = body.items;
                    var returnItems = [];
                    for(var i=0;i<items.length;i++){
                        
                        returnItems.push({
                            "url": items[i].link,
                            "snippet":items[i].snippet,
                            "thumbnail":items[i].image.thumbnailLink,
                            "context":items[i].image.contextLink
                        });
                    }
                    
                    res.json(returnItems);
                }
            });
            
        });
    };
}

module.exports = ImageSearchAbstractionHandler;