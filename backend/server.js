require("dotenv").config();
const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const gymRouter = require("./routes/gym");
const cors = require("cors");
// express app
const app = express();

// CORS
app.use(cors());

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());

// routes
app.use("/api/gym", gymRouter);
mongoose.set("strictQuery", false);
// Connect to the DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Connect to DB and Listening on port ${process.env.PORT}!!!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
