const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');
require("dotenv").config()
const dataRoute = require('./routes/data');

const app = express();

app.use(cors());

connectDB()

app.use("/api/data",dataRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})