module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orgName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    username:
    {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password:
    {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
};
