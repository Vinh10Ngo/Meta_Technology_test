var express = require('express');
var router = express.Router();

router.use('/categories', require('./categories'))
router.use('/posts', require('./posts'))
router.use('/comments', require('./comments'))
router.use('/posts-images', require('./posts-images'))
router.use('/site-category-links', require('./site-category-links'))



module.exports = router;
