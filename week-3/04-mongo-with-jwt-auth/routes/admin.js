const { Router, json } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin} = require('../db/index');
const {jwt, secretKey} = require('../index');
// const jwt = require("jsonwebtoken");
// const secretKey = "jwtKey";
const router = Router();


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;

    const admin = new Admin({
        username: username,
        password: password
    })

    admin.save().then(()=>res.json({message: "Admin created Successfully"}));
});

router.post('/signin', (req, res) => {
    // Implement admin signin logic
   const username = req.body.username;
   const password = req.body.password;

   const token = jwt.sign({username, password}, secretKey);
   const bearerToken = `Bearer ${token}`;

   res.json({
    message: "You have successfully signedIn",
    authorizationToken: bearerToken
   })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;