const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");
// Get all workouts
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};
// Get single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Can't find the workout" });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "Can't find the workout" });
  }
  return res.status(200).json(workout);
};
// Create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add doc to the database
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};
// Delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Can't find the workout" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(400).json({ error: "Can't find the workout" });
  }
  res.status(200).json(workout);
};

// Update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Can't find the workout" });
  }
  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(400).json({ error: "Can't find the workout" });
  }
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};

//63e988680ca3bb944169981d
