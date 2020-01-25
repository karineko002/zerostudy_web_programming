<!-- Chaoter5 リスト5-17　一行ごとに取り出す -->
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
</head>

<body>
  <h1>Hello!</h1>
  <table>
  <?php 
  $data = @file('sample.txt') or
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