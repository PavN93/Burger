const express = require("express");
const burger = require("../models/burger");
const orm = require("../config/orm");


const app = express.Router();

const burgers = async () => {
  return await burger.selectAll();
}


module.exports = function (app) {

  app.get("/", (req, res) => {
    burger.renderHTML(res);
  });

  app.post("/burgers", async (req, res) => {
    await orm.insertOne(req.body);
    burger.renderHTML(res);
  });

  app.put("/burgers", async (req, res) => {
    await orm.updateOne(req.body);
    burger.renderHTML(res);
  })

  app.delete("/burgers", async (req, res) => {
    await orm.deleteOne(req.body);
    burger.renderHTML(res);
  })

}