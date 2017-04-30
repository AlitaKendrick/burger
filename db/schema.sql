CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name TEXT,
	devoured BOOL DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
primary key (id) 
);