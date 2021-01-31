'use strict';
module.exports = (sequelize, DataTypes) => {
  const VideoUser = sequelize.define('VideoUser', {
    VideoId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      afterCreate(videouser, option) {
        sequelize.models.User.findById(videouser.UserId)
          .then(user => {
            sequelize.models.Video.findById(videouser.VideoId)
            .then(video => {
              console.log(user.balance +'-='+ video.price)
              user.balance -= video.price
              return user.save()
            })
          })
      }
    }
  });
  VideoUser.associate = function(models) {
    VideoUser.belongsTo(models.User)
    VideoUser.belongsTo(models.Video)
  };
  VideoUser.myVideos = function(id) {
    const Op = sequelize.Op
    return VideoUser.findAll({
      where: {
        UserId: {
          [Op.not]: id
        }
      }
    })
  }
  return VideoUser;
};