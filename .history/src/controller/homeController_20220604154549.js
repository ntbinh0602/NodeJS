import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("---------------------------------");
    console.log(data);
    console.log("---------------------------------");

    return res.render("homepage.ejs");
  } catch (e) {
    console.log(e);
  }
};

let getaboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  getaboutPage: getaboutPage,
};
