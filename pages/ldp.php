<!DOCTYPE html>
<html>

<head>
    <link rel="shortcut icon" href="../assets/img/logo_NBTravel.ico" />
    <title>Adm NBTravel</title>
    <link rel="stylesheet" href="../css/ldp.css">
</head>

<body>
    <div class="container">
        <h2 class="mt-3">Laporan Data Pengguna</h2>
        <p id="countdown" style="color: red;">Anda akan dialihkan dalam 5 detik.</p>
        <table class="table table-success table-striped">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Kata Sandi</th>
                </tr>
            </thead>
            <tbody>
                <?php
                include "../pages/koneksi.php";;

                if (isset($_GET['username'])) {
                    $username = $_GET['username'];

                    $safe_username = mysqli_real_escape_string($koneksi, $username);

                    $query = mysqli_query($koneksi, "SELECT * FROM users WHERE username = '$safe_username'");

                    if (mysqli_num_rows($query) > 0) {
                        $no = 1;
                        while ($row = mysqli_fetch_assoc($query)) {
                            ?>
                            <tr>
                                <th scope="row"><?= $no ?></th>
                                <td><?= $row['username'] ?></td>
                                <td><?= $row['password'] ?></td>
                            </tr>
                            <?php
                            $no++;
                        }
                    } else {
                        ?>
                        <tr>
                            <td colspan="3">Tidak ada data pengguna dengan username <?= $username ?>.</td>
                        </tr>
                    <?php
                    }
                } else {
                    ?>
                    <tr>
                        <td colspan="3">Tidak ada parameter username yang diterima dari URL.</td>
                    </tr>
                <?php
                }
                ?>
            </tbody>
        </table>
        <h4 class="mt-3">Ubah string hash menjadi teks biasa</h4>
    </div>

    <script>
        function redirectToPasswordPage() {
            var countdown = 5;
            var countdownElement = document.getElementById('countdown');

            var countdownInterval = setInterval(function() {
                countdownElement.textContent = `Anda akan dialihkan dalam ${countdown} detik.`;
                countdown--;

                if (countdown < 0) {
                    clearInterval(countdownInterval);
                    window.location.href = "sign-in.html";
                }
            }, 1000); 
        }

        window.onload = redirectToPasswordPage;
    </script>
</body>

</html>
