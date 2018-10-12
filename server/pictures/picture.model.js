const mongoose = require('mongoose');

const PictureSchema = mongoose.Schema({
    title: String,
    image: String,
    date: Date,
    keyword: String,
    description: String,
    tags: [String]
});

module.exports = mongoose.model('Picture', PictureSchema);
