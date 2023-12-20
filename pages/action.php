<!DOCTYPE html>
<html lang="ru">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>Заказ оформлен</title></head>
<body>
<?php
echo 'PHP version: ', phpversion(), '<br/><br/>';

$whatPaint = $_POST['what_paint_btn'];
echo 'Здравствуйте, ', htmlspecialchars($_POST['name']), '.<br/><br/>';
echo '<b>Ваш заказ</b><br/>';
echo 'Будем красить: ';
if ($whatPaint == 'walls') {
  echo 'стены';
} elseif ($whatPaint == 'furniture') {
  echo 'мебель';
} else {echo 'неизвестный объект';}
echo '.<br/>';
echo 'Способ связи: ', $_POST['email_phone'], ': ', $_POST['email_phone_field'], '<br/>';
echo 'Комментарий к заказу: ', $_POST['comment'], '<br/><br/>';
echo 'Мы с вами свяжемся в самое ближайшее время.<br/><br/>';
echo '<a href="/pages/service.html"><b><<< НАЗАД</b></a>';
?>
</body>
</html>
