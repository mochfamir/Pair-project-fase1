'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    popularity: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Video.associate = function(models) {
    // Video.belongsTo(models.Admin)
    Video.belongsToMany(models.User, { through: models.VideoUser})
  };
  return Video;
};
