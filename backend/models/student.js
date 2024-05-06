const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : String, 
    roll_no : String,
    class_code : String,
    password : String,
    role : {
        type: String,
        default : "student"
    }
})

const StudentModel = mongoose.model("students", studentSchema)
module.exports = StudentModel

