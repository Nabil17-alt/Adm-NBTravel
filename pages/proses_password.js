function validasi() {
  var username = document.getElementById("username").value.trim().toLowerCase();

  if (!username) {
    alert("Username is required!");
    return false;
  }

  var usersData = localStorage.getItem("users");

  if (usersData) {
    try {
      // Parse data pengguna menjadi array objek
      var users = JSON.parse(usersData);

      // Log pesan untuk memeriksa data pengguna yang ada di localStorage
      console.log("Users data from localStorage:", users);

      // Cari pengguna dengan username yang cocok
      var foundUser = users.find(function (user) {
        // Memeriksa username dan password secara sensitif terhadap huruf
        return (
          user.username.toLowerCase() === username 
        );
      });

      // Jika pengguna ditemukan, tampilkan pesan berhasil dan redirect ke halaman dashboard
      if (foundUser) {
        alert("Akun ditemukan");
        return true; // Return true karena validasi berhasil
      } else {
        alert("Akun tidak ada");
        return false; // Return false karena validasi gagal
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      return false; // Return false karena validasi gagal
    }
  } 
}
