const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('temperamento', {
    nombre: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  })
}
