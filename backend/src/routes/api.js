const router = require('express').Router();
const Channel = require('../models/channel');
const Message = require('../models/messages');


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
    res.send("canal agregado correctamente");res.end();
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
    }).then(response => {res.send("response");res.end()})
    .catch(error => console.log(error));

})

router.get('/messages/:id', async (req, res) => {
    try {
        
    const response =  await Channel.findById(req.params.id)
        .populate('messageslist');

    const niceArray = response.messageslist.sort((a,b)=> {return new Date(a.date) - new Date(b.date)})
        const json = JSON.stringify(niceArray);
            res.send(json);
    } catch (error) {
        console.log(error);
    }
})





module.exports = router;