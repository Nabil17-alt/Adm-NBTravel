function validasi() {
  var username = document.forms["formsaya"]["username"].value.toLowerCase();
  var password = document.forms["formsaya"]["password"].value.toLowerCase();

  // Misalnya, cek apakah kedua field tidak kosong
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

  // Ambil data pengguna yang disimpan di localStorage (jika ada)
  var usersData = localStorage.getItem('users');
  var users = usersData ? JSON.parse(usersData) : [];

  // Tambahkan pengguna baru ke dalam array
  users.push({ username: username, password: password });

  // Simpan kembali data pengguna ke localStorage
  localStorage.setItem('users', JSON.stringify(users));

  // Redirect ke halaman sign-in.html setelah proses sign-up berhasil
  alert('Signed up successfully! Welcome, ' + username + '!');
  window.location.href = 'sign-in.html';

  return false; // Mencegah formulir untuk mengirimkan permintaan secara langsung
}
