<?php
session_start();
include "../pages/koneksi.php";

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (!$username) {
        echo "<script>alert('Nama dibutuhkan!'); document.location.href='sign-in.html'; </script>";
        exit;
    } 
    if (!$password) {
        echo "<script>alert('Kata sandi dibutuhkan!'); document.location.href='sign-in.html'; </script>";
        exit;
    }

    if(strlen($username) < 5) {
        echo "<script>alert('Nama pengguna harus terdiri dari minimal 5 karakter!'); document.location.href='sign-in.html'; </script>";
        exit;
    }

    if(strlen($password) < 8) {
        echo "<script>alert('Kata sandi harus terdiri dari minimal 8 karakter!'); document.location.href='sign-in.html'; </script>";
        exit;
    }

    $sql = mysqli_query($koneksi, "SELECT * FROM users WHERE username='$username'");
    $cek = mysqli_num_rows($sql);

    if ($cek > 0) {
        $r = mysqli_fetch_array($sql);
        $stored_hashed_password = $r['password'];

        if (password_verify($password, $stored_hashed_password)) {
            $_SESSION['nama'] = $r['username'];
            $_SESSION['submit'] = true;
            echo "<script>alert('Masuk berhasil!');document.location.href='dashboard.php';</script>";
        } else {
            echo "<script>alert('Kata sandi salah'); document.location.href='sign-in.html'; </script>";
        }
    } else {
        echo "<script>alert('Username tidak ditemukan'); document.location.href='sign-in.html'; </script>";
    }
}
?>
