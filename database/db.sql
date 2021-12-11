CREATE TABLE agendamento
(
  agendamento_id     int4        NOT NULL,
  data               varchar(45),
  status             boolean    ,
  codigo-verificacao int        ,
  horario_entrada    int8       ,
  user_id            int4        NOT NULL,
  restaurante_id     int4        NOT NULL,
  mesa_id            int4        NOT NULL,
  PRIMARY KEY (agendamento_id)
);

CREATE TABLE mesas
(
  mesa_id        int4        NOT NULL,
  descricao      varchar(45),
  qtd_cadeiras   int8       ,
  restaurante_id int4        NOT NULL,
  PRIMARY KEY (mesa_id)
);

CREATE TABLE Perfis
(
  user_id        int4        NOT NULL,
  username       varchar(45),
  email          varchar(45),
  senha          varchar(45),
  cpf            int8       ,
  dat_nascimento date       ,
  avatar_url     text       ,
  PRIMARY KEY (user_id)
);

CREATE TABLE restaurantes
(
  restaurante_id int4        NOT NULL,
  nome           varchar(45),
  descricao      varchar(45),
  estado         varchar(45),
  cidade         varchar(45),
  rua_avenida    varchar(45),
  telefone       int8       ,
  cnpj           int8       ,
  preco          varchar(45),
  images_url     text       ,
  user_id        int4        NOT NULL,
  PRIMARY KEY (restaurante_id)
);

ALTER TABLE mesas
  ADD CONSTRAINT FK_restaurantes_TO_mesas
    FOREIGN KEY (restaurante_id)
    REFERENCES restaurantes (restaurante_id);

ALTER TABLE agendamento
  ADD CONSTRAINT FK_Perfis_TO_agendamento
    FOREIGN KEY (user_id)
    REFERENCES Perfis (user_id);

ALTER TABLE restaurantes
  ADD CONSTRAINT FK_Perfis_TO_restaurantes
    FOREIGN KEY (user_id)
    REFERENCES Perfis (user_id);

ALTER TABLE agendamento
  ADD CONSTRAINT FK_restaurantes_TO_agendamento
    FOREIGN KEY (restaurante_id)
    REFERENCES restaurantes (restaurante_id);

ALTER TABLE agendamento
  ADD CONSTRAINT FK_mesas_TO_agendamento
    FOREIGN KEY (mesa_id)
    REFERENCES mesas (mesa_id);

        
      