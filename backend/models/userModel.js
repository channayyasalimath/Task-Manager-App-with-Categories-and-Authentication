const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { timestamp } = require("rxjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://cdn.pixabay.com/photo/2022/06/05/07/04/person-7243410_1280.png",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }

    const salt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password, salt);
})

userSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}


const User= mongoose.model("User", userSchema);

module.exports=User;
