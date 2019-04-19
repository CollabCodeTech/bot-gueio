"use strict";

const signup = ({author}) => {
    const questions = [
    {
        content: "Qual é o seu email?",
        pattern: "email"
    }, 
    {
        content: "Qual é o seu nome?",
        pattern: "text"
    },
    {
        content: "Você está de acordo com as #regras? Responda **SIM** ou **NÃO**",
        pattern: "SIM || NÃO"
    }];

    author.send("Pra ganhar a patente de **Collabers** você precisa responder 3 pergunta. Vamos lá!");
    author.send(questions[0].content);
    return "Te mandei uma mensgem direta, faço seu cadastro por lá :-)"
};

module.exports = {
    signup
};