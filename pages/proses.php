<?php
include "koneksi.php";

$username = mysqli_real_escape_string($koneksi, $_POST['username']);
$password = mysqli_real_escape_string($koneksi, $_POST['password']);

$query = "INSERT INTO login (username, password) VALUES ('$username', '$password')";
$result = mysqli_query($koneksi, $query);

if ($result) {
    echo "<script>alert('Data Berhasil ditambahkan');document.location.href='sign-in.php';</script>";
} else {
    echo "<script>alert('Gagal menambahkan data');</script>";
}
?>
