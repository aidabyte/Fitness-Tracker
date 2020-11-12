const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(
  //  /workout is my datatbase name
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

    require("./routes/htmlRoutes")(app);
    require("./routes/apiRoutes")(app);


  app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});