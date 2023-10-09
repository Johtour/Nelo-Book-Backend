module.exports = app => {
    const users = require('../controllers/user.controller.js');
    const router = require('express').Router();

    router.post('/',users.create);

    router.delete('/:id', users.delete);

    router.put('/:id',users.update);

    router.get('/:id',users.getUser);

    router.post('/login',users.getUserByUsernameAndPassword);
    app.use('/api/user',router);
}