import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//To optimize Searcing fields use index:true
const userSchema = Schema(
  {
    userName: {
      type: String,
      requried: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    email: {
      type: String,
      requried: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    fullName: {
      type: String,
      requried: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //Coudinary url
      requried: true,
    },
    coverImage: {
      type: String, //Coudinary url
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      requried: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

//Dont make arrow function. cuz it wont have this
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  //Return True or False
  return await bcrypt.compare(password, this.password);
};

//it takes less time so dont need any asynch function
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email, userName: this.userName },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function (password) {
  return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SCERET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });
};

export const User = mongoose.model("User", userSchema);
