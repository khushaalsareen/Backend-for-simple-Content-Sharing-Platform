const Post = require('../models/postModel')

exports.createPost = async(req,res)=>{
    try{
    const {title,body} = req.body;
    const post = new Post({
        "title":title,
        "body":body,
    })
   const savedPost= await post.save()
   res.json({savedPost})
}
catch(error){
   return res.status(400).json({
    error:"Error while creating post",
   })
}
}

exports.getPost = async (req,res)=>{
    const posts= await Post.find().populate("comments").exec();
    return res.json({
        status:"success",
        posts:posts
    })
}
