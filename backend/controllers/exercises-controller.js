let Exercise = require('../models/exercises.model')


const getExercises = async(req,res)=>{
    Exercise.find()
      .then((exercises) => res.json(exercises))
      .catch((err) => res.status(400).json("Error: " + err));
}

const addExercises = async (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
      username,
      description,
      duration,
      date,
    });

    newExercise
      .save()
      .then(() => res.json("Exercise added!"))
      .catch((err) => res.status(400).json("Error: " + err));
};

const getUserByID = (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
};

const deleteByID = (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
};

const updateByID = (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
}

exports.getExercises = getExercises
exports.addExercises = addExercises
exports.getUserByID = getUserByID
exports.updateByID = updateByID
exports.deleteByID = deleteByID
