<?php
$data = [
  "taro,taro@yamada,090-999-999",
  "hanako,hanako@yamada,080-888-888",
  "sachiko,sachiko@yamada,070-777-777",
];

$msg = '';
if(isset($_POST['number'])){
  $n = $_POST['number']*1;
  if($n < 0){$n = 0;}
  if($n >= count($data)){$n = count($data) - 1; }
  $msg = $data[$n];
}
echo $msg;
?>