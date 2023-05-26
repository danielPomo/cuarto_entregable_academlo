const jwt = require('jsonwebtoken')

const authenticate = ( req, res, next ) => {
    try {
        const retrievedToken = req.headers['access-token']
        if(!retrievedToken) {
            return res.status(401).json({
                error: 'No token retrieved',
                message: 'The user may not be logged or token is not being provided'
            })
        }
        const decodedToken = jwt.verify(retrievedToken, "HaveANiceDay", {
            algorithms: 'HS512'
        } )
        req.user = decodedToken
        console.log(req.user)
        next()
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = authenticate