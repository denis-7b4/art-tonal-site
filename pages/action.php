<!DOCTYPE html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>Заказ оформлен</title></head>
<body>
<?php
echo 'Здравствуйте, ', htmlspecialchars($_POST['name']), '.<br/><br/>';
echo '<b>Ваш заказ</b><br/>';
echo 'Будем красить: ', $_POST['what_paint_btn'], '.<br/>';
echo 'Способ связи: ', $_POST['email_phone'], ': ', $_POST['email_phone_field'], '<br/>';
echo 'Комментарий к заказу: ', $_POST['comment'], '<br/><br/>';
echo 'Мы с вами свяжемся в самое ближайшее время.<br/><br/>';
echo '<a href="/pages/service.html"><b><<< НАЗАД</b></a>';
?>
</body>
</html>

