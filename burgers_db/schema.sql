CREATE DATABASE eatyoburgers_db;
USE eatyoburgers_db;

CREATE TABLE eatyoburgers
(
    id int NOT NULL
    AUTO_INCREMENT,
	burger_name varchar
    (255) NOT NULL,
	devoured BOOLEAN,
	PRIMARY KEY
    (id)
);