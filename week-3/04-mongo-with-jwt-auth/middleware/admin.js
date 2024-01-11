const {jwt, secretKey} = require("../index");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let bearerToken = req.headers.authorization;
    let tokenArr = bearerToken.split(" ");
    let token = tokenArr[1];

    try{
        jwt.verify(token, secretKey);
        next();
    } catch(err){
        res.send("Autorization token invalid!");
    }
}

module.exports = adminMiddleware; //default exports