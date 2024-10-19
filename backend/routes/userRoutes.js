const express= require("express");
const { registerUser,loginUser,logoutUser } = require("../controller/userController");

const router=express.Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);



module.exports=router;