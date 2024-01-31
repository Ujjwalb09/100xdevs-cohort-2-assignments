const { Router, json } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course, User} = require('../db/index');
const {jwt, secretKey} = require('../index');
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

router.post('/signin', async (req, res) => {
    // Implement admin signin logic
   const username = req.body.username;
   const password = req.body.password;

   const admin = await Admin.findOne({
    username,
    password
   })

   if(admin){
       const token = jwt.sign({username}, secretKey);
       const bearerToken = `Bearer ${token}`;
    
       res.json({
        message: "You have successfully signed in",
        authorizationToken: bearerToken
       })
   } else {
    res.status(411).json({message: "Incorrect email or pass"});
   }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    let courseBody = req.body;

    const course = await Course.create({
        title: courseBody.title,
        description: courseBody.description,
        price: courseBody.price,
        imageLink: courseBody.imageLink,
        published: courseBody.published
    })

    res.json({message: `Course created successfully, courseId: ${course._id}`});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find();

    res.json({Courses: allCourses});
});

module.exports = router;