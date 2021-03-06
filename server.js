require('dotenv').config();
const express = require("express");
var exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routes
require("./controllers/burgers-controller")(app);

app.listen(PORT, function() {
  console.log("Server listening on port:", PORT);
})