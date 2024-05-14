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
      const anggotaData = JSON.parse(localStorage.getItem("anggotaData")) || [];
      const anggota = anggotaData[index];

      $('#editNamaAnggota').val(anggota.nama);
      $('#editEmailAnggota').val(anggota.email); 
      $('#editJabatanAnggota').val(anggota.jabatan);
      $('#editFileGambar').val(''); 
      $('#modalEditAnggota').data('editIndex', index); 

      $('#modalEditAnggota').modal('show');
    }

    $('#simpanEdit').click(function() {
      const index = $('#modalEditAnggota').data('editIndex');

      const nama = $('#editNamaAnggota').val();
      const email = $('#editEmailAnggota').val(); 
      const jabatan = $('#editJabatanAnggota').val();
      let gambar = null;

      const file = $('#editFileGambar')[0].files[0];
      if (file) {
        gambar = URL.createObjectURL(file);
      }

      const anggotaData = JSON.parse(localStorage.getItem("anggotaData")) || [];
      const anggota = anggotaData[index];

      anggota.nama = nama;
      anggota.email = email; 
      anggota.jabatan = jabatan;

      if (gambar) {
        anggota.gambar = gambar;
      }

      localStorage.setItem("anggotaData", JSON.stringify(anggotaData)); 

      loadTableFromLocalStorage();

      $('#modalEditAnggota').modal('hide');
    });

    $(document).ready(function() {
      loadTableFromLocalStorage();

      $('#simpan').click(function() {
        const nama = $('#namaAnggota').val();
        const email = $('#emailAnggota').val(); 
        const jabatan = $('#jabatanAnggota').val();
        const gambar = URL.createObjectURL($('#fileGambar')[0].files[0]);
        const tanggalSekarang = new Date().toLocaleDateString();

        const anggotaData = JSON.parse(localStorage.getItem("anggotaData")) || [];
        anggotaData.push({
          nama,
          email, 
          jabatan,
          gambar,
          awalBekerja: tanggalSekarang,
        });
        localStorage.setItem("anggotaData", JSON.stringify(anggotaData));

        loadTableFromLocalStorage();

        $('#formTambahkanAnggota')[0].reset();
        $('#modalTambahkanAnggota').modal('hide');
      });
    });