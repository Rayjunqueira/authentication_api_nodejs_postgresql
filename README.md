# Projeto Autenticação Backend completo Express & Typescript

![Auth](https://user-images.githubusercontent.com/99502194/184500622-29c2e3e0-44c3-4f3f-8632-ad1fd98b2caa.png)

# Sobre o Projeto

Projeto de autenticação backend completo desenvolvido em Node/Express e Javascript. 
No projeto é incluído CRUD completo de usuário, autenticação via e-mail de usuário e um sistema de recuperação de senha via JWT, totalmente seguro 
com uso de criptografia dentro do banco de dados para senhas e tokens de acesso ao usuário.

# Tecnologias usadas

 <p>◼ Nodejs </p>
 ◼ Express </p>
 ◼ Sequelize </p>
 ◼ Bcrypt </p>
 ◼ Postgresql </p>
 ◼ Nodemailer </p>
 ◼ JWT </p>
 ◼ Nodemon </p>
 ◼ Dotenv </p>
 ◼ Cors </p>
 ◼ Body-Parser </p>

# Configurando Banco de Dados Sequelize na sua máquina

É necessário que dentro da pasta src seja criado o arquivo "config.json" de configuração do seu banco de dados, assim como é dado
o caminho dentro das configurações do banco e de migrations dentro da pasta ".sequelizerc".

dentro de "config.json" é necessário enviar

```
{
  "development": {
    "username": "NOME DE USUARIO DE SUA DB",
    "password": "SENHA DE SUA DB",
    "database": "NOME DO BANCO",
    "host": "HOST ONDE ESTÁ RODANDO SUA DB",
    "dialect": "QUAL SEU SQL UTILIZADO(No caso da Aplicação, postgresql)"
  },
  "test": { 
    "username": "NOME DE USUARIO DE SUA DB",
    "password": "SENHA DE SUA DB",
    "database": "NOME DO BANCO",
    "host": "HOST ONDE ESTÁ RODANDO SUA DB",
    "dialect": "QUAL SEU SQL UTILIZADO(No caso da Aplicação, postgresql)"
  },
  "production": {
    "username": "NOME DE USUARIO DE SUA DB",
    "password": "SENHA DE SUA DB",
    "database": "NOME DO BANCO",
    "host": "HOST ONDE ESTÁ RODANDO SUA DB",
    "dialect": "QUAL SEU SQL UTILIZADO(No caso da Aplicação, postgresql)"
  }
}
```
Dentro de Database/config também é recomendado colocar as informações necessárias de conexão com seu Banco de Dados!

```
DATABASE_PASSWORD = Senha do seu banco de dados 
DATABASE_USERNAME = Usuário de seu banco de dados
DATABASE_NAME = Nome do seu banco de dados
```

# Criando migrations

1 - Gere sua migration com os atributos que você deseja enviar. Ex:

    npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

2 - Modifique o model criado

3 - Rode a migration

     npx sequelize-cli db:migrate

# Configurar Sistema de envio de e-mail via Nodemailer para recuperação de senha

Dentro de utils/Mailer é necessário configurar as informações de configuração de uma hospedagem de envio de e-mails. Para testes, é recomendado 
utilizar a plataforma do Mailtrap Box

```
EMAIL_PORT = Porta de e-mail
EMAIL_HOST = Hospedagem E-mail
EMAIL_AUTH_USER = Usuário E-mail
EMAIL_AUTH_PASS = Senha E-mail
```
# Rodando aplicação na sua máquina

1 - Clone o repositório

    git clone git@github.com:Routfin/authentication_api_nodejs_postgresql.git

2 - Instalar os pacotes NPM

    npm install 
    
3 - Rodar aplicação em nodemon/localhost
    
    npm start


## Contribua com o projeto

1 - Crie um fork do projeto.

2 - git remote add origin urlDoRepositórioDoProjeto.

3 - Faça commits para aprimorar o projeto.

4 - Faça push dessa branch para seu projeto no GitHub.

5 - Abra um Pull Request
