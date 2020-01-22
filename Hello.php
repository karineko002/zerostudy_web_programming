<!-- Chaoter5 リスト5-2　配列と連想配列 -->
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
    $data = [98,79,56,83,69];
    $total = 0;
    for($i = 0;$i < count($data); $i++){
      $total += $data[$i];
    }
    echo "データの合計は、 {$total} です。";

  ?>
  </p>
  </body>
  </html>

  <!-- access http://localhost/zerostudy_web_programming/hello.php -->