"use strict";

const db = require("../../database/createDatabase");

const signup = msg => {
    const { author } = msg;
    const response = msg.content;
    const userDiscordId = author.id;

    db.find({}, (err, doc) => console.log(doc));
};

module.exports = {
    signup
};