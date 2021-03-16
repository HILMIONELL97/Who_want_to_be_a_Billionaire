const jwt = require('jsonwebtoken');
const bcrybt = require('bcryptjs');

const User = require('../models/user.model');
const { registerValidation, loginValidation } = require('../validation/auth.validation')

exports.regiController = async(req, res) => {

    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    /////////////////////////////////////////////////////////////////////////////

    const mailExist = await User.findOne({ email: req.body.email });
    if (mailExist) return res.status(400).send('mail already exist');

    /////////////////////////////////////////////////////////////////////////////

    const salt = await bcrybt.genSalt(10);
    const hashedPassword = await bcrybt.hash(req.body.password, salt);

    /////////////////////////////////////////////////////////////////////////////

    try {
        const newUser = new User({
            ...req.body,
        });
        createUser.password = hashedPassword;

        const addUser = await newUser.save();
        if (addUser) return res.status(201).send({ newUser: newUser._id });

    } catch (error) {

        return res.status(400).send(error);
    }

};
exports.logiController = async(req, res) => {
    try {
        const { error } = loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        ////////////////////////////////////////////////////////////////////////////////
        const loginMail = await User.findOne({ email: req.body.email });
        if (!loginMail) return res.status(400).send('Email or Password inValid');
        ////////////////////////////////////////////////////////////////////////////////
        const loginPassword = await bcrybt.compare(req.body.password, loginMail.password);
        if (!loginPassword) return res.status(400).send('Email or Password inValid');
        ////////////////////////////////////////////////////////////////////////////////
        const token = jwt.sign({ _id: loginMail._id }, process.env.SECRET_TOKEN);
        res.header('auth-token', token);


        res.status(200).send('You are logged In Successfully!');
    } catch (error) {
        return res.status(400).send(error);
    }
    ////////////////////////////////////////////////////////////////////////////////////

};
exports.logoController = (req, res) => {};