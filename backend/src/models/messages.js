const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    message:String,
    canal_id:String
})

module.exports = mongoose.model('Message', messageSchema);