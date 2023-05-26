const db = require('../utils/database')
const {DataTypes} = require('sequelize')

const Users = db.define("users", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [6, 15]
        }
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 10],
        },
    },
    firstname: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING(30),
    }
})

module.exports = Users