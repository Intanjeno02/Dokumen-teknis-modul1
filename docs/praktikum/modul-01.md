# Dokumen Teknis Modul 1 — Lingkungan Pengembangan, Git, dan Lalu Lintas HTTP



Nama/NIM   : Intan Rhevita Arselina Suryana/105224009
Repositori    : Dokumen-teknis-modul1

 
## 1. Lingkungan Pengembangan
Tabel versi sistem operasi, Node.js, npm, Git, dan Visual Studio Code.
No
Komponen
Versi
1.
Sistem Operasi
Windows 11
2.
Node.js
V26.7.0
3.
Npm
11.19.0
4.
Git
2.55.0.windows.3
5.
Visual Studio Code
1.139.0

Bukti terletak pada gambar1-1, gambar1-2 dan gambar1-3
 
## 2. Alur Kerja Git
- Keluaran git log --oneline –graph
- Tautan pull request yang telah digabungkan
- Konflik yang terjadi, cara penyelesaian, dan alasan pemilihan isi akhir
Bukti terletak apda gambar2

ini link pullnya
https://github.com/Intanjeno02/Dokumen-teknis-modul1/pull/1

Keluaran yang saya berikan screenshotnya menggunakan git log –graph –oneline bukan log --oneline –graph karena posisi graph dianggap sebagai path tidak dikenal sehingga mengeluarkan fatal pada terminal. kesalahan tersebut dapat dihindari dengan menggunakan sintaks git log --graph --oneline. sehingga untuk mendapatkan hasil akhir saya memilih menggunakan sintaks  git log --graph --oneline dan mendapatkan output.

## 3. Pengamatan Lalu Lintas HTTP
- Lembar kerja pengamatan (Tabel 9) beserta tangkapan layar DevTools
- Keluaran curl -I dan curl -v
- Analisis: perbedaan status dan ukuran antara pemuatan dengan dan tanpa cache,  alasan metode curl -I adalah HEAD, dan alasan http://github.com dialihkan
untuk tabel bnomer 3 ada di gambar3.
Saat data halaman tanpa cache dimuat, browser harus minta resource dari server dan mendapatkan isi resource tersebut. Makanya server memberikan status 200 OK , karena resource berhasil di temukan dan dikirimkan. Data yang ditransfer juga lebih besar karena isi halaman atau resource ikut dikirim dari server ke browser. 
Untuk pemuatan dengan cache, browser itu udha punya salinan resource dari yang pernah diterima sebelumnya. Di tabel, terlihat bahwa status 304 Not Modified pada developer.mozilla.org yang berarti server tidak mengalami perubahan atau belum di modifikasi dan datanya tidak perlu dikirim ulang dalam ukuran penuh. Header HTTP tetap dikirim untuk melakukan validasi cache. Jadi yang berkurang terutama adalah pengiriman body/isi resource, bukan seluruh komunikasi HTTP. 

Curl -I adalah head karena opsi -I pada curl digunakan untuk meminta informasi header HTTP saja tanpa mengambil isi (body) dari halaman.

Untuk GitHub dialihkan dari HTTP ke HTTPS karena server mengarahkan akses yang tidak terenkripsi menuju koneksi HTTPS yang menggunakan enkripsi TLS.

## 4. Kendala dan Penyelesaian
Untuk saat ini saya belum memiliki kendala
 
## 5. Catatan Pemanfaatan AI Alat, perintah utama, bagian yang digunakan, dan cara memverifikasinya. Tulis "Tidak menggunakan AI" apabila tidak menggunakan AI.
Bukti ada di gamabr5-1, gamabr5-2 dan gambar5-3
3 screenshotan ini merupakan perintah utama yang saya gunakan untuk membantu saya dalam mengerjakan tugas ini. Cara saya memverifikasinya dengan cara bertanya terlebih dahulu lalu saya lakukan perintah yang dia berikan, kemudian saya cocokan apakah hasilnya sama, kalau hasilnya berbeda maka akan saya tanya lagi kenapa hasilnya berbeda dan dibagian mana yang salah, kalau benar dan saya mengerti maka saya tidak akan bertanya tentang hal yang sama. 

selesai
