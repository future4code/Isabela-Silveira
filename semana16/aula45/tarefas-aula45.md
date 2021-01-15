1)

a) A query abaixo remove a coluna salary, comando responsável por remove-lá é o comando DROP COLUMN.

```ALTER TABLE Actor DROP COLUMN salary;```

b) A query abaixo está alterando o nome da coluna gender para sex, usando o comando CHANGE. Esse comando é responsável por modificar informações da coluna de uma tabela.

```ALTER TABLE Actor CHANGE gender sex VARCHAR(6);```

c) Essa query mantém o nome da coluna como gender, mas modifica o comando VARCHAR que antes tinha um limite de 6 strings e agora passa a ter um limite de 255 strings.

```ALTER TABLE Actor CHANGE gender gender VARCHAR(255);```

d) 

```ALTER TABLE Actor CHANGE gender gender VARCHAR(100);```

----------------------------------------------------------------------------------------------------------------------

2) 

a) 
UPDATE Actor 
SET name = "Moacyr Franco", birth_date = "1970-01-01"
WHERE id = "003";

b) 

UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";

UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";

c)

UPDATE Actor 
SET name = "Monkey D. Luffy",
	salary = 100000000,
    birth_date = "1998-01-01",
    gender = "female",
    favorite_ice_cream_flavor = "Chocomenta"
WHERE id = "005";

d) Ao rodar uma atualização com um id inexistente, constou que a atualização foi feita, mas nenhuma linha foi afetada.


----------------------------------------------------------------------------------------------------------------------

3)

a) Como o nome da atriz Fernanda Montenegro já tinha sido alterado, usei outro nome.

DELETE FROM Actor WHERE name = "George C. Scott";

b)
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000.00;

----------------------------------------------------------------------------------------------------------------------

4)

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female"

c) SELECT SUM(gender = "female") FROM Actor;

d) SELECT SUM(salary) FROM Actor; ou SELECT COUNT(*) FROM Actor WHERE gender = "female";

----------------------------------------------------------------------------------------------------------------------

5) 

a) Essa query agrupou em uma só coluna a quantidade de atores de acordo com o gênero, ou seja, conta quantos atores feminino e masculino tem.

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender

b) SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary ASC;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3; 

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

----------------------------------------------------------------------------------------------------------------------

6)

a) ALTER TABLE Movies ADD playing_limit_date DATE;

b) ALTER TABLE Movies CHANGE evaluation evaluation FLOAT;

c)

update Movies set playing_limit_date = "2021-01-30" where id = "003"; 

update Movies set playing_limit_date = "2017-12-10" where id = "002";

d) Ao rodar a query para atualizar um id que foi deletado, a atualização foi feita, mas como o id não existe mais nenhuma linha foi afetada.

delete from Movies where title = "Se eu fosse você";

update Movies set synopsis = "fazendo teste" where id = "001";

----------------------------------------------------------------------------------------------------------------------

7)

a) select count(*) from Movies group by evaluation > 7.5; ou select count(*) from Movies where evaluation > 7.5;

b) select avg(evaluation) from Movies;

c) select count(*) from Movies where playing_limit_date = "2021-01-30";

d) select count(*) from Movies where playing_limit_date > curdate(); 

e) select max(evaluation) from Movies; 

f) select min(evaluation) from Movies;

----------------------------------------------------------------------------------------------------------------------

8) 

a) select * from Movies order by title asc;

b) select * from Movies order by title desc limit 5;

c) select * from Movies where release_data < curdate() limit 3;

d) select * from Movies order by evaluation limit 3;

----------------------------------------------------------------------------------------------------------------------