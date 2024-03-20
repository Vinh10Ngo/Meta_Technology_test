const util          = require('util');
const notify        = require(__path_configs + 'notify');

const options = {
    id:           { min: 1, max: 10 },
    siteId:    { min: 1, max: 10 },
    categoryId:    { min: 1, max: 10 },
}

module.exports = {
    validator: (req) => {
        // id
        req.checkBody('id', util.format(notify.ERROR_NAME, options.id.min, options.id.max) )
            .isLength({ min: options.id.min, max: options.id.max })

        // siteId
        req.checkBody('siteId', util.format(notify.ERROR_NAME, options.siteId.min, options.siteId.max) )
        .isLength({ min: options.siteId.min, max: options.siteId.max })

        // categoryId
        req.checkBody('categoryId', util.format(notify.ERROR_NAME, options.categoryId.min, options.categoryId.max) )
        .isLength({ min: options.categoryId.min, max: options.categoryId.max })
        req.checkBody('updatedAt', notify.ERROR_DATE).isNotDate() 

        let errors = req.validationErrors() !== false ? req.validationErrors() : [];
        let message = {};
        errors.map((val,ind) => {
            message[val.param] = val.msg;
        })

        return message;
    }
}