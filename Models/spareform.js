import mongoose from "mongoose";
const Schema = mongoose.Schema

const sparesdata2 = new Schema ({
    title : {
        type: String
    },
    category : {
        type: String
    },
    price : {
        type: Number
    },
    image : {
        type: String
    },
    pricee : {
        type: Number
    }
})

export default mongoose.model('newspare2', sparesdata2)  //collection name, variable