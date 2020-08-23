const jwt = require("jsonwebtoken")

module.exports = function(request,res,next){
    const token = request.header('auth-token')
    if (!token) return res.status(401).send("access Denied!")

    try{
        const verified = jwt.verify(token,process.env.SECRET_TOKEN_ROCK)
        request.user = verified
        next()
    }catch(err){res.send("invalid TOken")}
}