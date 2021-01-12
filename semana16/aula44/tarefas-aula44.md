1)
a) Foi usado o comando VARCHAR para limitar o número de strings e o comando DATE, porque a informação será colocada em formato de data.

b) O comando SHOW DATABASES mostrou a base de dados que está sendo usado e o comando SHOW TABLES mostrou todas as tabelas que tem no banco de dados.

c) Ao usar o comando DESCRIBE Actor mostrou as colunas da tabela, o tipo de comando e a restrição da coluna. Nesse caso, a restrição da coluna foi NOT FULL, ou seja, não pode ser nulo.

---------------------------------------------------------------------------------------------------------------------

2)
a) 
ˋˋˋ
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-07-23",
"female"
);
ˋˋˋ

B) Ao adicionar o mesmo id do item anterior, gerou um erro, pois a restrição colocada na coluna foi a PRIMARY KEY. Devido a essa restrição não pode ter id igual.

c) Deu erro, porque na lista colocada depois do nome da tabela (Actor) não colocaram o aniversário (birth_date) e o gênero (gender). É necessário colocar, porque esses campos não podem ser nulos (NOT NULL).

Como estava:

ˋˋˋ
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
ˋˋˋ

Como é para ser:

ˋˋˋ
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
ˋˋˋ

d) Deu erro, porque o nome não foi colocado. Como a coluna do nome tem uma restrição, not full, é obrigatório colocar o nome ao inserir algum dado na tabela.

Como estava:

ˋˋˋ
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
ˋˋˋ

Como é para ser:

ˋˋˋ
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Fulana",
  400000,
  "1949-04-18", 
  "male"
);
ˋˋˋ

e) Deu erro, porque a data deve ser colocada entre aspas.

f) 

ˋˋˋ
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Gal Gadot",
400000,
"1985-30-04",
"female"
);
ˋˋˋ

ˋˋˋ
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"George C. Scott",
330000,
"1965-08-09",
"female"
);
ˋˋˋ

----------------------------------------------------------------------------------------------------------------------
3)
a) SELECT * FROM Actor WHERE gender = "female";

b) SELECT name, salary FROM Actor WHERE name = "Tony Ramos";

c) SELECT * from Actor WHERE gender = "invalid"; Como não foi criado nenhum ator ou atriz com gênero inválido, retornou null.

d) SELECT id, name, salary FROM Actor WHERE salary <= 500000;

e) Deu erro, porque está na query está escrito nome e o correto é name.

Como estava: 

SELECT id, nome from Actor WHERE id = "002";

Como é para ser:

SELECT id, name FROM Actor WHERE id = "002";
----------------------------------------------------------------------------------------------------------------------

4)

a) A query abaixo está selecionando da tabela os atores que iniciam com a letra A ou J e que tem o salário maior que 300.000. Os parênteses na primeira query indica prioridade e o operador LIKE e as porcentagens são usados para fazer a comparação de strings, nesse caso, para comparar os nomes que iniciam com letra A ou J. O perador AND na segunda query é usado quando precisa adicionar mais de uma condição, sendo todas válidas.

SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

b) SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;

c) SELECT * FROM Actor WHERE name LIKE "G%" OR name LIKE "g%";

d) SELECT * FROM Actor WHERE (name LIKE "G%" OR name LIKE "g%" OR name LIKE "A%" OR name LIKE "a%") AND  salary BETWEEN 350000 AND 900000;

----------------------------------------------------------------------------------------------------------------------
5)

a) A query abaixo cria uma tabela de filmes, essa tabela, tem quatro colunas, sendo a do id e do title com o tipo VARCHAR. Esse tipo limita a quantidade de strings. Tem também uma coluna do tipo TEXT, para inserir textos, a coluna do tipo DATE para inserir data e por fim, a coluna com tipo INT para inserir números inteiros. Todas as colunas não podem ser nulas, ou seja, são NOT NULL e o id não pode repetir.

CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
release_data DATE NOT NULL,
evaluation INT NOT NULL
);

b)

INSERT INTO Movies (id, title, synopsis, release_data, evaluation) 
VALUES(
"001",
"Se eu fosse você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

c)

INSERT INTO Movies (id, title, synopsis, release_data, evaluation)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

d)

INSERT INTO Movies (id, title, synopsis, release_data, evaluation)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

e)

INSERT INTO Movies (id, title, synopsis, release_data, evaluation)
VALUES(
"004",
"Tropa de elite",
"O capitão do Bope Roberto Nascimento lida diariamente com a violência. Pressionado pela esposa a sair da linha de frente, ele procura um substituto.",
"2007-01-01",
10
);

----------------------------------------------------------------------------------------------------------------------

6)

a) SELECT id, title, evaluation FROM Movies WHERE id = "002";

b) SELECT * FROM Movies WHERE title = "Tropa de elite";

c) SELECT id, title, evaluation FROM Movies WHERE evaluation >= 7;

----------------------------------------------------------------------------------------------------------------------

7)

a) SELECT * FROM Movies WHERE title LIKE "%vida%";

b) SELECT * FROM Movies WHERE title LIKE "%elite%" OR synopsis LIKE "%elite%";

c) SELECT * FROM Movies WHERE release_data <= "2021-01-11";

d) SELECT * FROM Movies WHERE (release_data <= "2021-01-11" AND title LIKE "%elite%" OR synopsis LIKE "%elite%") AND evaluation > 7;

----------------------------------------------------------------------------------------------------------------------