import mongoose from "mongoose"
const Schema = mongoose.Schema

const address = new Schema ({
    fname : {
        type: String
    },
    email: {
        type: String
    },
    dno : {
        type: String
    },
    street : {
        type: String
    },
    district : {
        type: String
    },
    state : {
        type: String
    },
    pin : {
        type: Number
    },
    monum : {
        type: Number
    }
})

export default mongoose.model('address', address)