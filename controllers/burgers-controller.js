const express = require("express");
const burger = require("../models/burger");
const render = require("../models/render");

const app = express.Router();

const burgers = async () => {
  return await burger.selectAll();
}


module.exports = function (app) {
  app.get("/", function (req, res) {
    render.renderHTML(res);
  })
}