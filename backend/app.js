const dotenv = require('dotenv');
const express = require("express")
const cors = require("cors")
const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())


//Routes
const routes = require("./routes/router")
app.use("/api", routes);



app.listen(3000, function () {
    console.log('Server Online!!')
})