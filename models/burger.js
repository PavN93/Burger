const orm = require("../config/orm");
const _ = require("lodash")
// Helper function for handlebars
const inc = (value) => {
  return value + 1;
}

const renderHTML = async (res) => {
  try {
    const dbResults = await orm.selectAll();
    const devoured = dbResults.filter(i => i.devoured === 1);
    const ordered = dbResults.filter(i => i.devoured === 0);
    res.render("index", { devoured, ordered, helpers: {
      inc,
    }})
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  renderHTML,
}