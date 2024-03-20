const util          = require('util');
const notify        = require(__path_configs + 'notify');

const options = {
    id:           { min: 1, max: 10 },
    name:           { min: 5, max: 81 },
    slug:           { min: 5, max: 81 },
    createdById:    { min: 1, max: 10 },
    updatedById:    { min: 1, max: 10 },
}

module.exports = {
    validator: (req) => {
        // id
        req.checkBody('id', util.format(notify.ERROR_NAME, options.id.min, options.id.max) )
            .isLength({ min: options.id.min, max: options.id.max })
        // name
        req.checkBody('name', util.format(notify.ERROR_NAME, options.name.min, options.name.max) )
        .isLength({ min: options.name.min, max: options.name.max })
        // slug
        req.checkBody('slug', util.format(notify.ERROR_NAME, options.slug.min, options.slug.max) )
        .isLength({ min: options.slug.min, max: options.slug.max })
        // createdById
        req.checkBody('createdById', util.format(notify.ERROR_NAME, options.createdById.min, options.createdById.max) )
        .isLength({ min: options.createdById.min, max: options.createdById.max })
        // updatedById
        req.checkBody('updatedById', util.format(notify.ERROR_NAME, options.updatedById.min, options.updatedById.max) )
        .isLength({ min: options.updatedById.min, max: options.updatedById.max })
        req.checkBody('isActive', notify.ERROR_ISACTIVE).isNotBoolean() // khác bl thì true => khác bl thì false 
        req.checkBody('createdAt', notify.ERROR_DATE).isNotDate() // giá trị !== ngày => true | false => !== date| giá trị == ngày
        req.checkBody('updatedAt', notify.ERROR_DATE).isNotDate() 



        let errors = req.validationErrors() !== false ? req.validationErrors() : [];
        let message = {};
        errors.map((val,ind) => {
            message[val.param] = val.msg;
        })

        return message;
    }
}