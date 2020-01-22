<!-- Chaoter5 リスト5-2　制御構文について(IF) -->
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
  <h1>軽減税率対応</h1>
  <p>
  <?php 
    $classification = "food";
    $price = 12300;
    $tax = 0.08;

    if($classification == "food"){
      $total = $price * (1.0 + $tax);
      echo "食品です";
      echo "$price 円の税込み価格は、$total 円です。"; 
    }else{
      $tax = 0.1;
      $total = $price * (1.0 + $tax);
      echo "食品以外です";
      echo "$price 円の税込み価格は、$total 円です。";
    }

  ?>
  </p>
  </body>
  </html>

  <!-- access http://localhost/zerostudy_web_programming/hello.php -->