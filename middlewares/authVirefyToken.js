const jwt = require('jsonwebtoken');


exports.tokenVirefy = (req, res, next) => {

    try {
        const token = req.header('auth-token');
        if (!token) return res.status(401).send('Access Denied');

        ///////////////////////////////////////////////////////////////////
        const verified = jwt.verify(token, process.env.SECRET_TOKEN);
        req.loginMail = verified;

    } catch (error) {
        res.status(400).send('Invalid Token');
    }

}