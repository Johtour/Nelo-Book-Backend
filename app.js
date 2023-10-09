const express = require('express');
const app = express();
const port = 3133;
const db = require('./models');
app.use(express.json());

db.sequelize.sync().then(()=>{
    console.log('synced');
}).catch((error)=>{
    console.error(error.message);
});

require('./routes/user.routes')(app);

app.listen(port,()=>{
    console.log('all good');
});