<?php
include('db.php');

session_start();
$retrieve_id = $_SESSION['user_id'];

$SQL = "SELECT * FROM businessuser WHERE user_id = $retrieve_id";
$exeSQL = mysqli_query($conn, $SQL);
$checkId =  mysqli_num_rows($exeSQL);

if ($checkId > 0) {
 
    $array_fetch  = mysqli_fetch_array($exeSQL);
    $U_ID = $array_fetch['user_id'];
    $first_name = $array_fetch['first_name'];
    $last_name = $array_fetch['last_name'];
    $Gender = $array_fetch['Gender'];
    $Age = $array_fetch['Age'];
    $number = $array_fetch['phoneNumber'];
    $Bio = $array_fetch['Bio'];
    $email = $array_fetch['email'];
    $Message = "200";

} 

else {
    $Message = "Error ";
}
$response[] = array("Message" => $Message,"first_Name"=>$first_name,"last_Name"=>$last_name,
                "Gender"=>$Gender,"Age"=>$Age,"U_ID" => $U_ID,"number"=>$number,"Bio"=>$Bio,"email"=>$email,);

echo json_encode($response);