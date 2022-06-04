import express from "express";
import { append } from "express/lib/response";

let configViewEngine = () => {
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs");
};

module.exports = configViewEngine;
