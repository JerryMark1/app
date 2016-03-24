<?php 
	include_once("sql-class.php");
	$phone=$_POST['phone'];
	$pwd=$_POST['pwd'];
	// print_r($_POST);
	$sql="select * from user where phone = '$phone' and pwd = '$pwd'";
	$cont=mysql_query($sql);	
	// echo "ok";
	if(mysql_num_rows($cont)){
		echo "1";
	}else{
		echo "0";
	}

 ?>