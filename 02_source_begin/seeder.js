const fs            = require('fs');
const mongoose      = require('mongoose');
var colors          = require('colors');

const pathConfig        = require('./path');
global.__base           = __dirname + '/';
global.__path_app       = __base + pathConfig.folder_app + '/';

global.__path_configs   = __path_app + pathConfig.folder_configs + '/';

const databaseConfig  = require(__path_configs + 'database');


mongoose.connect(`mongodb+srv://${databaseConfig.username}:${databaseConfig.password}@cluster0.1r1zsfn.mongodb.net/${databaseConfig.database}`)

const CategoriesSchemas = require('./app/schemas/categories');
const PostsSchemas = require('./app/schemas/posts');
const PostsImagesSchemas = require('./app/schemas/posts-images');
const SiteCategoryLinksSchemas = require('./app/schemas/site-category-links');
const CommentsSchemas = require('./app/schemas/comments');

const PostsImages = JSON.parse(
    fs.readFileSync(`${__dirname}/app/_data/posts-images.json`,'utf-8')
)
const Posts = JSON.parse(
    fs.readFileSync(`${__dirname}/app/_data/posts.json`,'utf-8')
)
const SiteCategoryLinks = JSON.parse(
    fs.readFileSync(`${__dirname}/app/_data/site-category-links.json`,'utf-8')
)
const Comments = JSON.parse(
    fs.readFileSync(`${__dirname}/app/_data/comments.json`,'utf-8')
)
const Categories = JSON.parse(
    fs.readFileSync(`${__dirname}/app/_data/categories.json`,'utf-8')
)


const importData = async () => {
    try {
        await CommentsSchemas.create(Comments)
        await SiteCategoryLinksSchemas.create(SiteCategoryLinks)
        await PostsImagesSchemas.create(PostsImages)
        await PostsSchemas.create(Posts)
        await CategoriesSchemas.create(Categories)
        console.log('importData...'.bgCyan);
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

const deleteData = async () => {
    try {
        await CommentsSchemas.deleteMany({})
        await SiteCategoryLinksSchemas.deleteMany({})
        await PostsImagesSchemas.deleteMany({})
        await PostsSchemas.deleteMany({})
        await CategoriesSchemas.deleteMany({})
        console.log('deleteData...'.bgCyan);
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

if(process.argv[2] === '-i'){
    importData();
}else if(process.argv[2] === '-d'){
    deleteData();
}