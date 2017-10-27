//jshint esversion: 6

module.exports = function(sequelize, DataTypes){
  const message = sequelize.define('message', {
    body: {type: DataTypes.TEXT, allowNull: false}
  });
  message.associate = function(models){
    message.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: {
        name: 'author_id',
        allowNull: false
      }
    });
  };
  // message.associate = function(models){
  //    message.belongsTo(models.topic, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       name: 'topic_id',
  //       allowNull: false
  //     }
  //   });
  //  };
  return message;
};