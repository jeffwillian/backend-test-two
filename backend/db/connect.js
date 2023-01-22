const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const connection = mongoose.connect(process.env.MONGO_URI); 
module.exports = connection;