import mongoose from "mongoose";
const Schema = mongoose.Schema

const clothdatafemale = new Schema ({
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

export default mongoose.model('femaledata', clothdatafemale)  //collection name, variable