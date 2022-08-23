const mongoose = require('mongoose')                        //import mongoose

const Schema = mongoose.Schema                              //get Schema template from mongoose

const userSchema = new Schema({                             //make schema using Schema template
    username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
}
)

const User = mongoose.model('User', userSchema)             //convert to model

module.exports = User                                       //export model