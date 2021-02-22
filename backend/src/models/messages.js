const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    message:String,
    canal_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Channel'
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Message', messageSchema);