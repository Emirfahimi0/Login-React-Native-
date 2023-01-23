<?php
include('db.php');

$UserEmail = $decodedData['Email'];
$UserPW = md5($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM User_query WHERE email = '$UserEmail'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $Message = "Already registered";
} else {

    $InsertQuerry = "INSERT INTO User_query(email, user_pass) VALUES('$UserEmail', '$UserPW')";

    $R = mysqli_query($conn, $InsertQuerry);

    if ($R) {

       // $SelectQuerry = "INSERT INTO newuser(UserEmail, UserPW) VALUES('$UserEmail', '$UserPW')";

        $Message = "Register account Succesfully!";
    } else {
        $Message = "Error occured";
    }
}
$response[] = array("Message" => $Message);

echo json_encode($response);