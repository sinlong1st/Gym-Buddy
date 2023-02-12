require("dotenv").config();
const { urlencoded } = require("express");
const express = require("express");
const gymRouter = require("./routes/gym");

// express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());

// Router for routes
app.use("/api/gym", gymRouter);

// Listen for client's requests
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}!!!`);
});
