const NeDB = require("nedb");
const config = {filename: "databse.db", autoload: true};
const db = new NeDB(config);

console.log("Vai!!!")

module.exports = db;