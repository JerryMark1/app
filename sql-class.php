<?php 
	header("Content-Type:text/html;charset=utf-8");
	/*连接数据库*/
	const HOST="localhost";
	const USER="root";
	const PASSWORD="";
	const DB="app";
	 $handle=mysql_connect(HOST,USER,PASSWORD) or die ("数据库连接失败");
	 mysql_select_db(DB);
 ?>