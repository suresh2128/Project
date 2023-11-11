import mongoose from "mongoose";
const Schema = mongoose.Schema

const clothdata = new Schema ({
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
    }
})

export default mongoose.model('newspare2', clothdata)  //collection name, variable