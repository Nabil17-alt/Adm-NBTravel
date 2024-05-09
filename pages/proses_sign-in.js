function validasi() {
    // Mengambil nilai username dari formulir
    var username = document.getElementById("username").value.trim().toLowerCase();
    
    // Mengambil nilai password dari formulir
    var password = document.getElementById("password").value.trim();

    // Periksa apakah kedua field tidak kosong
    if (!username) {
        alert("Nama dibutuhkan!");
        return false;
    } 
    if (!password) {
        alert("Kata sandi dibutuhkan!");
        return false;
    }

    // Validasi panjang username (minimal 5 karakter)
    if (username.length < 5) {
        alert("Nama pengguna harus terdiri dari minimal 5 karakter!");
        return false;
    }

    // Validasi panjang password (minimal 8 karakter)
    if (password.length < 8) {
        alert("Kata sandi harus terdiri dari minimal 8 karakter!");
        return false;
    }

    // Mendapatkan data pengguna dari localStorage
    var usersData = localStorage.getItem('users');

    // Periksa apakah data pengguna ada di localStorage
    if (usersData) {
        try {
            // Parse data pengguna menjadi array objek
            var users = JSON.parse(usersData);

            // Cari pengguna dengan username yang cocok
            var foundUser = users.find(function(user) {
                // Memeriksa username dan password secara sensitif terhadap huruf
                return user.username.toLowerCase() === username && user.password === password;
            });

            // Jika pengguna ditemukan, tampilkan pesan berhasil dan redirect ke halaman dashboard
            if (foundUser) {
                localStorage.setItem("currentUsername", username);
                alert("Berhasil masuk! Selamat datang, " + username + "!");
                return true; // Return true karena validasi berhasil
            } else {
                alert("Nama atau kata sandi salah");
                return false; // Return false karena validasi gagal
            }
        } catch (error) {
            // Tangani error parsing data localStorage
            alert("Terjadi kesalahan. Silakan coba lagi nanti.");
            return false; // Return false karena validasi gagal
        }
    } else {
        // Jika tidak ada data pengguna di localStorage, tampilkan pesan kesalahan
        alert("Tidak ada data pengguna yang ditemukan");
        return false; // Return false karena validasi gagal
    }
}
