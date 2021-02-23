
const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
require('./dbconfig');

app.use(express.json());

app.use(cors({
    origin:'http://localhost:3000'
}));

app.use('/api',require('./routes/api'));
app.listen(process.env.PORT ||8081 , ()=> {
    console.log('server en linea....');
})