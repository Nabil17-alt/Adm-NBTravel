<?php
session_start();
include "../pages/koneksi.php";

if (isset($_POST['submit'])) {
    $username = $_POST['username'];

    if (!$username) {
        echo "<script>alert('Nama dibutuhkan!'); document.location.href='password.html'; </script>";
        exit;
    }

    $safe_username = mysqli_real_escape_string($koneksi, $username);

    $query = mysqli_query($koneksi, "SELECT * FROM users WHERE username = '$safe_username'");
    $cek = mysqli_num_rows($query);

    if ($cek > 0) {
        $_SESSION['username'] = $username; 
        echo "<script>alert('Akun ditemukan'); document.location.href='ldp.php?username=" . $username . "';</script>";
    } else {
        echo "<script>alert('Akun tidak ada'); document.location.href='password.html'</script>";
    }
}
?>
