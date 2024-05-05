function validasi() {
    var username = document.forms["formsaya"]["username"].value.toLowerCase();
    var password = document.forms["formsaya"]["password"].value.toLowerCase();
  
    // Misalnya, cek apakah kedua field tidak kosong
    if (username === "") {
        alert("Nama dibutuhkan!");
        return false;
    } else if (password === "") {
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
  
    // Ambil data pengguna yang disimpan di localStorage (jika ada)
    var usersData = localStorage.getItem('users');
    var users = usersData ? JSON.parse(usersData) : [];
  
    // Tambahkan pengguna baru ke dalam array
    users.push({ username: username, password: password });
  
    // Simpan kembali data pengguna ke localStorage
    localStorage.setItem('users', JSON.stringify(users));
  
    // Redirect ke halaman sign-in.html setelah proses sign-up berhasil
    alert("Pendaftaran berhasil! Selamat datang, " + username + "!");
    window.location.href = 'sign-in.html';
  
    return false; // Mencegah formulir untuk mengirimkan permintaan secara langsung
}