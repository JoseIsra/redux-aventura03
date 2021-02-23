const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://israelenlaconsola:${process.env.DB_PASSWORD}@cluster0.api2z.mongodb.net/mydbchat?retryWrites=true&w=majority`, 
{useNewUrlParser: true},
{useUnifiedTopology: true},
{useFindAndModify: false},
{useCreateIndex: true })
.then(()=> console.log("DB CONECTADA")).catch(err => console.log(err));