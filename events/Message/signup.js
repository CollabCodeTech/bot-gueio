"use strict";

/*
  questions
*/

/* 
  userDiscordId
  question---
  response---
  name - marcobrunobr
  http://collabcode.training/dev/${name}
*/

const portfolio = {
  userDiscordId: "12313123",
  lastNumberQuestion: 0,
  url: "http://collabcode.training/dev/",
  path: "marcobrunobr",
  survey: [
    {
      answer: "Seu email?",
      response: "marco.bruno.br@gmail.com"
    }
  ]
}


const db = require("../../database/createDatabase");
const question = ["Você quer que seu currículo publico? Por favor, responda com **Sim** ou **Não**!", "Seu email?"]

const signup = msg => {
  const { author } = msg;
  const userDiscordId = author.id;
  const portfolio = {userDiscordId};
  
  db.insert({portfolio, survey: [{question: question[0]}], lastQuestion: 0}, err => {
    if (!err) {
      author.send("Depois que você responder todas as peguntas será gerado um currículo online e você terá acesso a um API para acessar dados, dessa forma você pode criar o seu portfólio ou usar apenas o currílo nas sua entrevistas! Bora pra primeira pergunta...");
      author.send(question[0]);
    }
  })

  return false;
};

module.exports = signup;
