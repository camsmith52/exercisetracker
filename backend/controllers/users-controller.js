let User = require('../models/users.model')

const getUsers = async (req, res) => {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(400).json("Error: " + err));
};

const addUsers = async (req, res) => {
     const username = req.body.username;

     const newUser = new User({ username });

     newUser
       .save()
       .then(() => res.json("User added!"))
       .catch((err) => res.status(400).json("Error: " + err));
};

exports.getUsers = getUsers;
exports.addUsers = addUsers;