<?php
if (isset($_POST['number'])){
  $num = $_POST['number'];
  $map = file("data/map{$num}.txt");
  for($i = 0;$i < count($map);$i++){
    $val = trim($map[$i]);
    $map[$i] = explode(',', $val);
  }
  $item = file("data/items{$num}.txt");
  for($i = 0;$i < count($item);$i++){
    $val = trim($item[$i]);
    $item[$i] = explode(',',$val);
  }
  $data = array('map' => $map, 'items' => $item);
  echo json_encode($data);
} else {
  echo json_encode(array('map' => null, 'items' => null));
}
?>

