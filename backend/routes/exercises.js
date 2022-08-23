const router = require("express").Router();
const exercisesController = require('../controllers/exercises-controller')


router.route('/').get(exercisesController.getExercises)

router.route("/add").post(exercisesController.addExercises);

router.route("/:id").get(exercisesController.getUserByID);

router.route("/:id").delete(exercisesController.deleteByID);

router.route("/update/:id").post(exercisesController.updateByID);

module.exports=router