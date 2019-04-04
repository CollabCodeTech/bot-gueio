"use strict";

const db = require("../../database/createDatabase");
const questions = ["Você quer que seu currículo publico? Por favor, responda com **Sim** ou **Não**!"]

const signup = msg => {
  const portfolio = [];
  const {author} = msg;
  const userDiscordId = author.id;

  portfolio[userDiscordId] = [];
  portfolio[userDiscordId].push({ question: questions[0] });

  db.insert({portfolio}, (err, newDoc) => {
    console.log("Deu ruim:", err);

    !err && author.send(`Depois que você responder todas as peguntas será gerado um currículo online e você teŕa acesso a um API para acessar dados, dessa forma você pode criar o seu portfólio ou usar apenas o currílo nas sua entrevistas! Bora pra primeira pergunta...
    ${questions[0]}`);
  })

  return false;
};

module.exports = signup;
