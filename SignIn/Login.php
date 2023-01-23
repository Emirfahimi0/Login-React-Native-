<?php
include('db.php');

$UserEmail = $decodedData['Email'];
$UserPW = md5($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM User_query  WHERE email = '$UserEmail'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $array_fetch  = mysqli_fetch_array($exeSQL);


    if ($array_fetch ['user_pass'] != $UserPW) {
        $Message = "wrong password!";
    } 
    
    else {
        $id = $array_fetch['User_ID']; 
        session_start(); 
        $_SESSION['user_id'] = $id;
        $Message = "Success";
    }
} 
    else {
    $Message = "No account yet";
    }

$response[] = array("Message" => $Message,"User_ID"=> $id);
echo json_encode($response);