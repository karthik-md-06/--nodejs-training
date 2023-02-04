import Blog from "../models/blog";
import USER from "../models/user";
import mongoose from "mongoose";

export const getallblog = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (err) {
    return console.log(err);
  }
  if (!blogs) {
    return res.status(404).json({ message: "Blogs not found" });
  }
  return res.status(200).json({ blogs });
};

export const addblog = async (req, res, next) => {
  const { title, discription, image, user } = req.body;
  let existinguser;
  try {
    existinguser=await USER.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if(!existinguser){
    return res.status(400).json({message:"unable to find user"});
  }
  
  const blog = new Blog({
    title,
    discription,
    image,
    user,
  });

  try {
    const session=await mongoose.startSession();
    session.startTransaction();
    await blog.save({session});
    existinguser.blogs.push(blog);
    await existinguser.save({session});
    await session.commitTransaction();
  } catch (err) {
     console.log(err);
    return res.status(500).json({message:err});
  }
  return res.status(200).json({ blog });
};

export const updateblog = async (req, res, next) => {
  const { title, discription } = req.body;
  const blogid = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogid, {
      title,
      discription,
    }).populate('user');
    await blog.user.save();
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(400).json({ message: "Blog not found" });
  }
  return res.status(200).json({ blog });
};

export const getbyid=async(req,res,next)=>{
    const id=req.params.id;
    let blog;
    try {
        blog=await Blog.findById(id);
    } catch (err) {
        return console.log(err);
    }
    if(!blog)
    {
        return res.status(400).json({message:"Blog not found"});
    }
    return res.status(200).json({blog});
}

export const deleteblog=async(req,res,next)=>{
    const id=req.params.id;
    let blog;
    try {
        blog=await Blog.findByIdAndRemove(id).populate('user');
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    } catch (err) {
        return console.log(err);
    }
    if(!blog){
        return res.status(400).json({message:"Blog not found"});
    }
    return res.status(200).json({message:"sucessfully removed a blog"});
}

export const getuserByid=async(req,res,next)=>{
    const userid=req.params.id;
    let userBlogs;
    try {
        userBlogs=await USER.findById(userid).populate('blogs');
        } catch (err) {
        return console.log(err);
    }
    if(!userBlogs){
        return res.status(400).json({message:"No blogs found on this userid"});
    }
    return res.status(200).json({blogs:userBlogs});
}
