const db = require("../utils/database");
const Users = require('./users.model')
const Chats = require('./chats.model')
const { DataTypes } = require("sequelize");

const UsersChats = db.define(
  "users_chats",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: 'id',
      },
      field: 'user_id'
    },
    chatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Chats,
        key: 'id',
      },
      field: 'chat_id'
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UsersChats