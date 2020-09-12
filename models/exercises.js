const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Enter the name of the exercise"
        },
        type: {
            type: String,
            trim: true,
            required: "Enter the type of exercise"
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number,
            required: "Enter the duration for this exercise in minutes"
        },
        distance: {
            type: Number
        }
    }]
});

const Exercises = mongoose.model("Exercises", ExerciseSchema);

module.exports = Exercises;