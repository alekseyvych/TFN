const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const uniqueValidator = require('mongoose-unique-validator');


const heroSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    saying: String
  },
  { autoIndex: false }
);

//heroSchema.plugin(uniqueValidator);
const Hero = mongoose.model('Hero', heroSchema);
module.exports = Hero;
