const logError = (error, req, res, next) => {
    console.log(error)
    next()
}

module.exports = logError