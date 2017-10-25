//jshint esversion: 6

module.exports = function(sequelize, DataTypes){
  const message = sequelize.define('message', {
    name: {type: DataTypes.STRING, allowNull: false},
    authorId: DataTypes.INTEGER,
    topicId: DataTypes.INTEGER
  });
  message.associate = function(models){
    message.belongsTo(models.user, {
      as: 'author',
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: true
      }
    });
    message.belongsTo(models.topic, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: true
      }
    });
  };
  return message;
};