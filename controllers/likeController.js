const Like = require('../models/likeModel')
const Post = require('../models/postModel')
// like post
exports.likePost = async(req,res)=>{
    const {post,user} = req.body;
    const like = new Like({
        post,user
    })
    const savedLike = await like.save();

    const newPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}).populate("likes").populate("comments").exec();
    res.json({newPost})

}

exports.unlikePost = async(req,res)=>{
    const {post,like} = req.body;
    const deletedLike = await Like.findOneAndDelete({post:post,_id:like})
    // update post colection
    const newPost = await Post.findByIdAndUpdate(post,{$pull:{likes:like}},{new:true}).populate("likes").exec()
    res.json({newPost})
}