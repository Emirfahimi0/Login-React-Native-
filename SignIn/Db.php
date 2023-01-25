<?php
    $conn = mysqli_connect('localhost', 'root', '');
    $database = mysqli_select_db($conn, 'ReGov');

    $encodedData = file_get_contents('php://input');  // take data from react native fetch API or allows to read raw request body.
    $decodedData = json_decode($encodedData, true);