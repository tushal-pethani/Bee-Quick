// userid, name, gender, residence, age, ph_no, pwd

import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    gender: {
      type: String,
      require: true,
      trim: true,
    },
    residence: {
      type: String,
      require: true,
      trim: true,
    },
    age: {
      type: Number,
      require: true,
    },
    ph_no: {
      type: String,
      require: true,
    },
    pwd: {
      type: String,
      require: true,
      trim: true,
    },
    refreshtoken: {
      type: String,
    },
  },
  { timestamps: true }
);
const saltRounds = 10;
userSchema.pre("save", async function (next) {
  if (!this.isModified("pwd")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    await bcrypt.hash(this.pwd, salt, (err, hash) => {
      if (err) {
        next(err);
      }
      this.pwd = hash;
    });
    next();
  } catch (error) {
    next(error);
  }
});
userSchema.methods.isPasswordCorrect = async function (pwd) {
  return await bcrypt.compare(pwd, this.pwd);
};
// userSchema.methods.generateAccessToken = function () {
//   return jwt.sign(
//     {
//       _id: this._id,
//       email: this.email,
//       username: this.username,
//       fullName: this.fullName,
//     },
//     process.env.ACCESS_TOKEN_SECRET,
//     {
//       expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
//     }
//   );
// };
// userSchema.methods.generateRefreshToken = function () {
//   return jwt.sign(
//     {
//       _id: this._id,
//     },
//     process.env.REFRESH_TOKEN_SECRET,
//     {
//       expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
//     }
//   );
// };
export const User = mongoose.model("User", userSchema);
