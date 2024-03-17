import mongoose from "mongoose"
const Schema = mongoose.Schema

const maintenance = new Schema ({
    fname : {
        type: String
    },
    email: {
        type: String
    },
    address : {
        type: String
    },
    number : {
        type: String
    },
    anumber : {
        type: String
    },
    vnumber : {
        type: String
    },
    engine : {
        type: String
    },
    model : {
        type: String
    },
    year : {
        type: String
    },
    colour : {
        type: String
    }
})

export default mongoose.model('record', maintenance)