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

sequelize.authenticate().then(()=>{
    console.log('Conection with base OK');
}).catch((error)=>{
    console.error('error connecting to database: ', error);
})

app.get('/',(req,resp)=>{    
    resp.send('hello world');
});

app.listen(port,()=>{
    console.log('all good');
});