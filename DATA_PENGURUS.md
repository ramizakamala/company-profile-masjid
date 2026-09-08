# Checklist Data Resmi — Website Masjid Al-Manshur

File ini daftar data yang masih **dummy/placeholder** dan perlu diganti dengan data
resmi dari pengurus masjid sebelum website di-deploy publik.

> Status: alamat, nama masjid, dan tahun berdiri (2025) sudah **asli**.
> Semua poin di bawah masih **menunggu data pengurus**.

---

## 1. Profil & Organisasi
- [ ] Nama resmi masjid/yayasan (mis. "Masjid Al-Manshur" / "Yayasan ...")
- [ ] Visi & misi resmi (kalau ada)
- [ ] Struktur pengurus: nama asli + jabatan + foto (4 orang cukup untuk awal)
- [ ] Tahun/peristiwa sejarah yang benar (timeline sekarang dummy 2023–2026)
- [ ] Nomor WhatsApp resmi & email resmi (sekarang masih placeholder)

## 2. Program (halaman Program & beranda)
- [ ] Daftar program yang benar-benar berjalan: nama, kategori (Pendidikan /
      Peribadatan / Remaja / Sosial), deskripsi singkat, jadwal, tempat
- [ ] Contoh yang umum: TPA/tahfidz, kajian rutin, santunan anak yatim,
      lumbung pangan, dll — sesuaikan dengan kondisi nyata

## 3. Kegiatan / Agenda (halaman Kegiatan)
- [ ] Agenda terdekat: nama kegiatan, tanggal, jam, tempat, pemateri (kalau ada)
- [ ] Rencana agenda rutin (mingguan/bulanan/tahunan) supaya halaman tidak kosong

## 4. Statistik (beranda — sekarang angka karangan)
- [ ] Jumlah jamaah aktif
- [ ] Jumlah santri TPA/tahfidz
- [ ] Jumlah program berjalan
- [ ] Total dana zakat/infak/sedekah tersalurkan (dari laporan keuangan)

## 5. Donasi (halaman Donasi — PENTING)
- [ ] **Nomor rekening resmi** + nama bank + nama pemilik rekening
- [ ] **Foto QRIS asli** (hasil cetak dari penyedia QRIS, bukan screenshot editan)
      → taruh di `public/images/qris.png`, lalu isi di `src/data/mockData.js`
      bagian `donationInfo`

> Catatan keamanan: jangan pernah pasang nomor rekening/QRIS karangan.
> Selama kosong, website otomatis menampilkan "menyusul" + arahkan ke WhatsApp.

## 6. Foto & Galeri
- [ ] Foto asli masjid (eksterior/interior) — sekarang `public/images/` baru 3 foto
- [ ] Foto kegiatan: TPA, kajian, santunan, buka bersama
- [ ] Foto pengurus (untuk struktur organisasi)

## 7. Testimoni (beranda)
- [ ] Kesaksian asli jamaah/donatur (boleh 3–5) — nama + peran

## 8. Artikel (halaman Artikel)
- [ ] Tulisan/kabar nyata dari masjid (kegiatan, laporan, pengumuman)
      — atau halaman ini bisa disembunyikan dulu sampai ada konten

---

## Cara mengisi (untuk developer)
Semua data dummy terpusat di **satu file**: `src/data/mockData.js`
(setiap bagian sudah diberi tanda `[DUMMY]` / `[ASLI]`).

Setelah data masuk, cek yang ikut terpakai di:
- `Footer.jsx`, `Contact.jsx`, `LocationSection.jsx` — kontak & alamat (alamat sudah asli)
- `FloatingWhatsApp.jsx` — nomor WA melayang
- `public/images/` — foto dokumentasi
