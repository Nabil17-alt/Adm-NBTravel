// Fungsi untuk memuat data dari LocalStorage ke tabel
    function loadTableFromLocalStorage() {
      const anggotaData = JSON.parse(localStorage.getItem("anggotaData")) || [];
      const tbody = $("#tabelAnggota tbody");
      tbody.empty(); // Bersihkan tabel

      anggotaData.forEach((anggota, index) => {
        tbody.append(`
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img src="${anggota.gambar}" class="avatar avatar-sm rounded-circle me-2" alt="avatar" />
                <div class="d-flex flex-column">
                  <h6 class="mb-0 text-sm">${anggota.nama}</h6>
                  <p class="text-sm text-secondary mb-0">${anggota.email}</p>
                </div>
              </div>
            </td>
            <td>${anggota.jabatan}</td>
            <td class="text-center">Aktif </td>
            <td class="text-center">${anggota.awalBekerja}</td>
            <td class="text-center">
              <button class="btn btn-warning btn-sm" onclick="editAnggota(${index})">Edit</button>
            </td>
          </tr>
        `);
      });
    }

    function editAnggota(index) {
      // Muat data anggota yang ingin diedit
      const anggotaData = JSON.parse(localStorage.getItem("anggotaData")) || [];
      const anggota = anggotaData[index];

      // Isi formulir di modal dengan data yang ingin diedit
      $('#editNamaAnggota').val(anggota.nama);
      $('#editEmailAnggota').val(anggota.email); // Mengisi email
      $('#editJabatanAnggota').val(anggota.jabatan);
      $('#editFileGambar').val(''); // Reset input gambar
      $('#modalEditAnggota').data('editIndex', index); // Simpan indeks untuk referensi

      // Buka modal edit
      $('#modalEditAnggota').modal('show');
    }

    $('#simpanEdit').click(function() {
      // Dapatkan indeks yang diedit
      const index = $('#modalEditAnggota').data('editIndex');

      // Dapatkan data dari formulir
      const nama = $('#editNamaAnggota').val();
      const email = $('#editEmailAnggota').val(); // Mendapatkan email
      const jabatan = $('#editJabatanAnggota').val();
      let gambar = null;

      // Periksa apakah gambar baru diunggah
      const file = $('#editFileGambar')[0].files[0];
      if (file) {
        gambar = URL.createObjectURL(file);
      }

      // Perbarui data anggota
      const anggotaData = JSON.parse(localStorage.getItem("anggotaData")) || [];
      const anggota = anggotaData[index];

      anggota.nama = nama;
      anggota.email = email; // Perbarui email
      anggota.jabatan = jabatan;

      if (gambar) {
        anggota.gambar = gambar;
      }

      localStorage.setItem("anggotaData", JSON.stringify(anggotaData)); // Simpan perubahan

      // Perbarui tabel
      loadTableFromLocalStorage();

      // Tutup modal
      $('#modalEditAnggota').modal('hide');
    });

    $(document).ready(function() {
      // Muat data dari LocalStorage saat halaman dimuat
      loadTableFromLocalStorage();

      // Tombol simpan pada modal Tambahkan Anggota
      $('#simpan').click(function() {
        // Dapatkan data dari formulir
        const nama = $('#namaAnggota').val();
        const email = $('#emailAnggota').val(); // Tambahkan email
        const jabatan = $('#jabatanAnggota').val();
        const gambar = URL.createObjectURL($('#fileGambar')[0].files[0]);
        const tanggalSekarang = new Date().toLocaleDateString();

        // Simpan data ke LocalStorage
        const anggotaData = JSON.parse(localStorage.getItem("anggotaData")) || [];
        anggotaData.push({
          nama,
          email, // Simpan email
          jabatan,
          gambar,
          awalBekerja: tanggalSekarang,
        });
        localStorage.setItem("anggotaData", JSON.stringify(anggotaData));

        // Perbarui tabel
        loadTableFromLocalStorage();

        // Bersihkan formulir setelah disimpan
        $('#formTambahkanAnggota')[0].reset();

        // Tutup modal
        $('#modalTambahkanAnggota').modal('hide');
      });
    });