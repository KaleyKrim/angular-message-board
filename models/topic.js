//jshint esversion: 6

module.exports = function(sequelize, DataTypes) {
  const topic = sequelize.define('topic', {
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
  });

  topic.associate = function(models){
    topic.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: {
        name: 'created_by',
        allowNull: false
      }
    });
    topic.hasMany(models.message, {
      foreignKey: 'topic_id'
    });
  };
  return topic;
};