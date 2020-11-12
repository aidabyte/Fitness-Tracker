const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// new is creating a new object
const workoutSchema = new Schema(
    {
        day:{
            type: Date,
            default:() => new Date()
        },
        
    }
)