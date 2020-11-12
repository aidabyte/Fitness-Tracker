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
                name: {
                    type: String,
                    trim: true,
                    required: "Enter a name for an exercise"
                },

                weight: {
                    type: Number,
                    
                },
                sets: {
                    type: Number,
                    
                },
                reps: {
                    type: Number,
                    
                },
                distance: {
                    type: Number,
                    
                },
                duration: {
                    type: Number,
                    required: "Enter minutes for the exercise duration"
                    
                },

                
                

            }
        ]
        
    },
    {
    toJSON: {

        virtuals: true
      }
    
})
  
 
  workoutSchema.virtual("totalDuration").get(function() {

    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;
