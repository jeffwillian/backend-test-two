const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongo");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
