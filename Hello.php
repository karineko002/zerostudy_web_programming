<!-- Chaoter5 リスト5-18　ファイルへの書き出し -->
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title>Hello!</title>
	<style>
	body { font-size:14pt; font-weight:plain;}
	h1 { color:white;font-size:24pt;
		background-color:red; }
  table td { background-color:#aaffaa; }
  </style>
  <?php 
  // ファイルを開く　fopen
  if(isset($_POST['msg'])){
    $msg = $_POST['msg'];
    $f = @fopen('savedata.txt','a');
  // ファイルからデータを読み書きする関数を呼び出す　fputs
    fputs($f,$msg . "\n");
  // リソースを開放する　fclose
    fclose($f);
  }
  ?>
</head>

<body>
  <h1>Hello!</h1>
  <form method="post" action="/zerostudy_web_programming/hello.php">
    <input type="text" name="msg">
    <input type="submit">
</for>
<hr>
<table>
  <?php
  $data = @file('savedata.txt') or
    exit('<tr><td>ファイルの読み込みに失敗しました。</td></tr>');

  $num = 0;
  foreach($data as $line){
    $num++;
    echo "<tr><td>{$num}</td><td>{$line}</td></tr>";
  }
  ?>
</table>
</body>
</html>

 <!-- access http://localhost/zerostudy_web_programming/hello.php -->