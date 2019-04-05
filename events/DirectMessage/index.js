"use strict";

const db = require("../../database/createDatabase");
const question = ["Você quer que seu currículo publico? Por favor, responda com **Sim** ou **Não**!", "Seu email?"]

const signup = msg => {
    const { ID_BOT } = process.env;
    const { author } = msg;
    const answer = msg.content;
    const userDiscordId = author.id;

    if(userDiscordId && ID_BOT !== userDiscordId) {
        db.findOne(
            {portfolio: {userDiscordId}}, 
            (err, {lastQuestion}) => {
                !err && msg.reply(question[++lastQuestion]);
            }
        )
    }
};

module.exports = {
    signup
};