const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (name) => /[a-zA-Z]+/.test(name),
      message: (name) => `${name.value} is not a valid name!`,
    },

  },
  winPercentage: {
    type: Number,
    default: 0,
    max: 100,
  },
  matchesPlayed: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = model('Player', playerSchema);
