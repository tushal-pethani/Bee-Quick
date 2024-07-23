import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  const { emp_id, pwd, name, ph_no, gender, role, age, residence } = req.body;
  console.log(role);
  // console.log(ownerid)
  var q = `SELECT * FROM employees WHERE emp_id = ?`;
  db.query(q, [emp_id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
      console.log("some error");
    }
    if (data.length) {
      return res.status(409).json("Driver already exists!");
    }
  });

  // GENERATE A HASHED PASSWORD FOR THE ENTERED PASSWORD
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(pwd, salt);

  // const date = new Date()

  // INSERTING A NEW STUDENT IN THE TABLE
  // q = "INSERT INTO students (`username`, `email`, `password`, `name`, `hostel_name`, `role`, `registration_date`) VALUES (?)";
  q = `INSERT INTO employees (emp_id, pwd, name, ph_no, gender, role, age, residence) VALUES (?,?,?,?,?,?,?,?)`;
  const values = [
    emp_id,
    hashedPassword,
    name,
    ph_no,
    gender,
    role,
    age,
    residence,
  ];
  console.log(values);

  db.query(q, values, (err, data) => {
    if (err) {
      console.log("error occurred while sending query in register");
      return res.status(500).json(err);
    } else {
      if (role === "Driver") {
        const { bike_id, manufacturing_date, model, avail } = req.body;
        const query = `INSERT INTO bikes(bike_id, owner_id, manufacturing_date, model, avail) VALUES (?,?,?,?,?)`;
        const v = [bike_id, emp_id, manufacturing_date, model, avail];
        console.log(v);
        db.query(query, v, (err, data) => {
          if (err) {
            console.log("error occurred while sending query in register");
            return res.status(500).json(err);
          }
          return res.status(200).json("Driver has been created");
        });
      } else return res.status(200).json("Employee created");
    }
  });
};
// FUNCTION: Student LogIn
export const login = (req, res) => {
  const { emp_id, pwd } = req.body;
  const pass = pwd;
  // CHECKING IF THE STUDENT EXISTS OR NOT
  var q = "SELECT * FROM employees WHERE emp_id = ?";

  db.query(q, [emp_id], (err, data) => {
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
    const token = jwt.sign({ ownerid: data[0].ownerid }, "secretkey");
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
