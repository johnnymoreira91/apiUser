const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

router.get('/', (req,res) => {
    res.send({
        ok: true, 
        id_user: req.userId,
        user_Name: req.userName
    })
});

module.exports = router;