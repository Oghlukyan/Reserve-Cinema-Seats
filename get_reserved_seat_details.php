<?php

include "connection.php";

$seats = [];

$data = mysqli_query($connectionToCinemaDB, "SELECT * FROM `reserved tickets`");

while ($row = mysqli_fetch_assoc($data)) {
    array_push($seats, [
        'row' => $row['seat row'],
        'column' => $row['seat column'],
    ]);
}

print_r(json_encode(json_encode($seats)));
