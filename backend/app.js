const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const port = 4000;

app.use(cors());
app.use(express.json());

const movieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  actor: String,
  Rating: String,
  img: String,
  width: String,
  height: String,
});

const Movie = mongoose.model("movielis", movieSchema);

mongoose
  .connect("mongodb+srv://admin:admin123@cluster0.hwwf9.mongodb.net/movies")
  .then(() => {
    console.log("db is connected");
  })
  .catch((error) => {
    console.error("Error ", error);
  });

app.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => {
      res.json(movies);
    })
    .catch((error) => {
      res.status(500).send({ message: "Error ", error });
    });
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});