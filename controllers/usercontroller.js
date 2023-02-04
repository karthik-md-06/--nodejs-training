import USER from "../models/user";

import bcrypt from "bcryptjs";

export const getalluser = async (req, res, next) => {
  let users;
  try {
    users = await USER.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existinguser;
  try {
    existinguser = await USER.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existinguser) {
    return res.status(400).json({ message: "user already exists" });
  }
  const hashpassword = bcrypt.hashSync(password);
  const user = new USER({
    name,
    email,
    password: hashpassword,
    blogs:[],
  });
  try {
    user.save();
  } catch (err) {
    return console.log(err);
  }

  return res.status(201).json({ user });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existinguser;
  try {
    existinguser = await USER.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existinguser) {
    return res
      .status(404)
      .json({ message: "could not find user by this email" });
  }
  const ispass = bcrypt.compareSync(password, existinguser.password);
  if (!ispass) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  return res.status(200).json({ message: "Login sucessfull" });
};
