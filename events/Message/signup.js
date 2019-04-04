"use strict";

const dbName = [
  "marcobrunobr"
];

const dbQuestions = [
  "Você quer que seu currículo publico? Por favor, responda com **Sim** ou **Não**!"
];

const exampleDb = {
  userDiscordId: "1928731982301928731908371",
  survey: [
    {
      question: "",
      response: ""
    }
  ],
  profile: {
    name: "marcobrunobr",
    url: "http://collabcode.training/"
  }
};

const db = {
  userDiscordId: "",
  survey: [],
  profile: {}
}

const signup = msg => {
  const {author} = msg;

  console.log("entrou")

  db.userDiscordId = author.id; 

  author.send(`Depois que você responder todas as peguntas será gerado um currículo online para você usar nas entrevistas! Bora pra primeira pergunta...
${dbQuestions[0]}`);

  db.survey.push()


  return false;
};

module.exports = signup;
