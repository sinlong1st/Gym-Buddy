const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ mssg: "Welcome to the gym page!" });
});

//GET a single workout

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

//POST a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new workout" });
});
//Delete a new workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});
//Update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workout" });
});

module.exports = router;
