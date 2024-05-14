<?php
session_start();
include "koneksi.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];

    // Update status pesan ke 'diterima' atau lakukan tindakan yang sesuai
    $sql = "UPDATE pesan SET status='diterima' WHERE id='$id'";

    if ($koneksi->query($sql) === TRUE) {
        echo "Pesan diterima.";
    } else {
        echo "Error: " . $sql . "<br>" . $koneksi->error;
    }

    $koneksi->close();
}
?>
