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
    password: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    birthday: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    salt: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.belongsToMany(models.Video, { through: models.VideoUser })
  };
  User.prototype.rupiah = function() {
    return `Rp. ${this.balance}`
  }
  return User;
};
