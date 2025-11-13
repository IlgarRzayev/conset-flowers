<?php
header("Access-Control-Allow-Origin: *");



$host = "localhost";
$dbname = "conset_flowers";
$user = "root";
$pass = "";

try {
  $pdo = new PDO("mysql:host=$host;port=3307;dbname=$dbname;charset=utf8", $user, $pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  die("Bağlantı hatası: " . $e->getMessage());
}


?>

