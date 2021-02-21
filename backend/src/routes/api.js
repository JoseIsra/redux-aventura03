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
    await Channel.create(req.body);
    res.send('doc recibido');res.end();
    console.log("DOCUMENTO AGREGADO EXITOSAMENTE! :) ")
    
} catch (error) {
    console.log(error);
}
})

router.post('/message', async (req, res)=> {
    // const {message, id_channel} = req.body;
   // const newId = mongoose.Types.ObjectId(id_channel);
    try {   
        await Message.create(req.body);
        res.send("mensaje enviado");res.end();
        console.log("mensaje agregado al canal");
    } catch (error) {
        console.log(error);
    }
        
})

router.get('/messages/:id', async (req, res) => {
    try {
        
        const response = await Message.find({canal_id:req.params.id});
        const messageJson = JSON.stringify(response);
        res.send(messageJson);
    } catch (error) {
        console.log(error);
    }
})





module.exports = router;