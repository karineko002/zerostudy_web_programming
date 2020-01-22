<!-- Chaoter5 リスト5-4　関数を利用しよう -->
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
    // テーブル
    echo'<table>';
    // hanakoのデータ
    $data = getData('hanako');
    printData($data);
    // taroのデータ
    $data = getData('taro');
    printData($data);
    echo'</table>';

    function getData($name){
      $data = [
      // 'Key' => ['{$arr[0]}','{$arr[1]}']
        'taro' => ['taro@yamada','090-999-999'],
        'hanako' => ['hanako@flower','080-888-888'],
        'sachiko' => ['sachiko@happy','070-777-777'],
        'tuyano' => ['syoda@tuyano','060-666-666']
      ];
      return $data[$name];
    }

    function printData($arr){
      echo "<tr><td>{$arr[0]}</td><td>{$arr[1]}</td></tr>";
    }

  ?>
  </p>
  </body>
  </html>

  <!-- access http://localhost/zerostudy_web_programming/hello.php -->