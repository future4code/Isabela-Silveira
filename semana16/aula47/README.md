1)

a) Explique o que é uma chave estrangeira:

Res: A chave estrangeira, FOREIGN KEY, liga uma tabela a outra.

b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

```
CREATE TABLE Rating (
id varchar(255) primary key,
comment text not null,
rate float not null,
movie_id varchar(255),
foreign key (movie_id) references Movies(id)
);

insert into Rating values 
('020', 'muito bom', 10.00, '002'),
('021', 'bom', 7.00, '003'),
('022', 'boom demaaais', 10.00, '004');
```

c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

Res: O resultado foi: Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha. 

A FOREIGN KEY se refere a PRIMARY KEY (id), por isso, não é possível criar uma avaliação para um id inválido. 

```
insert into Rating 
values ('023', 'teste', 0,'005');
```

d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

```
alter table Movies drop column rating;
```
e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

Res: Coluna desconhecida 'avaliação' em 'cláusula where'

Deu erro, porque a coluna de avaliações não existe mais.


2)

a) Essa query cria uma tabela de relação com as colunas id do filme e do ator e faz uma referência  com a coluna id da tabela de filme e com a coluna id da tabela de ator.

b) Crie, ao menos, 6 relações nessa tabela

```
insert into MovieCast values 
('002', '002'), ('003', '003'), ('004', '005'), 
('003', '006'), ('004', '011'), ('003', '012');
```

c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query

Res: Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha.

Não foi possível porque para fazer a relação é necessário criar o ator ou o filme primeiro.


3)

a) Explique, com suas palavras, a query acima. O que é o operador ON?

Res: É uma condição e se ela não for passada retorna as combinações de todos os itens das duas tabelas.


