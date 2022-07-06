const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.STRING,
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vida: {
      type: DataTypes.STRING,
    },
    imagen: {
      type: DataTypes.TEXT,
    }
  });
};
