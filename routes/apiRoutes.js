var db = require("../models");

module.exports = function(app) {

    app.post("/api/workouts", ({ body }, res) => {
        console.log(body)
        db.Workout.create(body)
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      });


      app.get("/api/workouts", (req,res) => {
          db.Workout.find({})
          .then(dbWorkout => {
              res.json(dbWorkout);
          })
          .catch(err => {
              res.json(err);
          })
      }) 

      app.put("/api/workouts/:id", (req,res) => {
          console.log(req.params.id)
        //   identify object that im updating.Want to update object from front end. push into exercises array. push req.body. new exercise object thats being passed from front end
          db.Workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises:req.body}})
          .then(dbWorkout => {
              res.json(dbWorkout);

          })
          .catch(err => {
              res.json(err);
          })
      })

      app.get("/api/workouts/range", (req,res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    }) 

        
      
}

