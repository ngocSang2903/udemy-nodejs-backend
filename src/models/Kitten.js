const mongoose = require('mongoose')

const kittySchema = new mongoose.Schema({
    name: String
  });
  
const Kitten = mongoose.model('Kitten', kittySchema);
  

module.exports = Kitten
//   const silence = new Kitten({ name: 'Silence' });
//   silence.save();