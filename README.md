# Aspirana - Platform Aspirasi Masyarakat

## Deskripsi
Aspirana adalah platform web dan mobile yang menghubungkan masyarakat dengan pemerintah untuk menyampaikan aspirasi, keluhan, atau laporan permasalahan publik secara cepat dan transparan.

## Fitur Utama

### 1. Kirim Laporan Cepat
- Form pengaduan lengkap dengan foto, lokasi, dan kategori masalah
- Pilih kategori: Infrastruktur, Lingkungan, Pelayanan Publik, Transportasi, dll.
- Upload hingga 5 foto untuk dokumentasi
- Penentuan koordinat lokasi otomatis
- Tingkat prioritas masalah (Rendah, Sedang, Tinggi)

### 2. Pelacakan Status Laporan
- Monitor progres laporan secara real-time
- Status: Terkirim, Diverifikasi, Diproses, Selesai
- Notifikasi update status
- Detail timeline penanganan

### 3. Forum Aspirasi Publik
- Diskusi interaktif antar masyarakat
- Berikan dukungan pada laporan tertentu
- Topik populer dan trending
- Kategori diskusi yang terorganisir
- Sistem voting dan komentar

### 4. Peta Interaktif
- Visualisasi sebaran laporan
- Filter berdasarkan kategori dan status
- Legend warna untuk setiap status
- Statistik per wilayah
- Integrasi Google Maps

### 5. Dashboard Admin
- Kelola semua laporan dari satu tempat
- Verifikasi dan validasi laporan
- Update status penanganan
- Statistik lengkap dan grafik
- Ekspor data
- Quick actions untuk kelola cepat

## Struktur File

```
aspirana/
├── index.html          # Halaman beranda
├── report-form.html     # Form kirim laporan
├── report-list.html    # Daftar semua laporan
├── map.html            # Peta interaktif
├── forum.html          # Forum aspirasi publik
├── dashboard.html      # Dashboard admin
├── styles.css          # Styling modern
├── app.js              # JavaScript interaktif
└── README.md           # Dokumentasi
```

## Teknologi yang Digunakan

- **HTML5** - Struktur semantik modern
- **CSS3** - Styling modern dengan CSS Variables
- **JavaScript (Vanilla)** - Interaktivitas tanpa framework
- **Font Awesome** - Icons library
- **Google Maps** - Peta interaktif

## Cara Menggunakan

### 1. Buka Halaman Beranda
- Akses `index.html` di browser
- Lihat statistik dan laporan terkini
- Klik "Kirim Laporan" untuk membuat laporan baru

### 2. Kirim Laporan Baru
- Klik tombol "Kirim Laporan" di navigasi
- Isi semua field yang wajib diisi (marked with *)
- Upload foto masalah
- Tentukan lokasi (manual atau otomatis)
- Pilih kategori dan prioritas
- Klik "Kirim Laporan"

### 3. Lihat Semua Laporan
- Klik menu "Laporan" di navigasi
- Filter berdasarkan status dan kategori
- Cari laporan tertentu
- Urutkan berdasarkan kriteria
- Klik "Lihat Detail" untuk informasi lengkap

### 4. Pantau di Peta
- Klik menu "Peta" di navigasi
- Lihat distribusi laporan di wilayah tertentu
- Filter laporan berdasarkan kriteria
- Klik item laporan untuk detail

### 5. Bergabung di Forum
- Klik menu "Forum" di navigasi
- Baca topik-topik yang sedang trending
- Dukung laporan tertentu
- Berikan komentar
- Buat topik baru

### 6. Dashboard Admin
- Klik menu "Dashboard" di navigasi
- Lihat ringkasan statistik
- Kelola laporan masuk
- Verifikasi, proses, dan selesaikan laporan
- Ekspor data untuk analisis

## Status Laporan

- **Terkirim** 🟡 - Laporan baru sedang menunggu verifikasi
- **Diverifikasi** 🔵 - Laporan sudah divalidasi dan terbukti akurat
- **Diproses** 🟢 - Tim sedang menangani masalah
- **Selesai** 🔵 - Masalah sudah ditangani dan selesai

## Kategori Masalah

1. **🏗️ Infrastruktur** - Jalan, jembatan, bangunan, dll
2. **🌱 Lingkungan** - Sampah, polusi, penghijauan, dll
3. **💧 Pelayanan Publik** - Air, listrik, kesehatan, dll
4. **🚌 Transportasi** - Angkutan umum, halte, parkir, dll
5. **👮 Keamanan** - Patroli, kejahatan, dll
6. **🏥 Kesehatan** - Fasilitas kesehatan, sanitasi, dll
7. **📚 Pendidikan** - Sekolah, perpustakaan, dll
8. **🔧 Lainnya** - Masalah lainnya

## Design Features

### Modern UI/UX
- Clean dan minimalist design
- Responsive untuk semua perangkat
- Smooth animations dan transitions
- Intuitive navigation
- Color-coded status dan kategori

### User-Friendly
- Form yang mudah diisi
- Feedback visual yang jelas
- Helper text dan tooltips
- Error handling yang baik
- Loading states

### Visually Appealing
- Gradient backgrounds
- Icon-based categorization
- Card-based layout
- Professional color palette
- Consistent spacing

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Opera (Latest)

## Responsive Design

Website ini dirancang responsif untuk:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## Future Enhancements

- [ ] Integrasi API backend
- [ ] Sistem autentikasi pengguna
- [ ] Notifikasi real-time
- [ ] Upload file dengan drag & drop
- [ ] Pagination yang lebih baik
- [ ] Advanced filters
- [ ] Export PDF reports
- [ ] Multi-language support
- [ ] Dark mode
- [ ] PWA (Progressive Web App)

## Lisensi

Prototipe ini dibuat untuk keperluan demonstrasi dan pembelajaran.

## Kontak

Untuk pertanyaan atau dukungan:
- Email: info@aspirana.id
- Phone: +62 21 5555 1234
- Website: www.aspirana.id

---

**Aspirana** - Salurkan Aspirasi, Wujudkan Perubahan 🎯

