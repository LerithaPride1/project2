CREATE DATABASE Providers;
USE providers;

CREATE TABLE venues (
ID INTEGER AUTO_INCREMENT,
img LONGBLOB NOT NULL,
name VARCHAR(100) not null,
address VARCHAR(100) not null,
description VARCHAR(300) not null,
type VARCHAR(50) not null,
capacity VARCHAR(20) not null,
budget VARCHAR(20) not null,
price INTEGER,
PRIMARY KEY (ID)
);

SELECT * FROM Providers;    