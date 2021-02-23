const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' })

require('./config/db')

const PORT = process.env.PORT || 5050




app.listen(PORT, () => { console.log(`My app is running in ${process.env.NODE_ENV} mode on port ${PORT}`); })