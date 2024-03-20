const mongoose = require('mongoose');
const databaseConfig  = require(__path_configs + 'database');

var schema = new mongoose.Schema({
    id: { type: String, unique: true },
    siteId: String,
    categoryId: {
        type: String,
        ref: 'categories',
        required: true
    },
    updatedAt: Date
})

module.exports = mongoose.model(databaseConfig.col_site_category_links, schema)