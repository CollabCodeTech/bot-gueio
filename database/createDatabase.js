const NeDB = require("nedb");
const config = {filename: "database.db", autoload: true};
const db = new NeDB(config);

module.exports = db;