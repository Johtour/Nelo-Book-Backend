module.exports = (sequelize,Sequelize)=>{
    // sequelize -> to object pou dhmiourgh8hke apo thn klash
    // Sequelize -> to instance ths klashs
    const User = sequelize.define('users',{
        username:{
            type:Sequelize.STRING, // bazw to Sequelize gia na parw statiko stoixeio apo thn bash
            allowNull:false,       // den epitrepw na stal8ei null apo front/back sthn bash
            unique:true            // 8a elegxei thn monadikothta
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:true
        },
        first_name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        last_name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        date_of_birth:{
            type:Sequelize.DATE,
            allowNull:false
        },
        profile_picture: Sequelize.STRING,
    });
    return User;
}