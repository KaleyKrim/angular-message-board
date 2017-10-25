//jshint esversion: 6

module.exports = function(sequelize, DataTypes) {
  const topic = sequelize.define('topic', {
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    created_by: DataTypes.INTEGER
  });

  topic.associate = function(models){
    topic.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: true
      }
    });
  };
  return topic;
};