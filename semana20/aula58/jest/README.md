Exercícios da aula 58 sobre testes automatizados com Jest

*Exercício 3*

Agora, vamos fazer uma função mais complexa. O contexto dela é o seguinte: fazer um sistema que identifique quais pessoas que estão em uma fila podem entrar em um cassino. A empresa que vai fazer isso quer ter filias nos EUA e no Brasil. Então, os `casino` devem possuir um nome e um lugar onde ficam (`EUA` ou `BRAZIL`).  Os usuários devem ser identificados pelo nome, pela nacionalidade (`AMERICAN` ou `BRAZILIAN`) e a idade. Se um usuário for entrar em um `casino` nos Estados Unidos, ele deve ter idade maior do que (idade igual a) 21 anos; se entrar em um no Brasil, ele deve ter idade maior do que (idade igual a) 18 anos.

O retorno da função deve separar os usuários em Brasileiros e Americanos e indicar os nomes dos que tem permissão de entrar e os nomes dos que não tem. Abaixo, estão as entradas da função, a saída e a assinatura dela:

**Entrada**

```tsx
enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

interface User {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

interface Casino {
  name: string;
  location: LOCATION;
}
```

**Saída**

```tsx
interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

interface ResultItem {
  allowed: string[];
  unallowed: string[];
}
```

**Assinatura**

```tsx
function verifyAge(casino: Casino, users: User[]): Result
```

*a. Leia os códigos fornecidos acima com calma. Veja se não ficou com nenhuma dúvida.*

*b. Implemente a função*

    Implementação no arquivo ex3.ts

*c. O que foi mais difícil de fazer?*

O mais difícil de fazer foi a implementação.