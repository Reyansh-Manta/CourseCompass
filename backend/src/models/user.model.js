import mongoose, {Schema} from "mongoose"

const userSchema = new Schema({
    fullName: {
        type:String,
        required: true
    },
    username: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }

},{timestamps: true})

export const User = mongoose.model("User", userSchema)