CREATE TABLE tasks(
  id serial,
  nome VARCHAR(255) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL
);

ALTER TABLE tasks ADD PRIMARY KEY (id);
