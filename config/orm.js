const connection = require("./connection");

const selectAll = () => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM burgers;`, (error, data) => {
      if (error) {
        console.log("Error while reading from DB:", error);
        reject(error);
      } else {
        resolve(data);
      }
    })
  })
};


const insertOne = (table, columnNames, toInsert) => {
  return new Promise((resolve, reject) => {
    connection.query(`
    INSERT INTO ${table} (${columnNames})
    VALUES 
    ("${toInsert});`, (error, data) => {
      if (error) {
        console.log("Error while saving to DB:", error);
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
    UPDATE ${table}
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

const deleteOne = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(`
    DELETE FROM burgers WHERE id = ${id};`, (error, data) => {
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

