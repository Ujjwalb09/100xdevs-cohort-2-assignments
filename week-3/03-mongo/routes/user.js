const { Router } = require("express");
const router = Router();
const {User} = require('../db/index');
const {Course} = require('../db/index');
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const user = new User({
        username: username,
        password: password
    })

    user.save().then(()=>res.json({message: "User created successfully"}));
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    let coursesFound = await Course.find();
    res.json({courses: coursesFound});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    /*
    let courseId = req.params.courseId;
    let course = await Course.find({_id: courseId});
    
    let user = await User.find({username: req.headers.username});

    user[0].purchasedCourses.push(course[0]);

    user[0].save().then(()=>res.json({message: "Course purchased successfully"}));
    */

    /*An alternate way to implemenet the course purchase logic. In this we will not
    reference to whole course document in purchasedCourse array but will
    reference the courseObject ID.*/

    let courseId = req.params.courseId;
    let username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push":{
            purchasedCourses: courseId
        }
    })

    res.json({message: "Course purchased successfully"});
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    /*let user = req.headers.username;

    let userOBJ = await User.find({username: user});

    res.json({purchasedCourses: userOBJ[0].purchasedCourses});*/

     /*An alternate way to implemenet fetching purchased course logic. In this we will fetch course object via the courseObject ID we saved in our purchasedCourse array*/

     const user = await User.findOne({username:req.headers.username});

     const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
     })

     res.json({
        Your_Purchases: courses
     });
});

module.exports = router