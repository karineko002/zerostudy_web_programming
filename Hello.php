<!-- Chaoter5 リスト5-8　フォームの送信 -->
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

<?php
$msg = '';
$result = 'お名前は？';
if(isset($_POST['msg'])){
  $msg = $_POST['msg'];
  $result = "こんにちは、 {$msg}さん！";
}
?>
<body>
  <h1>Hello!</h1>
  <p><?php echo htmlspecialchars($result); ?></p>
  <form method="post" action="/zerostudy_web_programming/hello.php">
    <input type="text" name="msg" value="<?php echo $msg; ?>">
    <input type="submit" value="送信">
  </form>
  </body>
  </html>

  <!-- access http://localhost/zerostudy_web_programming/hello.php -->
  <!-- クエリパラメータ用access http://localhost/zerostudy_web_programming/hello.php?key=taro -->