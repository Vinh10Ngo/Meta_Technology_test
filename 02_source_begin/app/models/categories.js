const MainModel 	= require(__path_schemas + 'categories');
const PostsModel 	= require(__path_schemas + 'posts');
const SiteCategoryLinksModel 	= require(__path_schemas + 'site-category-links');


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
                find.name = new RegExp(params.search, 'i');
            }
            return MainModel
                .find(find)
                .populate({path: 'posts', select: 'title'})
                .populate({path: 'site_category_links', select: 'siteId'})
                .select(select)
                .sort(sort)
                .skip(skip).limit(limit)
        }
        if(options.task == 'getOne'){
            
            return MainModel
            .find({id: id})
            .populate({path: 'posts', select: 'title'})
            .populate({path: 'site_category_links', select: 'siteId'})
            .select({})
      
        }
        if(options.task == 'getPosts'){
            if (id !== 'all') {
                Object.assign(find, {"categoryId": id})
                // search field
                if(params.search){
                    find.title = new RegExp(params.search, 'i');
                }
            }  
            return PostsModel
                .find(find)
                .populate({path: 'comments', select: 'content'})
                .populate({path: 'posts_images', select: 'url'})
                .select(select)
                .sort(sort)
                .skip(skip).limit(limit)
            }
        if(options.task == 'getSiteCategoryLinks'){
            if (id !== 'all') {
                Object.assign(find, {"categoryId": id})
                // search field
                if(params.search){
                    find.siteId = new RegExp(params.search, 'i');
                }
            }  
            return SiteCategoryLinksModel
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