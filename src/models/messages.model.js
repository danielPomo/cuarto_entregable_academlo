const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Messages = db.define("messages", {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    chatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'chat_id',
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'created_by',
    },
})

module.exports = Messages
