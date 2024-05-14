<?php
session_start();
include "../pages/koneksi.php";

if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['education']) && isset($_POST['location'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $education = $_POST['education'];
    $location = $_POST['location'];

    $safe_username = mysqli_real_escape_string($koneksi, $username);
    $safe_email = mysqli_real_escape_string($koneksi, $email);
    $safe_phone = mysqli_real_escape_string($koneksi, $phone);
    $safe_education = mysqli_real_escape_string($koneksi, $education);
    $safe_location = mysqli_real_escape_string($koneksi, $location);

    $sql = "UPDATE profil SET email='$safe_email', phone='$safe_phone', education='$safe_education', location='$safe_location' WHERE username='$safe_username'";
    if (mysqli_query($koneksi, $sql)) {
        echo "<script>alert('Profil berhasil diperbarui'); document.location.href='profile.php';</script>";
    } else {
        echo "<script>alert('Terjadi kesalahan saat memperbarui profil'); document.location.href='profile.php';</script>";
    }
} else {
    echo "<script>alert('Semua bidang harus diisi'); document.location.href='profile.php';</script>";
}
?>
