const express = require('express');
const app = express();
const dotenv = require('dotenv');


const PORT = process.env.PORT || 5050
dotenv.config({ path: './config/config.env' })



app.listen(PORT, () => { console.log(`My app is running in ${process.env.NODE_ENV} mode on port ${PORT}`); })