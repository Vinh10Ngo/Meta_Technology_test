var express = require('express');
var router = express.Router();
var asyncHandler = require('../middleware/async');
var ErrorResponse   = require('../utils/ErrorResponse')

const controllerName = 'posts-images'
const MainModel = require(__path_models + controllerName)
const MainValidate	= require(__path_validates + controllerName);

router.get('/', asyncHandler( async (req, res, next) => {
    const data = await MainModel.listItems(req.query, {task: 'all'})
    res.status(201).json({
        success: true,
        count: data.length,
        data: data,
    })
}))
router.get('/:id', asyncHandler (async (req, res, next) => {
    let data = [] 
    if (req.params.id == 'all') {
        data = await MainModel.listItems(req.query, {task: 'all'})
    } else {
        data = await MainModel.listItems({id: req.params.id}, {task: 'getOne'})
    }
        
    res.status(201).json({
        count: data.length,
        success: true,
        data: data
    })  
}))
router.post('/add', asyncHandler (async (req, res, next) => {
    let err = await validateReq(req, res, next)
    if(!err){
        const data = await MainModel.create(req.body);
        res.status(201).json({
            success : true,
            data : data
        })
    }
}))
router.delete('/delete/:id', asyncHandler (async (req, res, next) => {
    const data = await MainModel.deleteItem({id: req.params.id}, {task: 'one'})
    res.status(201).json({
        success: true,
        data: data
    })  
}))
router.put('/edit/:id', asyncHandler(async (req, res, next) => {
    let err = await validateReq(req,res, next, req.params.id);
    if(!err){
        const data = await MainModel.editItem({'id' : req.params.id,'body' : req.body} , {'task' : 'edit'})
        res.status(200).json({
            success : true,
            data : data
        })
    }
}))
router.put('/:type/:id', asyncHandler(async (req, res, next) => {
    const data = await MainModel.event({'id' : req.params.id, 'type' : req.params.type})
    if(!data) return res.status(200).json({success : true,data : "Sai trạng thái cập nhật"})
    res.status(200).json({
        success : true,
        data : data
    })
}))
const validateReq = async (req, res, next, id = null) => {
    let errFull = await MainValidate.validator(req)
    let err = {}
    let keyErrArr = Object.keys(req.body)
    if (id) {
        for (let i = 0; i < keyErrArr.length; i++) {
            let keyErr = keyErrArr[i]
            err[keyErr] = errFull[keyErr]           
        }
    } else {
        err = errFull
    }
    let valueArr = Object.values(err)
    let includeUndefinedValue = valueArr.some(element => element !== undefined)
    console.log(err);
    if(Object.keys(err).length > 0 && includeUndefinedValue) {
        next(new ErrorResponse(400, err));
        return true
    }
    return false
}

module.exports = router;

