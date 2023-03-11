-- MySQL Script generated by MySQL Workbench
-- Пят 10 сак 2023 12:47:54
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Passenger`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Passenger` (
  `passenger_id` INT NOT NULL,
  `passenger_name` VARCHAR(45) NULL,
  `passport_id` VARCHAR(45) NULL,
  `passport_number` VARCHAR(45) NULL,
  `phone_number` VARCHAR(45) NULL,
  PRIMARY KEY (`passenger_id`))
ENGINE = InnoDB
COMMENT = 'describe tickets ';


-- -----------------------------------------------------
-- Table `mydb`.`Booking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Booking` (
  `book_id` INT NOT NULL,
  `book_date` DATETIME NULL,
  `total_book_ammount` INT NULL,
  `Passenger_passenger_id` INT NOT NULL,
  `status` TINYINT NULL,
  PRIMARY KEY (`book_id`, `Passenger_passenger_id`),
  INDEX `fk_Booking_Passenger1_idx` (`Passenger_passenger_id` ASC),
  CONSTRAINT `fk_Booking_Passenger1`
    FOREIGN KEY (`Passenger_passenger_id`)
    REFERENCES `mydb`.`Passenger` (`passenger_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'enitity that describes tickets order';


-- -----------------------------------------------------
-- Table `mydb`.`Ticket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Ticket` (
  `Ticket_id` INT NOT NULL,
  `Booking_book_id` INT NOT NULL,
  `Booking_Passenger_passenger_id` INT NOT NULL,
  `Passenger_passenger_id` INT NOT NULL,
  PRIMARY KEY (`Ticket_id`, `Booking_Passenger_passenger_id`, `Booking_book_id`, `Passenger_passenger_id`),
  INDEX `fk_Ticket_Booking1_idx` (`Booking_book_id` ASC, `Booking_Passenger_passenger_id` ASC),
  INDEX `fk_Ticket_Passenger1_idx` (`Passenger_passenger_id` ASC),
  CONSTRAINT `fk_Ticket_Booking1`
    FOREIGN KEY (`Booking_book_id` , `Booking_Passenger_passenger_id`)
    REFERENCES `mydb`.`Booking` (`book_id` , `Passenger_passenger_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ticket_Passenger1`
    FOREIGN KEY (`Passenger_passenger_id`)
    REFERENCES `mydb`.`Passenger` (`passenger_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'describe separate ticket\n';


-- -----------------------------------------------------
-- Table `mydb`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`city` (
  `city_id` INT NOT NULL,
  `city_name` VARCHAR(45) NULL,
  PRIMARY KEY (`city_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Airport`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Airport` (
  `airport_id` INT NOT NULL,
  `airport_name` VARCHAR(45) NULL,
  `longtitude` VARCHAR(45) NULL,
  `latitude` VARCHAR(45) NULL,
  `timezone` DATETIME NULL,
  `city_city_id` INT NOT NULL,
  `status` TINYINT NULL,
  PRIMARY KEY (`airport_id`),
  INDEX `fk_Airports_city1_idx` (`city_city_id` ASC),
  CONSTRAINT `fk_Airports_city1`
    FOREIGN KEY (`city_city_id`)
    REFERENCES `mydb`.`city` (`city_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`airplane`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`airplane` (
  `airplane_id` INT NOT NULL,
  `model` VARCHAR(45) NULL,
  `a_seats_ammount` INT NULL,
  `b_seats_ammount` INT NULL,
  PRIMARY KEY (`airplane_id`))
ENGINE = InnoDB
COMMENT = 'describe a separate ariplane \n';


-- -----------------------------------------------------
-- Table `mydb`.`Company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Company` (
  `company_id` INT NOT NULL,
  `company_name` VARCHAR(45) NULL,
  `status` TINYINT NULL,
  PRIMARY KEY (`company_id`))
ENGINE = InnoDB
COMMENT = 'describes and aritplane company \n';


-- -----------------------------------------------------
-- Table `mydb`.`Flight`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Flight` (
  `flight_code` INT NOT NULL,
  `departure` TIME NULL,
  `arrival` TIME NULL,
  `status` TINYINT NULL,
  `Airport_airport_id` INT NOT NULL,
  `Airport_airport_id1` INT NOT NULL,
  `airplane_airplane_id` INT NOT NULL,
  `Company_company_id` INT NOT NULL,
  `city_city_id` INT NOT NULL,
  `city_city_id1` INT NOT NULL,
  PRIMARY KEY (`flight_code`, `Company_company_id`),
  INDEX `fk_Flight_Airport1_idx` (`Airport_airport_id` ASC),
  INDEX `fk_Flight_Airport2_idx` (`Airport_airport_id1` ASC),
  INDEX `fk_Flight_airplane1_idx` (`airplane_airplane_id` ASC),
  INDEX `fk_Flight_Company1_idx` (`Company_company_id` ASC),
  INDEX `fk_Flight_city1_idx` (`city_city_id` ASC),
  INDEX `fk_Flight_city2_idx` (`city_city_id1` ASC),
  CONSTRAINT `fk_Flight_Airport1`
    FOREIGN KEY (`Airport_airport_id`)
    REFERENCES `mydb`.`Airport` (`airport_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Flight_Airport2`
    FOREIGN KEY (`Airport_airport_id1`)
    REFERENCES `mydb`.`Airport` (`airport_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Flight_airplane1`
    FOREIGN KEY (`airplane_airplane_id`)
    REFERENCES `mydb`.`airplane` (`airplane_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Flight_Company1`
    FOREIGN KEY (`Company_company_id`)
    REFERENCES `mydb`.`Company` (`company_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Flight_city1`
    FOREIGN KEY (`city_city_id`)
    REFERENCES `mydb`.`city` (`city_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Flight_city2`
    FOREIGN KEY (`city_city_id1`)
    REFERENCES `mydb`.`city` (`city_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'just plane flight with destination point cities and other attributes';


-- -----------------------------------------------------
-- Table `mydb`.`Departure`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Departure` (
  `Departure_id` INT NOT NULL,
  `status` TINYINT NULL,
  `arrival` DATETIME NULL,
  `departure` DATETIME NULL,
  `duration` TIME NULL,
  `actual_arrival` DATETIME NULL,
  `actual_departure` DATETIME NULL,
  `Flight_flight_code` INT NOT NULL,
  PRIMARY KEY (`Departure_id`),
  INDEX `fk_Departure_Flight1_idx` (`Flight_flight_code` ASC),
  CONSTRAINT `fk_Departure_Flight1`
    FOREIGN KEY (`Flight_flight_code`)
    REFERENCES `mydb`.`Flight` (`flight_code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ticket_flight`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Ticket_flight` (
  `ticket_flight_id` INT NOT NULL,
  `fare_conditions` VARCHAR(45) NULL,
  `Ticket_Ticket_id` INT NOT NULL,
  `Ticket_Booking_Passenger_passenger_id` INT NOT NULL,
  `Ticket_Booking_book_id` INT NOT NULL,
  `Departure_Departure_id` INT NOT NULL,
  PRIMARY KEY (`ticket_flight_id`, `Ticket_Ticket_id`, `Ticket_Booking_Passenger_passenger_id`, `Ticket_Booking_book_id`, `Departure_Departure_id`),
  INDEX `fk_Ticket_flight_Ticket1_idx` (`Ticket_Ticket_id` ASC, `Ticket_Booking_Passenger_passenger_id` ASC, `Ticket_Booking_book_id` ASC),
  INDEX `fk_Ticket_flight_Departure1_idx` (`Departure_Departure_id` ASC),
  CONSTRAINT `fk_Ticket_flight_Ticket1`
    FOREIGN KEY (`Ticket_Ticket_id` , `Ticket_Booking_Passenger_passenger_id` , `Ticket_Booking_book_id`)
    REFERENCES `mydb`.`Ticket` (`Ticket_id` , `Booking_Passenger_passenger_id` , `Booking_book_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ticket_flight_Departure1`
    FOREIGN KEY (`Departure_Departure_id`)
    REFERENCES `mydb`.`Departure` (`Departure_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Describes flight that separate person get from ticket\n';


-- -----------------------------------------------------
-- Table `mydb`.`seat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`seat` (
  `seat_no` INT NOT NULL,
  `airplane_airplane_id` INT NOT NULL,
  `seat_class` CHAR(2) NULL,
  PRIMARY KEY (`airplane_airplane_id`, `seat_no`),
  INDEX `fk_seats_airplanes1_idx` (`airplane_airplane_id` ASC),
  CONSTRAINT `fk_seats_airplanes1`
    FOREIGN KEY (`airplane_airplane_id`)
    REFERENCES `mydb`.`airplane` (`airplane_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'describes an ariplanes seat\n';


-- -----------------------------------------------------
-- Table `mydb`.`Boarding_pass`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Boarding_pass` (
  `luggage_weight` INT NULL,
  `seat_airplane_airplane_id` INT NOT NULL,
  `seat_seat_no` INT NOT NULL,
  `Ticket_flight_ticket_flight_id` INT NOT NULL,
  `Ticket_flight_Ticket_Ticket_id` INT NOT NULL,
  `Ticket_flight_Ticket_Booking_Passenger_passenger_id` INT NOT NULL,
  `Ticket_flight_Ticket_Booking_book_id` INT NOT NULL,
  `Ticket_flight_Departure_Departure_id` INT NOT NULL,
  PRIMARY KEY (`seat_airplane_airplane_id`, `seat_seat_no`),
  UNIQUE INDEX `ticket_flight_seat_idx` (`seat_airplane_airplane_id` ASC, `seat_seat_no` ASC, `Ticket_flight_Departure_Departure_id` ASC),
  INDEX `fk_boarding_pass_ticket_flight_idx` (`Ticket_flight_ticket_flight_id` ASC, `Ticket_flight_Ticket_Ticket_id` ASC, `Ticket_flight_Ticket_Booking_Passenger_passenger_id` ASC, `Ticket_flight_Ticket_Booking_book_id` ASC, `Ticket_flight_Departure_Departure_id` ASC),
  CONSTRAINT `fk_Boarding_pass_seat1`
    FOREIGN KEY (`seat_airplane_airplane_id` , `seat_seat_no`)
    REFERENCES `mydb`.`seat` (`airplane_airplane_id` , `seat_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Boarding_pass_Ticket_flight1`
    FOREIGN KEY (`Ticket_flight_ticket_flight_id` , `Ticket_flight_Ticket_Ticket_id` , `Ticket_flight_Ticket_Booking_Passenger_passenger_id` , `Ticket_flight_Ticket_Booking_book_id` , `Ticket_flight_Departure_Departure_id`)
    REFERENCES `mydb`.`Ticket_flight` (`ticket_flight_id` , `Ticket_Ticket_id` , `Ticket_Booking_Passenger_passenger_id` , `Ticket_Booking_book_id` , `Departure_Departure_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
