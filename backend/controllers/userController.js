import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const register = async (req, res) => {
  const { userId, name, gender, residence, age, ph_no, pwd } = req.body;

  //if some of field are/is empty.
  console.log(userId, name, gender);
  if (
    [userId, name, gender, residence, pwd].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required !!!");
  }

  //if user with same usename or email exist
  const existedUser = await User.findOne({
    $or: [{ userId }, { name }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or name already exists");
  }

  const user = await User.create({
    name,
    userId,
    gender,
    residence,
    age,
    ph_no,
    pwd,
  });
  const createdUser = await User.findById(user._id).select("-pwd");
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }
  console.log(createdUser);
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
};
// FUNCTION: Student LogIn
export const login = (req, res) => {
  const { userid, pwd } = req.body;
  const pass = pwd;
  // CHECKING IF THE STUDENT EXISTS OR NOT
  var q = "SELECT * FROM users WHERE userid = ?";

  db.query(q, [userid], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (data.length === 0) {
      return res.status(404).json("User not found!");
    }

    // CHECKING IF THE ENTERED PASSWORD MATCHED THE STUDENT'S PASSWORD OR NOT
    const checkPassword = bcrypt.compareSync(pass, data[0].pwd);

    if (!checkPassword) {
      return res.status(400).json("Wrong password or username");
    }

    // ASSIGNING A TOKEN TO THE STUDENT
    const token = jwt.sign({ userid: data[0].userid }, "secretkey");
    const { pwd, ...other } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

// FUNCTION: Student LogOut
export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out");
};
