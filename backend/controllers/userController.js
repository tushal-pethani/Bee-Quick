import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating tokens");
  }
};

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
export const login = async (req, res) => {
  const { userId } = req.body;
  if (!userId || !req.body.pwd) {
    throw new ApiError(400, "userId and password is required");
  }
  const user = await User.findOne({ userId });
  if (!user) {
    throw new ApiError(404, "User does not exists");
  }
  const isPasswordValid = await user.isPasswordCorrect(req.body.pwd);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );
  const loggedInUser = await User.findById(user._id).select(
    "-pwd -refreshToken"
  );
  const options = {
    httpOnly: true,
    secured: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "User LoggedIn Successfully"
      )
    );
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
