module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.BIGINT(10),
      allowNull: false
    },
    Dob: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  return Employee;
};
