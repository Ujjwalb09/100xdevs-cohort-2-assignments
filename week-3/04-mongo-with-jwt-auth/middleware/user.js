const {jwt, secretKey} = require('../index');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let bearerToken = req.headers.authorization;
    let tokenArr = bearerToken.split(" ");
    const token = tokenArr[1];

    try{
          const decodedObj = jwt.verify(token, secretKey);
          req.username = decodedObj.username;
          next();
    } catch(err){
        res.status(403).send("Autorization token invalid!");
    }
}

module.exports = userMiddleware;