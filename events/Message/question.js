// const dbQuestions = [{
//     order: 0,
//     question: "Seu email?",
//     patterns: "email",
// },]

const db = require("../../database/createDatabase");

const setQuestion = msg => {
    const { ID_ROLE_ADM } = process.env;
    const { member, author } = msg;

    if (member.roles.find(role => role.id === ID_ROLE_ADM)) {
        author.send("Qual é a question?");

        author.send(`
\`\`\`js
{
    order: 0,
    question: "Pergunta!!!",
    patterns: {
        type: "text" || "email" || "number",
        min: 10,
        max: 240
    }
}
\`\`\`
        `)
        author.send("Por favor, mande seguindo a estrutura acima!")
    } else {
        msg.reply("Você não ter permissão pra rodar esse comando!");
    };
};

const getQuestion = msg => {
    const { ID_ROLE_ADM } = process.env;
    const { member, author } = msg;

    if (member.roles.find(role => role.id === ID_ROLE_ADM)) {
        author.send("Lista de questions");
    } else {
        msg.reply("Você não ter permissão pra rodar esse comando!");
    };
};

module.exports = {
    getQuestion,
    setQuestion
};