const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://ujjwalbhatt09:Bhatt_2021@cluster0.e1a378i.mongodb.net/youdummy');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here

    username: {
        type: String,
        require: true
    },

    password: {
        type: String,
        required: true
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    
    id:{
        type: Number,
        required: true,
        unique: true
    },

    title:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    },

    imageLink:{
        type: String,
        required: true
    },

    published:{
        type: String,
        required: true
    }

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}