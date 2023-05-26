const {Sequelize} = require('sequelize')

const db = new Sequelize({
    host: "localhost",
    database: "chat_api",
    username: "postgres",
    password: "root",
    dialect: "postgres",
    port: 5432,
})

module.exports = db


