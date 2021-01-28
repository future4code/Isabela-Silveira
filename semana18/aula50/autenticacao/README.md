*Exercício 1*

*a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*

*Exercício 2*

Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email e uma senha salva para que a gente consiga fazer a autenticação dele. 
Na hora de salvar essas informações na tabela, é interessante que façamos uma função específica para isso. Abaixo, há um exemplo: 

```tsx
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```

*a. Explique o código acima com as suas palavras.*

O código acima está inserindo um novo usuário que tem id, email e senha na tabelha de usuário do banco de dados.

*b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*

```tsx
CREATE TABLE User_profile (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);
```
*Exercício 3*
Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:

- os dados que serão salvos no token (no nosso caso, o id);
- a chave secreta usada pra criptografar o token;
- algumas configurações, como o tempo de expiração

Abaixo, há uma função que faz isso, com o tempo de expiração de 1 minuto:

```tsx
import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
```

*a. O que a linha `as string` faz? Por que precisamos usar ela ali?*

Precisamos usar ela, porque ela determina que o que vai ser passado é com certeza uma string.
