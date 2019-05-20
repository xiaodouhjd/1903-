<?php
sleep(1);
mysql_connect('127.0.0.1','root','root');
mysql_query('use meizu');
$username=$_POST['username'];
$password=$_POST['password'];
$sql="select * from m_user where username='$username' and password='$password'";
$result=mysql_query($sql);
$row = mysql_fetch_assoc($result);
if($row){
    $rows=[];
    $rows[0]=$row;
    $rows[1]=1;
        echo json_encode($rows);
    }else{
        echo 0;
    };