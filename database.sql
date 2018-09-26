
CREATE DATABASE IF NOT EXISTS VK;

use VK;

CREATE TABLE IF NOT EXISTS Appetizers(
    ID varchar(255),
    Name varchar(255),
    Price FLOAT
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
CREATE TABLE IF NOT EXISTS Vermicelli(
    ID varchar(255),
    Name varchar(255),
    Price FLOAT
);

INSERT INTO Appetizers (ID, Name, Price)
VALUES ('A1', 'Spring Rolls', 4.50),
('A2', 'Fresh Shredded Pork Rice Paper Roles', 6.50),
('A3', 'Fresh Shredded Shrimp & Pork Rice Paper Roles', 7.25)
;

INSERT INTO Soups (ID, Name, Price)
VALUES ('S1', 'Chicken Corn Soup', 3.95),
('S2', 'Wonton Shrimp Soup', 4.50),
('S3', 'Hot & Sour Soup', 4.35)
;

INSERT INTO PHO (ID, Name, Price)
VALUES ('P1', 'Rice Noodle Medium Rare Beef', 9.75),
('P2', 'Rice Noodle Medium Rare Beef & Beef Balls', 9.75),
('P3', 'Rice Noodle Medium Rare % Well-Done Beef', 9.75)
;

INSERT INTO Rice (ID, Name, Price)
VALUES ('R1', 'Charcoal Grilled Beef on Rice', 10.75),
('R2', 'Charcoal Grilled Chicken on Rice', 10.50),
('R3', 'Charcoal Grilled Pork Chops on Rice', 10.50)
;

INSERT INTO Vermicelli (ID, Name, Price)
VALUES ('V1', 'Charcoal Grilled Beef on Vermicelli', 10.25),
('V2', 'Charcoal Grilled Chicken on Vermicelli', 9.95),
('V3', 'Charcoal Grilled Beef & Shredded Pork on Rice', 11.25)
;

SELECT * FROM Appetizers;
SELECT * FROM Soups;
SELECT * FROM PHO;
SELECT * FROM Rice;
SELECT * FROM Vermicelli;

