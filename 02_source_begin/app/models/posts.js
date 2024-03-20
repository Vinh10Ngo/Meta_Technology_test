const MainModel 	= require(__path_schemas + 'posts');
const CommentsModel 	= require(__path_schemas + 'comments');
const PostsImagesModel 	= require(__path_schemas + 'posts-images');


module.exports = {
    listItems: (params, options = null) => {
        let id = (params.id) ? params.id : ''
        params = (params.id && params.query) ? params.query : params
        // coppy params
        const queryFind = { ...params };
        let find,select,sort 
        // Create fields remove
        let removeFields = ['search', 'select','sort','page','limit'];
        // Remove fields 
        removeFields.forEach(param => delete queryFind[param]);
        // Create query string
        let queryStr = JSON.stringify(queryFind);
        
        // replace 
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, find => `$${find}`); 
        //parse
        find = JSON.parse(queryStr);
        // select fields
        if(params.select){
            select = params.select.split(',').join(' ')
        }
        // sort fields
        if(params.sort){
            sort = params.sort.split(',').join(' ');
        }
       
        //pagination
        const page  = parseInt(params.page) || 1;
        const limit = parseInt(params.limit) || 3;
        const skip  = ( page-1 )*limit;

        if(options.task == 'all'){
            // search field
            if(params.search){
                find.title = new RegExp(params.search, 'i');
            }
            return MainModel
                .find(find)
                .populate({path: 'comments', select: 'content'})
                .populate({path: 'posts_images', select: 'url'})
                .select(select)
                .sort(sort)
                .skip(skip).limit(limit)
        }
        if(options.task == 'getOne'){
            return MainModel
            .find({id: id})
            .populate({path: 'comments', select: 'content'})
            .populate({path: 'posts_images', select: 'url'})
            .select({})
        }
        if(options.task == 'getComments'){
            if (id !== 'all') Object.assign(find, {"postId": id}) 
            // search field
            if(params.search){
                find.content = new RegExp(params.search, 'i');
            } 
            return CommentsModel
                .find(find)
                .select(select)
                .sort(sort)
                .skip(skip).limit(limit)
            }
        if(options.task == 'getPostsImages'){
            if (id !== 'all') Object.assign(find, {"postId": id}) 
            // search field
            if(params.search){
                find.url = new RegExp(params.search, 'i');
            }  
            return PostsImagesModel
                .find(find)
                .select(select)
                .sort(sort)
                .skip(skip).limit(limit)
            }
    },
    createItem: (item) => {
        return new MainModel(item).save()
    },
    deleteItem: (params, options = null) => {
        if (options.task == 'one') {
            return MainModel.deleteOne({id: params.id})
        }
    },
    editItem: (params, options = null) => {
        if (options.task == 'edit') {
            return MainModel.updateOne({id: params.id}, params.body)
        }
    },
   
}