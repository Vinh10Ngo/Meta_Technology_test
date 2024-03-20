const mongoose = require('mongoose');
const databaseConfig  = require(__path_configs + 'database');

var schema = new mongoose.Schema({
    id: { type: String, unique: true },
    name: String,
    slug: { type: String, unique: true },
    isActive: Boolean,
    createdAt: Date,
    createdById: String,
    updatedAt: Date,
    updatedById: String,
})

schema.virtual('posts', {
	ref: 'posts', //The Model to use
	localField: 'id', //Find in Model, where localField 
	foreignField: 'categoryId', // is equal to foreignField
 });
 schema.virtual('site_category_links', {
	ref: 'site_category_links', //The Model to use
	localField: 'id', //Find in Model, where localField 
	foreignField: 'categoryId', // is equal to foreignField
 });
 // Set Object and Json property to true. Default is set to false
 schema.set('toObject', { virtuals: true });
 schema.set('toJSON', { virtuals: true });
module.exports = mongoose.model(databaseConfig.col_categories, schema)