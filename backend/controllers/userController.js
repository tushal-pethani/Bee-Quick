import { db } from "../db.js";
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'


export const register = (req, res) => {
    const { userid, name, gender, residence, age, ph_no, pwd } = req.body
    console.log(userid)
    var q = `SELECT * FROM users WHERE userid = ?`
    db.query(q, [userid], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (data.length) {
            return res.status(409).json("User already exists!");
        }
    });

    // GENERATE A HASHED PASSWORD FOR THE ENTERED PASSWORD
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(pwd, salt);

    // const date = new Date()

    // INSERTING A NEW STUDENT IN THE TABLE
    // q = "INSERT INTO students (`username`, `email`, `password`, `name`, `hostel_name`, `role`, `registration_date`) VALUES (?)";
    q = `INSERT INTO users (userid,name,gender,residence,age,ph_no,pwd,role) VALUES (?,?,?,?,?,?,?,?)`
    const values = [userid,name,gender,residence,age,ph_no,hashedPassword,"User"];
    console.log(values)

    db.query(q, values, (err, data) => {
        if (err) {
            console.log("error occurred while sending query in register");
            return res.status(500).json(err);
        }
        return res.status(200).json("User has been created");
    });
}
// FUNCTION: Student LogIn
export const login = (req, res) => {
    const { userid, pwd } = req.body;
    const pass = pwd
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
  
      res.cookie("accessToken", token, {
        httpOnly: true,
      }).status(200).json(other);
  
    });
    
  };
  
  // FUNCTION: Student LogOut
  export const logout = (req, res) => {
    res.clearCookie("accessToken", {
      secure: true,
      sameSite: "none"
    }).status(200).json("User has been logged out");
  };
  