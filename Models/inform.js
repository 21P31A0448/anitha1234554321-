import mongoose from "mongoose";
const Schema = mongoose.Schema

const student = new Schema ({
    username : {
      type: String
    },
    projecttitle : {
        type: String,
        required: true
    },
    projectdescription : {
        type: String,
        required: true
    },projectrequirement : {
        type: String,
        required: true
    },deadline : {
        type: Date,
        required: true
    },manager :{
      type: String
    },employees : {
      type: String
    },status : {
      type: String
    },currentDate : {
      type: Date
    }
})

export default mongoose.model('QWERTY', student)  //collection name, variable