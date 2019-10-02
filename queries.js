const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "nodeJS",
  password: "root",
  port: 5432
});

const getCustomers = (req, res) => {
  pool.query("Select * from customer order by first_name", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {getCustomers}
