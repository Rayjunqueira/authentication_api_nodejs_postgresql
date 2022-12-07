# Projeto Autenticação Backend completo Express & Typescript

![Auth](https://user-images.githubusercontent.com/99502194/184500622-29c2e3e0-44c3-4f3f-8632-ad1fd98b2caa.png)

# Sobre o Projeto

Projeto de autenticação backend completo desenvolvido em Node/Express e Javascript. 
No projeto é incluído CRUD completo de usuário, autenticação via e-mail de usuário e um sistema de recuperação de senha via JWT.

# Tecnologias usadas

 <p>◼ Nodejs </p>
 ◼ Express </p>
 ◼ Sequelize </p>
 ◼ Postgresql </p>
 ◼ Nodemailer </p>
 ◼ JWT </p>
 ◼ Nodemon </p>
 ◼ Dotenv </p>
 ◼ Cors </p>
 ◼ Body-Parser </p>

# Configurando Banco de Dados Sequelize na sua máquina

```
É necessário que dentro da pasta src seja criado o arquivo "config.json" de configuração do seu banco de dados, assim como é dado
o caminho dentro das configurações do banco e de migrations dentro da pasta ".sequelizerc".

dentro de "config.json" é necessário enviar

```

```
DATABASE_HOST = Host 
DATABASE_USERNAME = Usuário de seu banco de dados
DATABASE_PASSWORD = Senha de seu banco de dados
DATABASE_NAME = Nome do seu banco de dados
```

Pasta de diretório de migrations e entidades.

```
entities: [`${__dirname}/../entities/*.{ts,js}`],
migrations: [`${__dirname}/migrations/*.{ts,js}`],
```


# Criando migrations

1 - Crie uma nova entidade

```
@Entity('example')
export class Example {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    test: string;
    }
}
```
2 - Gerar migration

    npm run migration:generate

3 - Rodar migration

     npm run migration:run

# Configurar Sistema de envio de e-mail via Nodemailer

```
import nodemailer from 'nodemailer';

type EmailType = {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}

const port = process.env.EMAIL_PORT as number | undefined;

const sendEmail = async ({ from, to, subject, text, html }: EmailType ) => {
    try {
        const transport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST as string,
            port: port,
            auth: {
              user: process.env.EMAIL_AUTH_USER as string,
              pass: process.env.EMAIL_AUTH_PASS as string,
            }
        });

        await transport.sendMail({
            from: from,
            to: to,
            subject: subject,
            text: text,
            html: html,
        })
    
        console.log('Email send succesfully')
        
    } catch (err) {
        console.log(err);
    }
}

export default sendEmail;
```

```
EMAIL_PORT = Porta de e-mail
EMAIL_HOST = Hospedagem E-mail
EMAIL_AUTH_USER = Usuário E-mail
EMAIL_AUTH_PASS = Senha E-mail
```
# Rodando aplicação na sua máquina

1 - Clone o repositório

    git clone https://github.com/Routfin/API_Auth_PostgreSQL_Jwt_TypeORM_Express_Typescript.git

2 - Instalar os pacotes NPM

    npm install 
    
3 - Rodar aplicação em nodemon/localhost
    
    npm run dev
 
# Ativar usuário 

Ao criar um novo usuário é necessário acessar a rota post /activate para ativar usuário.

```
email: *emaildeusuario@email.com*
token: *token de ativação enviado por email*
```

## Rodando com uma API de autenticação Real

Basta remover os Mocks e certificar de colocar o link de uma API real em baseURL e certificar de corrigir as rotas se necessário.

![mocks](https://user-images.githubusercontent.com/99502194/188183799-4ccc1f34-2e29-4c2c-834c-0ce0b503e80f.gif)


## Contribua com o projeto

1 - Crie um fork do projeto.

2 - git remote add origin urlDoRepositórioDoProjeto.

3 - Faça commits para aprimorar o projeto.

4 - Faça push dessa branch para seu projeto no GitHub.

5 - Abra um Pull Request
