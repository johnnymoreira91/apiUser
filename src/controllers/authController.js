const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400.
    });
};

router.post('/register', async (req, res) => {
    const { email } = req.body;
    try {
        //// if to verify email exist or not
        if (await User.findOne({ email }))
            return res.status(400).send({ error: "Email already exists in DataBase" })
        ///////////////////////

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user, token: generateToken({id: user.id}) })
    } catch (err) {
        return res.status(400).send({ error: 'Registration Failed' });
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    //////////// if - verify if user has been found //////////// 
    if (!user) return res.status(400).send({ error: 'User not found' });
    //////////////////////////////////////////////////////////////////

    //////////if - to see if the password entered is the same ///////// 
    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password' })
    ///////////////////////////////////

    user.password = undefined;

    ///////////// init token //////////////////////////////////////////////////////////////////

    // const token = generateToken();

    //////////////////////////////////////////////////////////////////


    res.send({
        user,
        token: generateToken({id: user.id})
    });
});

module.exports = router