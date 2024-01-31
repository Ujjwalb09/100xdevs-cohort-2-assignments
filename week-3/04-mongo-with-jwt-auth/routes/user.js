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

router.post('/signin', async (req, res) => {
    // Implement admin signin logic
    const username = req.body.username;
    const password = req.body.password;
 
    const user = await User.findOne({
     username,
     password
    })
 
    if(user){
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();

    res.json({
        Courses: courses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    /*const courseId = req.params.courseId;
    const username = req.username;

    const course = await Course.findOne({id: courseId});

    const user = await User.findOne({username});

    user.purchasedCourses.push(course);

    user.save().then(()=>res.json({message: "Course purchased successfully!"}));*/

    const courseId = req.params.courseId;
    const username = req.username;

    await User.updateOne({
        username
    }, {
        "$push":{
            purchasedCourses: courseId
        }
    })

    res.json({
        message: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    /*const username = req.username;

    const user = await User.findOne({username});

    res.json({
        purchasedCourses: user.purchasedCourses
    });*/

    const username = req.username;
    const user = await User.findOne({username:username});

    console.log(user);

    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })

    res.json({
        your_courses: courses
    });
});

module.exports = router