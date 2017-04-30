CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name TEXT,
	devoured BOOLEAN,
	date TIMESTAMP,
primary key (id) 
);