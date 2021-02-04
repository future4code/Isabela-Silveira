*Exercício 2*

No seu banco de dados, crie uma tabela para guardar as seguintes informações de endereço de um usuário:

- Logradouro
- Número
- Complemento (opcional)
- Bairro
- Cidade
- Estado

```
CREATE TABLE User_Address(
	id VARCHAR(255) PRIMARY KEY,
    street VARCHAR(255) NOT NULL,
    number INT NOT NULL,
    complement VARCHAR(100),
    neighborhood VARCHAR(10),
    city VARCHAR(255) NOT NULL,
    state VARCHAR (255) NOT NULL,
    user_id VARCHAR (255),
    FOREIGN KEY (user_id) REFERENCES User_profile(id)
    );
```