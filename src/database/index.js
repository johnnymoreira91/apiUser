const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://johnny:12345@cluster0.vldqd.mongodb.net/node_rest?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;