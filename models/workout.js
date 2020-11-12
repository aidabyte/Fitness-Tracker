const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// new is creating a new object
const workoutSchema = new Schema(
    {
        day:{
            type: Date,
            default:() => new Date()
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type"
                },
                
            }
        ]
        
    }
)