// Fungsi untuk menyimpan data ke dalam localStorage
        function simpanData() {
            // Mengambil nilai input dari formulir
            var nama = document.getElementById('nama').value;
            var email = document.getElementById('email').value;
            var telepon = document.getElementById('telepon').value;

            // Membuat objek data
            var data = {
                nama: nama,
                email: email,
                telepon: telepon
            };

            // Mengkonversi objek data ke dalam bentuk JSON
            var dataJSON = JSON.stringify(data);

            // Menyimpan data ke dalam localStorage dengan kunci "data_pengguna"
            localStorage.setItem('data_pengguna', dataJSON);

            // Mengupdate tampilan data yang disimpan
            tampilkanData();
        }

        // Fungsi untuk menampilkan data yang disimpan di localStorage
        function tampilkanData() {
            // Mengambil data dari localStorage dengan kunci "data_pengguna"
            var dataJSON = localStorage.getItem('data_pengguna');

            // Memeriksa apakah data ada di localStorage
            if (dataJSON) {
                // Mengkonversi data JSON kembali menjadi objek
                var data = JSON.parse(dataJSON);

                // Menampilkan data dalam div dengan id "dataDisimpan"
                var dataDisimpanDiv = document.getElementById('dataDisimpan');
                dataDisimpanDiv.innerHTML = `
                    <p>Nama: ${data.nama}</p>
                    <p>Email: ${data.email}</p>
                    <p>Telepon: ${data.telepon}</p>
                `;
            }
        }

        // Memanggil fungsi tampilkanData() saat halaman dimuat
        tampilkanData();