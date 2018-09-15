
CREATE DATABASE VK;

use VK;

CREATE TABLE Appitizers(
    ID varchar(255),
    Name varchar(255),
    Price FLOAT
);

INSERT INTO Appitizers (ID, Name, Price)
VALUES ('A1', 'Spring Rolls', 4.50);

SELECT * FROM Appitizers;

DROP DATABASE VK;
