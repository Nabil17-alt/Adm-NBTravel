<?php
session_start();
include "koneksi.php";

// Mengambil data dari tabel pesan
$sql = "SELECT id, nama, email, route, pesan, waktu_dikirim FROM pesan";
$result = $koneksi->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../assets/img/logo_NBTravel.ico" />
    <title>Adm NBTravel</title>
    <link rel="stylesheet" href="../css/pesan_masuk.css">
</head>
<body>
    
    <div class="container">
        <h1>Pesan Masuk</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Rute</th>
                        <th>Pesan</th>
                        <th>Waktu Dikirim</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "<tr>";
                            echo "<td data-label='Nama'>" . $row["nama"] . "</td>";
                            echo "<td data-label='Email'>" . $row["email"] . "</td>";
                            echo "<td data-label='Rute'>" . $row["route"] . "</td>";
                            echo "<td data-label='Pesan'>" . $row["pesan"] . "</td>";
                            echo "<td data-label='Waktu Dikirim'>" . $row["waktu_dikirim"] . "</td>";
                            echo "<td data-label='Aksi'><button class='terimaBtn' data-nama='" . $row["nama"] . "'>Terima</button></td>";
                            echo "</tr>";
                        }
                    } else {
                        echo "<tr><td colspan='7'>Tidak ada pesan masuk</td></tr>";
                    }
                    ?>
                </tbody>
            </table>
        </div>
        <a href="../pages/dashboard.php" class="btn-back">Kembali ke Dashboard</a>
    </div>
    <script>
    document.querySelectorAll('.terimaBtn').forEach(button => {
        button.addEventListener('click', function() {
    var nama = this.getAttribute('data-nama');
    var currentButton = this;

    fetch('terima_pesan.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'nama=' + nama
    })
    .then(response => response.text())
    .then(data => {
        alert('Terima pesan dari ' + nama + '?');
        currentButton.textContent = 'Diterima'; // Mengubah teks tombol menjadi "Diterima"
        currentButton.disabled = true; // Menonaktifkan tombol setelah diklik
    })
    .catch(error => console.error('Error:', error));
});

    });
    </script>
</body>
</html>

<?php
// Menutup koneksi database
$koneksi->close();
?>
