const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatdb', {useNewUrlParser: true},
{useUnifiedTopology: true},
{useFindAndModify: false},
{useCreateIndex: true })
.then(()=> console.log("DB CONECTADA")).catch(err => console.log(err));