const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Models = require("./models");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const Properties = Models.Property;

mongoose.connect("mongodb://localhost:27017/properties");

app.get("/properties", async (req, res) => {
  await Properties.find()
    .then((properties) => {
      res.status(201).json(properties);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

app.post("/properties", async (req, res) => {
  Properties.create({
    Address: req.body.Address,
    Image: req.body.Image,
    Price: req.body.Price,
  })
    .then((property) => {
      res.status(201).json(property);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log("Listening on Port " + port);
});
