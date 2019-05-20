<?php
sleep(1);
mysql_connect("127.0.0.1","root","root");
mysql_query("use meizu");
$username=$_POST['username'];
$password=$_POST['password'];
$sql="select * from m_user where username='$username'";
$result=mysql_query($sql);
$row=mysql_fetch_assoc($result);
if($row){
    echo "2";
    exit;
}else{
    $sqll="insert into m_user(username,password) values('$username','$password')";
    mysql_query($sqll);
     $rows=mysql_affected_rows();
     if($rows>0){
         echo "1";
     }else{
         echo "0";
     }
}