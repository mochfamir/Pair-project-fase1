'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name   : DataTypes.STRING,
    last_name    : DataTypes.STRING,
    email: {
      type       : DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg :'alamat email yang anda masukan tidak valid'
        }
      }
    },
    password: {
      type        : DataTypes.STRING,
      validate  :{
        len:{
          args:[7,20],
          msg:'password anda harus berupa charachter dengan panjang minimum 7 '
        }
      }
        },
    phone: {
      type      :DataTypes.INTEGER,
      validate  :{
        len:{
          args  :[10,13],
          msg   :'Silahkan memasukan Phone Number dengan panjang karakter 10-13'
        }
      }
    },
    birthday: DataTypes.STRING,
    balance: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.VideoUser)
  };
  return User;
};
