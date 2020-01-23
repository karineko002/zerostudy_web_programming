<!-- Chaoter5 リスト5-7　クエリパラメーターを使おう -->
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Hello!</title>
  <style>
  body{font-size:14pt; font-weight:plain;}
  h1 {color:white; font-size:24pt;
    background-color:green;}
  table td{background-color:#aaffaa;}
  </style>
</head>

<body>
  <h1>Hello!</h1>
  <p>
  <?php
$key = $_GET['key'];
echo "<p>「{$key}」のデータ</p>";
echo'<table>';
$data = getData($key);
printData($data);
echo '</table>';

function getData($key){
	$data = [
		'taro' => ['taro@yamada','090-999-999'], 
		'hanako' => ['hanako@flower','080-888-888'], 
		'sachiko' => ['sachico@happy','070-777-777'], 
		'tuyano' => ['syoda@tuyano.com','060-666-666']
	];
	if (isset($data[$key])){
		return $data[$key];
	} else {
		return ['not found','...'];
	}
}

function printData($arr){
	echo "<tr><td>{$arr[0]}</td><td>{$arr[1]}</td></tr>";
}
?>

  </p>
  </body>
  </html>

  <!-- access http://localhost/zerostudy_web_programming/hello.php -->
  <!-- クエリパラメータ用access http://localhost/zerostudy_web_programming/hello.php?key=taro -->