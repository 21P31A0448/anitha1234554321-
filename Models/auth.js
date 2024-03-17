import mongoose from "mongoose";
const Schema = mongoose.Schema

const auth = new Schema ({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

export default mongoose.model('Authdata2', auth)