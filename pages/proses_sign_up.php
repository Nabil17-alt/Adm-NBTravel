<?php
session_start();
include "../pages/koneksi.php";

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if(empty($username)) {
        echo "<script>alert('Nama dibutuhkan!'); document.location.href='sign-up.html'; </script>";
        exit;
    } else if (empty($password)) {
        echo "<script>alert('Kata sandi dibutuhkan!'); document.location.href='sign-up.html'; </script>";
        exit;
    }

    if(strlen($username) < 5) {
        echo "<script>alert('Nama pengguna harus terdiri dari minimal 5 karakter!'); document.location.href='sign-up.html'; </script>";
        exit;
    }

    if(strlen($password) < 8) {
        echo "<script>alert('Kata sandi harus terdiri dari minimal 8 karakter!'); document.location.href='sign-up.html'; </script>";
        exit;
    }

    $sql_check = mysqli_query($koneksi, "SELECT * FROM users WHERE username='$username'");
    if (mysqli_num_rows($sql_check) > 0) {
        echo "<script>alert('Username sudah ada'); document.location.href='sign-up.html'; </script>";
        exit();
    }

    registerUser($koneksi, $username, $password);
}

function registerUser($koneksi, $username, $password) {
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')";
    if (mysqli_query($koneksi, $sql)) {
        echo "<script>alert('Pendaftaran berhasil!'); document.location.href='sign-in.html'; </script>";
    } else {
        echo "<script>alert('Kesalahan: Tidak dapat mendaftarkan pengguna'); document.location.href='sign-up.html'; </script>";
    }
}
?>
