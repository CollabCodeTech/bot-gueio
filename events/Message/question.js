// const dbQuestions = [{
//     order: 0,
//     question: "Seu email?",
//     type: "email",
// },]


const question = msg => {
    const { ID_ROLE_ADM } = process.env
    const { member, author } = msg;

    if (member.roles.find(role => role.id === ID_ROLE_ADM)) {
        author.send("Lista de questions");
    } else {
        msg.reply("Você não ter permissão pra rodar esse comando!");
    }
};

module.exports = question;