const { model, Schema, Types: { ObjectId } } = require('mongoose');

const matchSchema = new Schema({
  statistics: [{
    player: {
      type: ObjectId,
      required: true,
      ref: 'Player',
    },
    score: {
      type: Number,
      max: 5,
      required: true,
    },
    status: {
      type: String,
      enum: ['Won', 'Lost'],
      required: true,
    },
    _id: false,
  }],
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = model('Match', matchSchema);
