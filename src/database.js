const { JsonDB, Config } = require("node-json-db");

//Database config
var db = new JsonDB(new Config("myDataBase", true, false, "/"));

module.exports = { db };