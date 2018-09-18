###Schema
DROP DATABASE IF EXISTS drugTracker_db;
CREATE DATABASE drugTracker_db;
USE drugTracker_db;

CREATE TABLE drugs
(
    ndcNum INT (40) NOT NULL, 
    rxNum   INT (40) NOT NULL,
    name VARCHAR(40) NOT NULL, 
    drugName VARCHAR (40) NOT NULL,
    drugForm VARCHAR (40) NOT NULL, 
    drugFormSize INT (40) NULL, 
    drugFormMeasure VARCHAR (40) NULL,
    currentQty INT (40) NOT NULL,
    bottleFullQty INT (40) NOT NULL,
    bottlePartialQty INT (40) NOT NULL,
    rxWritten DATE NOT NULL, 
    rxFilled DATE NOT NULL, 
    rxDiscard DATE NOT NULL,
    rxReorder DATE NOT NULL,
    drugDose INT NOT NULL, 
    drugFreq INT NOT NULL, 
    early   BOOLEAN, 
    mid     BOOLEAN, 
    late    BOOLEAN,
    instructions TEXT NOT NULL,
    precautions TEXT NOT NULL,
	
	PRIMARY KEY
    (ndcNum)
);

USE drugTracker_db;

CREATE TABLE contacts
(
    id INT (40) AUTO_INCREMENT,  
    type VARCHAR (40) NOT NULL,         
    name VARCHAR (40) NOT NULL,
    address VARCHAR (40) NOT NULL,
    city VARCHAR (40) NOT NULL, 
    state VARCHAR (40) NOT NULL, 
    zip VARCHAR (40) NOT NULL, 
    locationId VARCHAR (40) NULL,    
    email VARCHAR (40) NULL, 
    phone VARCHAR (40) NOT NULL,

    PRIMARY KEY
    (id)
);