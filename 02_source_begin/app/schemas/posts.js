const mongoose = require('mongoose');
const databaseConfig  = require(__path_configs + 'database');

var schema = new mongoose.Schema({
    id: { type: String, unique: true },
    title: String,
    slug: { type: String, unique: true },
    excerpt: String,
    content: String,
    tags: [String],
    author: String,
    isActive: Boolean,
    siteId: String,
    categoryId: {
        type: String,
        ref: 'categories',
        required: true
    },
    createdAt: Date,
    createdById: String,
    updatedAt: Date,
    updatedById: String,

})
schema.virtual('comments', {
	ref: 'comments', //The Model to use
	localField: 'id', //Find in Model, where localField 
	foreignField: 'postId', // is equal to foreignField
 });
 schema.virtual('posts_images', {
	ref: 'posts_images', //The Model to use
	localField: 'id', //Find in Model, where localField 
	foreignField: 'postId', // is equal to foreignField
 });
 // Set Object and Json property to true. Default is set to false
 schema.set('toObject', { virtuals: true });
 schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model(databaseConfig.col_posts, schema)