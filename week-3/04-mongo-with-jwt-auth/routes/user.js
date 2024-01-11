const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {jwt, secretKey} = require('../index');
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = new User({
        username: username,
        password: password
    })

    user.save().then(()=>res.json({message: "User created successfully"}));
});

router.post('/signin', (req, res) => {
    // Implement admin signin logic
    const username = req.body.username;
    const password = req.body.password;

    const token = jwt.sign({username, password}, secretKey);
    const bearerToken = `Bearer ${token}`;

    res.json({
        message: "Sign in successful!",
        token: bearerToken
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();

    res.json({
        Courses: courses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const decodedUser = req.userObject;

    const course = await Course.findOne({id: courseId});

    const user = await User.findOne({username: decodedUser.username});

    user.purchasedCourses.push(course);

    user.save().then(()=>res.json({message: "Course purchased successfully!"}));
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const decodedUser = req.userObject;

    const user = await User.findOne({username: decodedUser.username});

    res.json({
        purchasedCourses: user.purchasedCourses
    });
});

module.exports = router