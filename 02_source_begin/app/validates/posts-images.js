const util          = require('util');
const notify        = require(__path_configs + 'notify');

const options = {
    id:                 { min: 1, max: 10 },
    postId:             {  min: 1, max: 10  },
    url:                { min: 5, max: 100 },
    createdById:        { min: 1, max: 10 },
    updatedById:        { min: 1, max: 10 },
}

module.exports = {
    validator: (req) => {
        // id
        req.checkBody('id', util.format(notify.ERROR_NAME, options.id.min, options.id.max) )
            .isLength({ min: options.id.min, max: options.id.max })

        // postId
        req.checkBody('postId', util.format(notify.ERROR_NAME, options.postId.min, options.postId.max) )
        .isLength({ min: options.postId.min, max: options.postId.max })

        // url
        req.checkBody('url', util.format(notify.ERROR_NAME, options.url.min, options.url.max) )
        .isLength({ min: options.url.min, max: options.url.max })

        // createdById
        req.checkBody('createdById', util.format(notify.ERROR_NAME, options.createdById.min, options.createdById.max) )
        .isLength({ min: options.createdById.min, max: options.createdById.max })

        // updatedById
        req.checkBody('updatedById', util.format(notify.ERROR_NAME, options.updatedById.min, options.updatedById.max) )
        .isLength({ min: options.updatedById.min, max: options.updatedById.max })
        
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