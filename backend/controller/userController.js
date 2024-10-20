const asyncHandler=require("express-async-handler");
const User=require("../models/userModel");
const generateToken = require("../utils/generateToken");




const registerUser=asyncHandler(async(req,res)=>{
  const {name,email,password,pic}=req.body;

  const userExists= await User.findOne({email});

  if(userExists){
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user= await User.create({
    name,
    email,
    password,
    pic
  });

  if(user){
    res.status(201).json({
        _id:user._id,
        name:user.name,
        password:user.password,
        isAdmin:user.isAdmin,
        pic:user.pic,
        token:generateToken(user._id),
    })
  }else{
    res.status(400);
    throw new Error("Error Occurred!");
  }

  
}
)

const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
  
    const user =await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
        name:user.name,
        password:user.password,
        isAdmin:user.isAdmin,
        pic:user.pic,
        token:generateToken(user._id),
        })
    }else{
        res.status(400);
        throw new Error("Invalid Email Or Password!");
      }
  
    
  }
  )


  const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User logged out successfully" });
  });

  

module.exports={registerUser, loginUser, logoutUser}