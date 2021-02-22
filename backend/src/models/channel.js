const mongoose = require('mongoose');


const channelSchema = new mongoose.Schema({
    name:String,
    messageslist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message'
    }]
})

module.exports = mongoose.model('Channel', channelSchema);