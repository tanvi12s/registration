const mongoose = require('mongoose');
const validator = require('validator');

const subSchema1 = new mongoose.Schema({
    name :{
        type: String,
        // index: true,
        required: true
    },
    rollNo :{
        type:Number,
        // index: true,
        required: true
    },
    branch :{
        type: String,
        // index:true,
        required: true
    },
    email: {
        type:  String,
        required: true,
        unique: [true,"Email id already present"],
        validator(value){
            if(!validator.isEmail(value)){
             throw new Error("Invalid Email")
            }
        }
    },
    phoneNo: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
},
{
    timestamp:true,
});

const subSchema2 = new mongoose.Schema({
    name :{
        type: String,
        // index: true,
        required: true
    },
    rollNo :{
        type:Number,
        // index: true,
        required: true
    },
    branch :{
        type: String,
        // index:true,
        required: true
    },
    email: {
        type:  String,
        required: true,
        unique: [true,"Email id already present"],
        validator(value){
            if(!validator.isEmail(value)){
             throw new Error("Invalid Email")
            }
        }
    },
    phoneNo: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
},
{
    timestamp:true,
});


const studentSchema = new mongoose.Schema({
    team: {
        teamname: {
            type: String,
            required: true
        },
        teamsize: {
            type: String,
            required: true
        },
        groupA: [subSchema1],
        groupB: [subSchema2],
    }, 
});
    
//we will create a new collection for model
const Student = new mongoose.model('Student',studentSchema);

module.exports = Student;

/*https://team-registration.herokuapp.com/ */
/*{
    "team": {
        "teamname": "xyz",
        "teamsize": "4",
        "groupA": [
            {
                "name":"Harsh",
                "rollno": "279",
                "branch": "CSE",
                "emailId": "xyz@gmail.com",
                "phoneNo": "7915360226"
                
            }
        ],
        "groupB": [
            {
                "name":"Harsh",
                "rollno": "2000270100079",
                "branch": "CSE",
                "emailId": "abc@gmail.com",
                "phoneNo": "4567893455"
            }
        ]
    }
}*/