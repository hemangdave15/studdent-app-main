const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId:{
        type:String,
        required:true,
        unique:true,
    },
    studentName:{
        type:String,
        require:true
    },
    branch:{
       type:String,
       required:true 
    },
    joiningDate:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:String,
        required:true
    },
    cgpa:{
        type:Number,
        required:true
    },
    activeStudent:{
        type:Boolean,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;