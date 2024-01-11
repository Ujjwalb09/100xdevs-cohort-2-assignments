const {jwt, secretKey} = require('../index');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let bearerToken = req.headers.authorization;
    let tokenArr = bearerToken.split(" ");
    const token = tokenArr[1];

    try{
          const decodedObj = jwt.verify(token, secretKey);
          req.userObject = decodedObj;
          next();
    } catch(err){
        res.send("Authorization token invalid!")
    }
}

module.exports = userMiddleware;