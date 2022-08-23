const router = require("express").Router();
const usersController = require("../controllers/users-controller");

router.route("/").get(usersController.getUsers);

router.route("/add").post(usersController.addUsers);

module.exports = router;
