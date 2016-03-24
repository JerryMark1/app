<?php 
	include_once("sql-class.php");
	$phone=$_POST['phone'];
	// print_r($_POST);
	$sql="select phone from user where phone = '$phone'";
	$cont=mysql_query($sql);	
	if(mysql_num_rows($cont)){
		echo "1";
	}else{
		echo "0";
	}

 ?>