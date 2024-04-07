function signIn(username, password) {
    // Validasi username dan password menggunakan fungsi validasi yang sudah didefinisikan
    if (!validasi(username, password)) {
        // Jika validasi gagal, hentikan proses sign-in
        return;
    }

    // Mendapatkan data pengguna dari localStorage
    var usersData = localStorage.getItem('users');

    if (usersData) {
        try {
            var users = JSON.parse(usersData);

            // Cari pengguna dengan username yang cocok
            var foundUser = users.find(function(user) {
                // Memeriksa username dan password secara sensitif terhadap huruf
                return user.username.toLowerCase() === username.trim().toLowerCase() && user.password === password.trim();
            });

            if (foundUser) {
                alert('Signed in successfully! Welcome, ' + foundUser.username + '!');
                console.log('Redirecting to dashboard.html...');
                window.location.href = 'dashboard.html';
            } else {
                alert('Incorrect username or password');
            }
        } catch (error) {
            console.error("Error parsing user data:", error);
            alert('An error occurred. Please try again later.');
        }
    } else {
        alert('No user data found');
    }
}

// Contoh penggunaan fungsi signIn
// signIn("username_input", "password_input");
// Ganti "username_input" dan "password_input" dengan nilai yang sesuai dari input pengguna.
