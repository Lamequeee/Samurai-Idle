-- Se existir fará a exclusão;
DROP DATABASE IF EXISTS samuraiidle;

-- Cria o banco de dados se não existir;
CREATE DATABASE IF NOT EXISTS samuraiidle;

-- Usa o banco de dados ( SamuraiIdle );
USE samuraiidle;

-- Criando tabela;
-- Não esquecer que deve ser utilizado CRASE `` ao inves de aspas simples ou duplas;
CREATE TABLE IF NOT EXISTS `contagemitem`(
	`id_item` BIGINT NOT NULL auto_increment,
    `item` BIGINT NOT NULL, 
    PRIMARY KEY(`id_item`)
);