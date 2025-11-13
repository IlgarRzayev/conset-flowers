<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

include 'db.php'; 

$name = trim($_POST["name"] ?? '');
$email = trim($_POST["email"] ?? '');
$message = trim($_POST["message"] ?? '');


if ($name === '' || $email === '' || $message === '') {
    echo "Lütfen tüm alanları doldurun.";
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Geçerli bir e-posta adresi giriniz.";
    exit;
}

if (strlen($message) > 500) {
    echo "Mesaj 500 karakteri geçmemelidir.";
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO contact (name, email, message) VALUES (:name, :email, :message)");
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':message' => $message
    ]);



    echo "Mesaj başarıyla gönderildi!";
} catch (PDOException $e) {
    echo "Veritabanına kaydedilirken hata oluştu.";
}
?>
