const mongoose = require('mongoose');

const dataset = mongoose.Schema({
    Timeset:Number
})
module.exports = mongoose.model("Server",dataset, "time");