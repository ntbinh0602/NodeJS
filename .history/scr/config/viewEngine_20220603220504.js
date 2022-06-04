import express from "express";
import { append } from "express/lib/response";

let configViewEngine = () => {
  append.use(express.static("./src/public"));
};

module.exports = configViewEngine;
