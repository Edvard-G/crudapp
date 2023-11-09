import pool from "./dbconnect.js";

const getUsers = (req, res) => {
  pool.query(`SELECT * FROM "user" `, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
};

export default getUsers;
