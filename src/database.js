const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api-example', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database is connected');
}).catch((err) => {
    console.error(err);
})
