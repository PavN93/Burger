const orm = require("../config/orm");


module.exports = {
  selectAll: function(){
    return orm.selectAll("burgers");
  }
}

