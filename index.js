const express = require('express');
const bodyParser = require('body-parser');
const routeAuth = require('./src/controllers/authController');
const routeProject = require('./src/controllers/projectController');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/auth', routeAuth);
app.use('/', routeProject);


app.listen(3001, () => {
    console.log('server running on port:' , 3001)
});