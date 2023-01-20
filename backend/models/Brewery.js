const mongoose = require("mongoose");

const { Schema } = mongoose;

const brewerySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ibu: {
      type: Number,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = {
  Brewery,
  brewerySchema,
};
