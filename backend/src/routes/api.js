const router = require('express').Router();
const Channel = require('../models/channel');



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



module.exports = router;