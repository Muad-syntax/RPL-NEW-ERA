# &lt;/RnE&gt; — XII RPL 2 · RPL NEW ERA

> Website kenangan digital Kelas XII RPL 2 — Rekayasa Perangkat Lunak  
> SMK TI Muhammadiyah Cikampek · Angkatan 2026

---

## 🌐 Live Demo

🔗 [rpl-new-era.vercel.app](https://rpl-new-era.vercel.app)

---

## 📖 Tentang Proyek

**RPL NEW ERA** adalah platform kenangan digital yang dibangun untuk mengabadikan momen, menampilkan profil pengurus kelas, menghormati para pembimbing, dan merayakan perjalanan tiga tahun bersama di bangku SMK.

Website ini bukan sekadar halaman web biasa — ini adalah **identitas kelas XII RPL 2**.

---

## 🗂️ Halaman

| Rute | Nama | Deskripsi |
|------|------|-----------|
| `/` | Home | Hero "RPL NEW ERA" + Slideshow pengurus kelas |
| `/tentang` | Tentang | Profil kelas, statistik, motto, dan identitas |
| `/kenangan` | Kenangan | Galeri foto dengan filter kategori & lightbox |
| `/jejak-pembimbing` | Jejak Pembimbing | Profil wali kelas X, XI, XII + pesan apresiasi |
| `/jejak-pelajar` | Jejak Pelajar | Profil guru jurusan RPL + pesan apresiasi |

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | **Vue 3** (Composition API) |
| Router | **Vue Router 4** |
| Styling | **Vanilla CSS** + CSS Variables |
| Build Tool | **Vite** |
| Font | Google Fonts — Outfit, Plus Jakarta Sans, JetBrains Mono |
| Deployment | **Vercel** |

---

## 🚀 Menjalankan Proyek Secara Lokal

```sh
# 1. Clone repository
git clone https://github.com/Muad-syntax/RPL-NEW-ERA.git
cd RPL-NEW-ERA

# 2. Install dependencies
npm install

# 3. Jalankan dev server
npm run dev
```

Buka browser di `http://localhost:5173`

### Build untuk Production

```sh
npm run build
```

---

## 📁 Struktur Folder

```
rpl-app/
├── public/
│   └── logoRnE.png          ← Favicon website
├── src/
│   ├── assets/              ← CSS global & gambar
│   ├── components/
│   │   ├── layout/          ← NavBar, Footer
│   │   ├── home/            ← HeroSection, PengurusSlideshow
│   │   ├── kenangan/        ← FotoGrid, FilterTab, Lightbox
│   │   ├── profil/          ← ProfilCard, PesanPenutup
│   │   └── ui/              ← BadgePill, SkeletonCard, dll.
│   ├── views/               ← Halaman utama (Home, Tentang, dll.)
│   ├── data/                ← File JSON konten (pengurus, kenangan, dll.)
│   └── router/              ← Konfigurasi Vue Router
└── index.html
```

---

## 📝 Cara Update Konten

Semua konten dikelola lewat file JSON — **tidak perlu menyentuh kode Vue**.

### Menambah Foto Kenangan

Buka `src/data/kenangan.json` dan tambahkan objek baru:

```json
{
  "id": 999,
  "src": "/assets/images/kenangan/foto-baru.jpg",
  "caption": "Nama Kegiatan - Deskripsi Singkat",
  "kategori": "Kegiatan Kelas",
  "tanggal": "2026-09-01"
}
```

### Mengubah Data Pengurus

Edit `src/data/pengurus.json` dan sesuaikan nama, jabatan, atau path foto.

### Mengubah Data Wali Kelas / Guru

- Wali kelas → `src/data/pembimbing.json`
- Guru jurusan → `src/data/pelajar.json`

---

## 📐 Panduan Foto

| Jenis | Rasio | Format | Maks |
|-------|-------|--------|------|
| Pengurus kelas | 3:4 portrait | JPG/WebP | 500KB |
| Wali kelas / Guru | 1:1 atau 3:4 | JPG/WebP | 500KB |
| Foto kenangan | Bebas | JPG/WebP | 1MB |

> 💡 Kompres foto sebelum upload menggunakan [squoosh.app](https://squoosh.app)

---

## 👥 Tim Pengembang

Dibuat dengan ❤️ oleh **Kelas XII RPL 2**  
SMK TI Muhammadiyah Cikampek · 2026

---

*"Bukan sekadar kelas — tapi sebuah era."*
