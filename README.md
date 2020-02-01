# Para fazer funcionar o projeto

1. Primeiro passo é só você clonar o projeto com o comando a seguir:

```bash
git clone git@github.com:CollabCodeTech/bot-gueio.git
```

1. Criar na raiz do projeto um arquivo `.env` com o seguinte conteúdo:

```md
TOKEN=aqui_vc_coloca_o_token_do_seu_bot

WELCOME_CHANNEL=id_do_channel_de_boas_vindas
ROLE_WELCOME=role_que_eh_adicionada_quando_o_usuário_entra

COMMAND_PREFIX=prefixo_para_os_comandos
```

1. É necessário você ter o Node e o yarn instalado na sua máquina

1. Instalar as dependências do projeto com o comando a seguir:

```bash
yarn install
```

1. Subir o projeto em ambiente de desenvolvimento

```bash
yarn run dev
```
