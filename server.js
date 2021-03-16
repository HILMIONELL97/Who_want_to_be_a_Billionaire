const express = require('express');
const app = express();
const dotenv = require('dotenv');
const authRoute = require('./routes/auth.route');
const cookieParser = require('cookie-parser')
dotenv.config({ path: './config/config.env' });
require('./config/db');


const PORT = process.env.PORT || 9999;

// if (process.env.NODE_ENV === 'devlopement') { app.use(morgan('dev')) }
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/user', authRoute);


app.use(cookieParser());




app.listen(PORT, () => { console.log(`My app is running in ${process.env.NODE_ENV} mode on port ${PORT}`); });