"use strict";

const dbName = [
  "marcobrunobr"
];

const dbQuestions = [
  "Você quer que seu currículo publico? Por favor, responda com **Sim** ou **Não**!"
];

const exampleDb = {
  user: "Nome#1234",
  survey: [
    {
      question: "",
      response: ""
    }
  ],
  profile: {
    name: "marcobrunobr",
    url: "http://collabcode.training/marcobrunobr"
  }
};

const db = {}

const signup = msg => {
  const {author} = msg;

  db.user = `${author.username}#${author.discriminator}`

  author.send(`Depois que você responder todas as peguntas será gerado um currículo online para você usar nas entrevistas! Bora pra primeira pergunta...
${dbQuestions[0]}`);

  db.survey.push({
    question: dbQuestions[0]
  })


  return false;
};

module.exports = signup;
