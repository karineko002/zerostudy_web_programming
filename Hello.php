<!-- Chaoter5 リスト5-4　連想配列について -->
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
    $data = [
      '国語'=> 98,
      '数学'=> 79,
      '英語'=> 56,
      '理科'=> 83,
      '社会'=> 69];
    $total = 0;
    foreach($data as $key => $item){
      echo "{$key}は、{$item}点です。<br>";
      $total += $item;
    }
    echo "<br>合計は、 {$total} です。";

  ?>
  </p>
  </body>
  </html>

  <!-- access http://localhost/zerostudy_web_programming/hello.php -->