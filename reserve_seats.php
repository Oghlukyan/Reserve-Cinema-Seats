<?php

include "connection.php";

mysqli_query($connectionToCinemaDB, "
    INSERT INTO `reserved tickets` (
        `seat row`,
        `seat column`,
        `first name`,
        `second name`,
        `email`
    )
    VALUES (
        '".$_POST['seatRow']."',
        '".$_POST['seatColumn']."',
        '".$_POST['firstName']."',
        '".$_POST['secondName']."',
        '".$_POST['email']."'
    )
");
