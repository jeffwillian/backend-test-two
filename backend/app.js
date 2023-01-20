const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

//DB connection
const connect = require('./db/connect')
connect();

//Routes
const routes = require("./routes/router")
app.use('/api', routes);



app.listen(3000, function () {
    console.log('Server Online!!')
})