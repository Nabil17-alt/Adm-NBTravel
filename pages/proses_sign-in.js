function validasi() {
    // Mengambil nilai username dari formulir
    var username = document.getElementById("username").value.toLowerCase();
    
    // Mengambil nilai password dari formulir
    var password = document.getElementById("password").value.toLowerCase();

    // Periksa apakah kedua field tidak kosong
    if (username === "") {
        alert("Username is required!");
        return false;
    } else if (password === "") {
        alert("Password is required!");
        return false;
    }

    // Validasi panjang username (minimal 5 karakter)
    if (username.length < 5) {
        alert("Username must be at least 5 characters long!");
        return false;
    }

    // Validasi panjang password (minimal 8 karakter)
    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return false;
    }

    // Log pesan untuk memeriksa nilai username dan password yang dimasukkan oleh pengguna
    console.log("Username entered:", username);
    console.log("Password entered:", password);

    // Mendapatkan data pengguna dari localStorage
    var usersData = localStorage.getItem('users');

    // Periksa apakah data pengguna ada di localStorage
    if (usersData) {
        try {
            // Parse data pengguna menjadi array objek
            var users = JSON.parse(usersData);

            // Log pesan untuk memeriksa data pengguna yang ada di localStorage
            console.log("Users data from localStorage:", users);

            // Cari pengguna dengan username yang cocok
            var foundUser = users.find(function(user) {
                // Memeriksa username dan password secara sensitif terhadap huruf
                return user.username === username && user.password === password;
            });

            // Jika pengguna ditemukan, tampilkan pesan berhasil dan redirect ke halaman dashboard
            if (foundUser) {
                alert('Signed in successfully! Welcome, ' + username + '!');
                window.location.href = 'dashboard.html';
                return true; // Return true karena validasi berhasil
            } else {
                alert('Incorrect username or password');
                return false; // Return false karena validasi gagal
            }
        } catch (error) {
            // Tangani error parsing data localStorage
            console.error("Error parsing user data:", error);
            alert('An error occurred. Please try again later.');
            return false; // Return false karena validasi gagal
        }
    } else {
        // Jika tidak ada data pengguna di localStorage, tampilkan pesan kesalahan
        alert('No user data found');
        return false; // Return false karena validasi gagal
    }
}
