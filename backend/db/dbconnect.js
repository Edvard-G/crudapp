// const { Pool } = require("pg");
import pkg from "pg";
// import { Pool } from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "crudapp",
  password: "postgres",
  port: 5432,
});

export default pool;
// module.exports = pool;
