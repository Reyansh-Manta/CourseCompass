import mongoose, {Schema} from "mongoose"

const summarySchema = new Schema({
    title:{
        type: String,
        required: true
    },
    summary:{
        type: String,
        required: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    mostFrequentChatter: {
        type: String
    },
    Sentiment:{
        type: String
    }

},{timestamps: true})

export const Summary = mongoose.model("Summary", summarySchema)