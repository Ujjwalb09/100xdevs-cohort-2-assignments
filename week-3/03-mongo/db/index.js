const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://ujjwalbhatt09:Bhatt_2021@cluster0.e1a378i.mongodb.net/youdemy');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
       type: String,
       required: true,
       unique: true
    },

    password: {
        type: String,
        required: true
    }

});

const UserSchema = new mongoose.Schema({
    // Schema definition here

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here

    id: {
        type: Number,
        unique: true,
        required: true
    },

    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    imageLink: {
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