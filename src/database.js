const mongoose = require('mongoose');

mongoose.connect('mongodb://uly5f0svwqzwkxwwornd:P7Vm8GDYINaoMzLERSXx@bnfs3sxu8b2yfgj-mongodb.services.clever-cloud.com:27017/bnfs3sxu8b2yfgj', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database is connected');
}).catch((err) => {
    console.error(err);
})
