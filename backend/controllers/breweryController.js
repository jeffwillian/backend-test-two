const mongoose = require("mongoose");
const breweryModel = require("../models/Brewery.js");
const connection = require("../db/connect");
const Brewery = mongoose.model("Brewery", breweryModel);

class BreweryController {
  async create(req, res) {
    const data = req.body;
    try {
      var result = await Brewery.create(data);
      res.status(201).json({ result, msg: "Sucessfully created" });
    } catch (error) {
      res.status(400).json({ result, msg: "Bad request" });
    }
  }

  async index(req, res) {
    res.status(200).json({ todo: true });
  }
  async update(req, res) {
    res.status(200).json({ todo: true });
  }
  async delete(req, res) {
    res.status(200).json({ todo: true });
  }
  async findById(req, res) {
    res.status(200).json({ todo: true });
  }
}

module.exports = new BreweryController();
