// const handlebars = require("express-handlebars");
const orm = require("../config/orm");
// Helper function for handlebars
const inc = (value) => {
  return value + 1;
}

const renderHTML = async (res) => {
  try {
    const dbResults = await orm.selectAll();
    res.render("index", { dbResults, helpers: {
      inc,
    }})
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  renderHTML,
}