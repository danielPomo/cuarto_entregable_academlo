const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ChatTypes = db.define(
  "chat_types",
  {
    chatType: {
      type: DataTypes.STRING(6),
      field: "chat_type",
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ChatTypes;
