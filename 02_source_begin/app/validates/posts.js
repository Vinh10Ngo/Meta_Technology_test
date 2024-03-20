const util          = require('util');
const notify        = require(__path_configs + 'notify');

const options = {
    id:           { min: 1, max: 10 },
    title:          { min: 5, max: 100 },
    slug:          { min: 5, max: 100 },
    excerpt:          { min: 5, max: 100 },
    content:          { min: 5, max: 100 },
    author:          { min: 5, max: 100 },
    siteId:          { min: 1, max: 10 },
    categoryId:          { min: 1, max: 10 },
    createdById:          { min: 1, max: 10 },
    updatedById:          { min: 1, max: 10 },

}

module.exports = {
    validator: (req) => {
        // id
        req.checkBody('id', util.format(notify.ERROR_NAME, options.id.min, options.id.max) )
            .isLength({ min: options.id.min, max: options.id.max })
        // title
        req.checkBody('title', util.format(notify.ERROR_NAME, options.title.min, options.title.max) )
        .isLength({ min: options.title.min, max: options.title.max })
        // slug
        req.checkBody('slug', util.format(notify.ERROR_NAME, options.slug.min, options.slug.max) )
        .isLength({ min: options.slug.min, max: options.slug.max }) 
        // excerpt
        req.checkBody('excerpt', util.format(notify.ERROR_NAME, options.excerpt.min, options.excerpt.max) )
        .isLength({ min: options.excerpt.min, max: options.excerpt.max }) 
        // content
        req.checkBody('content', util.format(notify.ERROR_NAME, options.content.min, options.content.max) )
        .isLength({ min: options.content.min, max: options.content.max }) 
        // author
        req.checkBody('author', util.format(notify.ERROR_NAME, options.author.min, options.author.max) )
        .isLength({ min: options.author.min, max: options.author.max }) 
        // siteId
        req.checkBody('siteId', util.format(notify.ERROR_NAME, options.siteId.min, options.siteId.max) )
        .isLength({ min: options.siteId.min, max: options.siteId.max })
         // categoryId
        req.checkBody('categoryId', util.format(notify.ERROR_NAME, options.categoryId.min, options.categoryId.max) )
        .isLength({ min: options.categoryId.min, max: options.categoryId.max })
        // createdById
        req.checkBody('siteId', util.format(notify.ERROR_NAME, options.createdById.min, options.createdById.max) )
         .isLength({ min: options.createdById.min, max: options.createdById.max })
        // siteId
        req.checkBody('updatedById', util.format(notify.ERROR_NAME, options.updatedById.min, options.updatedById.max) )
        .isLength({ min: options.updatedById.min, max: options.updatedById.max })
        req.checkBody('isActive', notify.ERROR_ISACTIVE).isNotBoolean() // khác bl thì true => khác bl thì false 
        req.checkBody('createdAt', notify.ERROR_DATE).isNotDate()
        req.checkBody('updatedAt', notify.ERROR_DATE).isNotDate() 

        let errors = req.validationErrors() !== false ? req.validationErrors() : [];
        let message = {};
        errors.map((val,ind) => {
            message[val.param] = val.msg;
        })

        return message;
    }
}