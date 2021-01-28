*Exercício 1*

A primeira implementação que vamos fazer refere-se à função que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: *bcryptjs*. A principal vantagem dele é que é gerada uma string aleatória e atrelada à saída da criptografia. Isso **impede** que se faça o ataque chamado de ***rainbow table*,** que consiste em montar uma tabela com infinitas possibilidades da saída do *hash*. 

Abaixo, há o exemplo de uso da função de *hash*

```tsx
import * as bcrypt from "bcryptjs";

const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);
```

*a. O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*

o cost, denomidado como round na lib Bcrypt, está relacionado à segurança da senha. è indicado por dois digitos seguido por $. Os valores vai depender do sistema e usei o cost de 12 por ser o padrão na mioria das libs.

*Exercício 2*

Na aula de ontem, implementamos os endpoints de *signup* e *login* sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: **no cadastro**, antes de salvar o usuário no banco, temos que **criptografar** a senha, para que, no banco, não fique a senha em si. Já, **no login**, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de *Hash* para isso. 

*a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*

O primeiro a ser modificado deve ser o de cadastrar usuário, porque já insere no banco de dados a senha criptografada e para fazer o login é necessário comparar a senha que o usuário está colocando com a senha do banco de dados.

*d. No exercício de ontem, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*

Não, pois nesse endpoint não precisa do password.

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
