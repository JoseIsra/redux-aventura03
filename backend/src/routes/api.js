const router = require('express').Router();
const Channel = require('../models/channel');
const Message = require('../models/messages');
const mongoose = require('mongoose');

router.get('/channels', async (req, res)=> {
    try {
        const response  = await Channel.find({});
        const docs = JSON.stringify(response);
        res.send(docs);

    } catch (error) {
        console.log(error);
    }
})

router.post('/channel', async (req, res)=> {
try {
    const dat= await Channel.create(req.body);
    res.json(dat);res.end();
    console.log("DOCUMENTO AGREGADO EXITOSAMENTE! :) ")
    
} catch (error) {
    console.log(error);
}
})

router.post('/message',  (req, res)=> {
    Message.create(req.body)
    .then(message => {
        return Channel.findById(req.body.canal_id).then(channel => {
            channel.messageslist.push(message._id);
            return channel.save();
        })
    }).then(response => res.json(response))
    .catch(error => console.log(error));

})

router.get('/messages/:id', async (req, res) => {
    try {
        
        const response = await Channel.findById(req.params.id).populate('messageslist');
        //const messageJson = JSON.stringify(response);
            res.json(response.messageslist);
    } catch (error) {
        console.log(error);
    }
})





module.exports = router;