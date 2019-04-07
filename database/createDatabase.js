

module.exports = () => {
    const NeDB = require("nedb");
    const config = {filename: "database.db", autoload: true};
    
    return new NeDB(config);
};