const express = require('express');
const router = express.Router();

//Import controller
const {createComment} = require('../controllers/commentController')
const {createPost, getPost} = require('../controllers/postController');
const { likePost, unlikePost } = require('../controllers/LikeController');



// MAPPING Create
router.post('/comments/create',createComment);
router.post('/posts/create',createPost)
router.get('/posts/get',getPost)
router.post('/likes/like',likePost)
router.post('/likes/unlike',unlikePost)
// Export
module.exports = router;