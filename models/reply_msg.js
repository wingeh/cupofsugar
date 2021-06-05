const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ReplyMsg extends Model {}

ReplyMsg.init(
  {
    id: {
      type: DataTypes.INTEGER, 

      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   ReplyMsg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        id: 'id'
      }
    },
    id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'product',
          id: 'id'
        }
      }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'messages',
  }
);

module.exports = Messages;