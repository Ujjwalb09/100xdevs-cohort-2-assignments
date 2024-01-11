const { Router, json } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require('../db/index');
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
    message: "You have successfully signed in",
    authorizationToken: bearerToken
   })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    let courseBody = req.body;

    const course = new Course({
        id: courseBody.id,
        title: courseBody.title,
        description: courseBody.description,
        price: courseBody.price,
        imageLink: courseBody.imageLink,
        published: courseBody.published
    })

    course.save().then(()=>res.json({message: `Course created successfully, courseId: ${courseBody.id}`}))
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find();

    res.json({Courses: allCourses});
});

module.exports = router;