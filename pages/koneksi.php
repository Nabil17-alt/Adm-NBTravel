<?php
$server = "localhost";
$username = "root";
$password = "";
$database = "adm_nbtravel";
$koneksi = mysqli_connect($server, $username, $password, $database);
mysqli_connect($server, $username, $password, $database);
if (mysqli_connect_errno()) {

  echo "<h1>Koneksi database gagal" . mysqli_connect_errno() . "</h1>";
}
