const mongoose = require('mongoose');

const breweryModel = new mongoose.Schema({
  
    abv: {
      type: Number,
      required: true,
    },
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
  
  )

module.exports = breweryModel;
