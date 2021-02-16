const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://needauserlogin:needapassword@cluster0.vldqd.mongodb.net/node_rest?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
