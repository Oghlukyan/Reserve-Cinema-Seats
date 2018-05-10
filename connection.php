<?php

$host = "localhost";
$user = "root";
$password = "";

$connectionToHost = mysqli_connect($host, $user, $password);
mysqli_query($connectionToHost, "CREATE DATABASE IF NOT EXISTS cinema");

$connectionToCinemaDB = mysqli_connect($host, $user, $password, "cinema");
mysqli_query($connectionToCinemaDB, "CREATE TABLE IF NOT EXISTS `reserved tickets` (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `seat row` INT(11) NOT NULL,
    `seat column` INT(11) NOT NULL,
    `first name` VARCHAR(255) NOT NULL,
    `second name` VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    reg_date TIMESTAMP)");
