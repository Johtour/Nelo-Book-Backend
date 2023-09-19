const express = require('express');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'nelo_book',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql'
    }
)
const app = express();
const port = 3133;

app.get('/',(req,resp)=>{    
    resp.send('hello world');
});

app.listen(port,()=>{
    console.log('all good');
});