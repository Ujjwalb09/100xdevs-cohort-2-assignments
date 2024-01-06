const {User} = require('../db/index');


function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    User.exists({username: username, password: password})
       .then((userExists)=>userExists ? next() : res.sendStatus(404));
}

module.exports = userMiddleware;