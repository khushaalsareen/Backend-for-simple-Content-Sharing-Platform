const Comment = require('../models/commentModel')
const Post = require('../models/postModel')
const createComment = async(req,res)=>{
    try{
        // fetch data from req body
        const {post,user,body} = req.body;
        // create comment object
        const comment = new Comment({post,user,body});
        // save the new comment into the database
        const savedComment = await comment.save(); 

        //find the post by ID and new comment into its comment  array
        const newPost = await Post.findByIdAndUpdate(post,{$push: {comments: savedComment._id}}, {new:true}).populate("comments").exec();
        res.json({
            post:newPost,
        })
    }
    catch(error){
        console.log(error)
    }
}

module.exports= {createComment}