window.onload = function () {
  // Ambil data yang disimpan dari localStorage
  const storedName = localStorage.getItem("name");
  const storedEmail = localStorage.getItem("email");
  const storedPosition = localStorage.getItem("position");
  const storedPhoto = localStorage.getItem("foto"); // Gambar dalam Base64

  // Tampilkan data pada elemen HTML yang sesuai
  if (storedName) {
    document.getElementById("name").textContent = storedName;
  }
  if (storedEmail) {
    document.getElementById("email").textContent = storedEmail;
  }
  if (storedPosition) {
    document.getElementById("jabatanAnggota").textContent = storedPosition;
  }
  if (storedPhoto) {
    const imgElement = document.getElementById("gambarPratinjau");
    imgElement.src = storedPhoto;
    imgElement.style.display = "block"; // Tampilkan gambar jika ada
  }
};
