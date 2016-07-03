'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SearchTerm = new Schema({
    term: String,
    when: Date
});

module.exports = mongoose.model('SearchTerm',SearchTerm);