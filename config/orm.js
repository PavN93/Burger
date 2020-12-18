const connection = require("./connection");

const selectAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM burger.burgers;", (error, data) => {
      if (error) {
        console.log("Error while reading from DB:", error);
        reject(error);
      } else {
        resolve(data);
      }
    })
  })
};

const insertOne = (toInsert) => {
  return new Promise((resolve, reject) => {
    connection.query(`
    INSERT INTO burgers (burger_name, devoured)
    VALUES 
    ("${toInsert}", false);`, (error, data) => {
      if (error) {
        console.log("Error while savind to DB:", error);
        reject(error);
      } else {
        resolve(data);
      }
    })
  })
};

const updateOne = (toUpdate) => {
  return new Promise((resolve, reject) => {
    connection.query(`
    UPDATE burgers
    SET devoured = true
    WHERE id = "${toUpdate}";`, (error, data) => {
      if (error) {
        console.log("Error while updating DB:", error);
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
};

module.exports = {
  selectAll,
  insertOne,
  updateOne
}

