const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const HistOnOff = sequelize.define('histonoff', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ket: {
    type: DataTypes.ENUM('start', 'stop'),
    allowNull: false
  },
  idSpot: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cek: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'histonoff'
})

module.exports = HistOnOff
