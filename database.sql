
CREATE DATABASE IF NOT EXISTS VK;

use VK;

CREATE TABLE IF NOT EXISTS Appitizers(
    ID varchar(255),
    Name varchar(255),
    Price FLOAT,
    PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS Soups(
    ID varchar(255),
    Name varchar(255),
    Price FLOAT
);

CREATE TABLE IF NOT EXISTS PHO(
    ID varchar(255),
    Name varchar(255),
    Price FLOAT
);

CREATE TABLE IF NOT EXISTS Rice(
    ID varchar(255),
    Name varchar(255),
    Price FLOAT
);

INSERT INTO Appitizers (ID, Name, Price)
VALUES ('A1', 'Spring Rolls', 4.50),
('A2', 'Fresh Shredded Pork Rice Paper Roles', 6.50);

SELECT * FROM Appitizers;
