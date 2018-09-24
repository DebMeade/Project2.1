DROP DATABASE IF EXISTS drugTracker_db;
CREATE DATABASE drugTracker_db;
USE drugTracker_db;

DROP TABLE IF EXISTS drugs;

CREATE TABLE `drugs` (
	`id` INT(40) NOT NULL AUTO_INCREMENT,
	`ndcNum` INT(40) NOT NULL,
	`rxNum` INT(40) NOT NULL,
	`doctorName` VARCHAR(40) NOT NULL,
	`pharmName` VARCHAR(40) NOT NULL,
	`drugName` VARCHAR(40) NOT NULL,
	`drugForm` VARCHAR(40) NULL,
	`drugFormSize` INT(40) NULL DEFAULT NULL,
	`drugFormMeasure` VARCHAR(40) NULL DEFAULT NULL,
	`currentQty` INT(40) NOT NULL,
	`bottleFullQty` INT(40) NOT NULL,
	`bottlePartialQty` INT(40) NOT NULL,
	`rxWritten` DATE NOT NULL,
	`rxFilled` DATE NOT NULL,
	`rxDiscard` DATE NOT NULL,
	`rxReorder` DATE NOT NULL,
	`drugDose` INT(11) NOT NULL,
	`drugFreq` INT(11) NOT NULL,
	`early` TINYINT(1) NULL,
	`middle` TINYINT(1) NULL,
	`late` TINYINT(1) NULL,
	`instructions` TEXT NOT NULL,
	`precautions` TEXT NOT NULL,
	PRIMARY KEY (`id`)
);

USE drugTracker_db;
DROP TABLE IF EXISTS contacts;
CREATE TABLE contacts
(
    id INT (40) AUTO_INCREMENT,  
    pharmName VARCHAR (40) NOT NULL,         
    doctorName VARCHAR (40) NOT NULL,
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


USE drugTracker_db;
DROP TABLE IF EXISTS inventory;
CREATE TABLE inventory
(
    id INT (40) AUTO_INCREMENT,  
    drugName VARCHAR (40) NOT NULL,
    bottleFullQty INT,
    bottlePartialQty INT, 
    drugDose INT,
    drugFrew INT,
    bottleCount INT,
    PRIMARY KEY
    (id)
);