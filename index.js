

const express = require('express')
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

const blog = require('./routes/blog')
app.use('/api/v1',blog);

const dbConnect = require('./config/database')
dbConnect()

app.get('/',(req,res)=>{
    return res.send(`<h1>This is homepage baby</h1>`)
})

app.listen(PORT,()=>{
    console.log('App started at Port' + PORT);
})

