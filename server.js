const express = require('express');
const bodyParser = require("body-parser");
require('dotenv').config();
const connectDB = require('./db');
const { PORT } = process.env;
const morgan = require('morgan');
const cors = require('cors');
const UserRoutes = require("./routes/users-route");

connectDB();

const app = express();

app.use(morgan("dev"));

app.use(cors());

app.use(bodyParser.json());

app.use('/', UserRoutes);


app.listen(process.env.PORT || PORT, () => {
  console.log(`App running on port ${PORT}`);
})

