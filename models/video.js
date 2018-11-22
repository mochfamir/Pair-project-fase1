'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    popularity: DataTypes.INTEGER
  }, {});
  Video.associate = function(models) {
    // Video.belongsTo(models.Admin)
    Video.hasMany(models.VideoUser)
  };
  return Video;
};
