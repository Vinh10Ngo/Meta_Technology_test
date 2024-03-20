const mongoose = require('mongoose');
const databaseConfig  = require(__path_configs + 'database');

var schema = new mongoose.Schema({
    id: { type: String, unique: true },
    postId: {
        type: String,
        ref: 'posts',
        required: true
    },
    url: String,
    createdAt: Date,
    createdById: String,
    updatedAt: Date,
    updatedById: String
})

module.exports = mongoose.model(databaseConfig.col_posts_images, schema)