'use strict';
module.exports = (sequelize, DataTypes) => {
  const VideoUser = sequelize.define('VideoUser', {
    VideoId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  VideoUser.associate = function(models) {
    VideoUser.belongsTo(models.User)
    VideoUser.belongsTo(models.Video)
  };
  return VideoUser;
};