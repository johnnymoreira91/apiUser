const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/controllers/authController');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/auth', router);


app.listen(3001, () => {
    console.log('server running on port:' , 3001)
});