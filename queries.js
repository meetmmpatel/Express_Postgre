const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "nodeJS",
  password: "root",
  port: 5432
});

const getCities = (req, res) => {
  pool.query("Select * from city order by city", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getOneCity = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(
    "Select * from city where city_id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const postCity = (req, res) => {
  const { city, country_id, last_update } = req.body;
  pool.query(
    "Insert into city (city, country_id, last_update) values ($1,$2,$3) ",
    [city, country_id, last_update],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.status(201).send({ msg: "City has been created" });
    }
  );
};

module.exports = { getCities, getOneCity,postCity };
