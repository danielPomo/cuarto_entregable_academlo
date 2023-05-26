const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Chats = db.define("chats", {
  title: DataTypes.STRING(35),
  chatTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "chat_type_id",
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "created_by",
  },
});

module.exports = Chats;
