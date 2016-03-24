<?php 
	include_once("sql-class.php");
	// print_r($_POST);
	$username=$_POST['phonenumber'];
	// echo $username;
	$pwd=$_POST['pwd'];
	$email=$_POST['email'];
	$sql="insert into user(phone,pwd,email) values ('$username','$pwd','$email')";
	$cont=mysql_query($sql);
	// echo "ok";
	if(mysql_affected_rows()>0){
		echo '1';
	}else{
		echo "0";
	}

 ?>