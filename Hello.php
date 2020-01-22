<!-- Chaoter5 リスト5-2　制御構文について(for) -->
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
    $classification = "";
    $price = 12300;
    $tax = 0.08;
    $total = 10;

    for($i = 1; $i <= 100; $i++){
      echo $i;    
    }


  ?>
  </p>
  </body>
  </html>

  <!-- access http://localhost/zerostudy_web_programming/hello.php -->