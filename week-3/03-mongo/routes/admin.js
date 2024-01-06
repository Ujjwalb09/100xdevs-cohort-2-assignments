const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin} = require('../db/index');
const {Course} = require('../db/index');
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const admin = new Admin({
        username: username,
        password: password
    })

    admin.save().then(()=>res.json({message: "Admin created successfully"}));
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const courseObj = req.body;

    const course = new Course({
        id: courseObj.id,
        title: courseObj.title,
        description: courseObj.description,
        price: courseObj.price,
        imageLink: courseObj.imageLink
    })

    course.save().then(()=>res.json({message: "Course created successfully", courseId: courseObj.id}));

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    let coursesFound = await Course.find();
    res.json({courses: coursesFound});
});

module.exports = router;