'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'alamat email yang anda masukan tidak valid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 20]
        // {
        //   args: [5, 20],
        //   msg: 'password anda harus berupa charachter dengan panjang minimum 5 '
        // }
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      validate: {
        len: {
          args: [10, 13],
          msg: 'Silahkan memasukan Phone Number dengan panjang karakter 10-13'
        }
      }
    },
    birthday: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    salt: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.belongsToMany(models.Video, { through: models.VideoUser })
  };
  return User;
};
