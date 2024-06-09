const mongoose = require('mongoose');
const { Schema } = mongoose;

// Base Exercise Schema
const exerciseSchema = new Schema({
  type: {
    type: String,
    enum: ['cardio', 'resistance'],
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  distance: {
    type: Number,
    required: false // Optional for cardio exercises
  }
});

// Cardio Exercise Schema Extension
exerciseSchema.statics.cardio = function(cardioOptions) {
  const cardioSchema = new Schema({
   ...exerciseSchema.obj,
    distance: {
      type: Number,
      required: true
    },
    goal: {
      type: Number,
      required: true
    }
  });

  return mongoose.model('CardioExercise', cardioSchema);
};

// Create Model
const Exercise = mongoose.model('Exercise', exerciseSchema);
const CardioExercise = Exercise.cardio();

module.exports = { Exercise, CardioExercise };
