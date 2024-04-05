<?php
session_start();
include "koneksi.php";
if (isset($_POST['login'])) {
  ///$pass = md5($_POST['password']);
  ///echo "kiriman password= $_POST[password]<br>";
  ///echo "isi md5 password= $pass";
  

  $sql = mysqli_query($koneksi, "select * from login where username='$_POST[username]' AND password='$_POST[password]'");
  $cek = mysqli_num_rows($sql);
  if ($cek > 0) {
    $r = mysqli_fetch_array($sql);

    $_SESSION['username'] = $r['username'];
    $_SESSION['password'] = $r['password'];
    $_SESSION['sign-in'] = true;
    echo "<script>alert('Username dan password Benar');document.location.href='dashboard.php';</script>";
  } else {

    echo "
  <script>
 alert('Username dan password salah');
 document.location.href='sign-in.php'; 
 </script>
  
  ";
  }
}
