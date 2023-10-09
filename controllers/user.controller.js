const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (request,response)=>{
    const {username,email,password,first_name,last_name,date_of_birth} = request.body
    if(!username){
        response.status(400).send({message:'Username cannot be empty'});
    };
    if(!email){
        response.status(400).send({message:'Email cannot be empty'});
    };
    if(!password){
        response.status(400).send({message:'Password cannot be empty'});
    };
    if(!first_name){
        response.status(400).send({message:'First Name cannot be empty'});
    };
    if(!last_name){
        response.status(400).send({message:'Last Name cannot be empty'});
    };
    if(!date_of_birth){
        response.status(400).send({message:'Date Of Birth cannot be empty'});
    };

    User.create({...request.body}).then((data)=>{
        response.send(data);
    }).catch((error)=>{
        response.status(500).send({
            message:error.message,
            ok:false
        });
    });
};

exports.delete = (request, response) => {
    const id = request.params.id;
    console.log(request);
  
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          response.send({
            message: "User was deleted successfully!"
          });
        } else {
          response.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(error => {
        response.status(500).send({
          message: "Could not delete User with id=" + id,
          error: error.message
        });
      });
  };

  exports.update = (request, response) => {
    const id = request.params.id;
  
    User.update(request.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          response.send({
            message: "User was updated successfully."
          });
        } else {
          response.send({
            message: `Cannot update User with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        response.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
  };

  exports.getUser = (request, response) => {
    const id = request.params.id;

    User.findByPk(id).then(user =>{
      if(user !== null){
        response.send(user)
      } else {
        response.status(404).send({
          message:`Cannot return User`
        })
      }
    }).catch(err => {
      response.status(500).send({
        message:`Error finding User`
      })
    })
  }

  exports.getUserByUsernameAndPassword = (request, response) => {
    const {username,password} = request.body;

    User.findOne({
      where: {
        username: username,
        password: password
    }}
    ).then(user =>{
      if(user !== null){
        response.send(user)
      } else {
        response.status(404).send({
          message:`Cannot find User with this Username or Password`
        })
      }
    }).catch(err => {
      response.status(500).send({
        message:`Error finding User`
      })
    })
  }

