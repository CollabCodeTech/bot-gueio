"use strict";

const signup = msg => {
  msg.author.send(`Depois que você responder todas as peguntas será gerado um currículo online para você usar nas entrevistas! Bora pra primeira pergunta...
Você quer que seu currículo privado? Por favor, responda com **Sim** ou **Não**!`);


  return false;
};

module.exports = signup;
