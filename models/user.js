//jshint esversion: 6

module.exports = function(sequelize, DataTypes){
  const user = sequelize.define('user', {
    username: {type: DataTypes.STRING, unique: true, allowNull: false}
  });

  user.associate = function(models){
    user.hasMany(models.message, {
      foreignKey: {
        name: 'author_id',
        allowNull: false
      }
    });
  };

  return user;
};