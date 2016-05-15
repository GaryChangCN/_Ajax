<?php
$a=$_GET['key'];
$b=$_GET['key2'];
// $a=$_POST['key'];
// $b=$_POST['key2'];
$arr=array("key"=>$a,"key2"=>$b);
echo json_encode($arr)
?>
