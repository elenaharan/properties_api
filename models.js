const mongoose = require("mongoose");

let propertySchema = mongoose.Schema({
  Property_ID: { type: Number, required: false },
  Address: { type: String, required: true },
  Image: { type: String, required: true },
  Price: { type: Number, required: true },
});

let Property = mongoose.model("Property", propertySchema);

module.exports.Property = Property;
