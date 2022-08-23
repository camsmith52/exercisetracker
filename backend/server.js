const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

require("dotenv").config();

const app = express(); //create server using express
const port = process.env.PORT || 5000;

app.use(cors()); //attach cors middleware
app.use(express.json()); //attach json middleware

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/users", usersRouter); //adds the usersRouter as middleware
app.use("/exercises", exercisesRouter); //adds the exercisesRouter as middleware

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
