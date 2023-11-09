import express from "express";
import dotenv from "dotenv";
dotenv.config();
import usersData from "./data/usersData.js";
import getUsers from "./db/userDbImplementation.js";

const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Start point");
});

app.get("/api/usersData", getUsers);

// app.get("/api/usersData", (req, res) => {
//   const userList = getUserList();

//   const userList = getUsers();

//   const userData = userList.map((user) => ({
//     _id: user.id,
//     firstName: user.name,
//     lastName: user.surname,
//     email: user.email,
//   }));
//   res.json(userList);
// });

app.get("/api/usersData/:id", (req, res) => {
  const userData = usersData.find((uD) => uD._id === req.params.id);
  res.json(userData);
});

app.listen(port, console.log(`Server is on port ${port}`));
