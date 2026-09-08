# PRD — Website Kenangan Kelas XII RPL 2
**Product Requirements Document**
Versi 1.0 · September 2026

---

## 1. Gambaran Proyek

### 1.1 Ringkasan Eksekutif

Website ini adalah platform kenangan digital untuk kelas XII RPL 2 yang bertujuan mengabadikan momen, menampilkan profil pengurus kelas, menghormati para pembimbing, dan merayakan perjalanan bersama selama tiga tahun di bangku SMK. Website dibangun dengan semangat **"RPL NEW ERA"** — sebuah era baru yang membuktikan bahwa RPL 2 bukan hanya nama kelas, tapi sebuah identitas.

### 1.2 Tujuan Produk

- Menyimpan dan menampilkan kenangan kelas XII RPL 2 secara permanen dan estetik
- Memberikan ruang apresiasi kepada wali kelas dan guru jurusan
- Menjadi arsip digital yang bisa diakses alumni di masa mendatang
- Menampilkan identitas kelas yang kuat lewat desain berbasis logo RPL 2

### 1.3 Target Pengguna

| Segmen | Deskripsi |
|--------|-----------|
| **Primer** | Siswa-siswi kelas XII RPL 2 |
| **Sekunder** | Wali kelas dan guru jurusan RPL |
| **Tersier** | Keluarga siswa, alumni angkatan lain, pihak sekolah |

---

## 2. Design System & Frontend

### 2.1 Identitas Visual

Desain terinspirasi langsung dari logo RPL 2 — energik, berani, dan penuh semangat — namun diangkat ke level profesional dengan struktur tata letak yang bersih dan sistem tipografi yang elegan. Keyword visual: **"Bold Youth, Clean Execution"**.

---

### 2.2 Palet Warna

Diekstrak dari logo RPL 2 dan diperluas untuk kebutuhan UI profesional:

```
/* === WARNA PRIMER === */
--color-solar-gold:     #FFB800;   /* Kuning utama logo — energi & identitas */
--color-amber-burst:    #E8831A;   /* Oranye gradient logo — kehangatan */
--color-deep-navy:      #1E1B4B;   /* Navy gelap outline logo — ketegasan */

/* === WARNA AKSEN === */
--color-crimson-pop:    #E63030;   /* Merah logo — highlight & CTA */
--color-star-white:     #FFFFFF;   /* Putih bersih — ruang napas */
--color-cloud-gray:     #F0F2F8;   /* Abu-abu lembut — background section */

/* === WARNA TEKS === */
--color-ink:            #1A1832;   /* Hampir hitam-biru — teks utama */
--color-ink-muted:      #4A4870;   /* Navy redup — teks sekunder */
--color-on-dark:        #FFF9E6;   /* Kuning gading — teks di atas dark */

/* === GRADIEN KHAS === */
--gradient-hero:        linear-gradient(135deg, #1E1B4B 0%, #2D2A6E 50%, #1E1B4B 100%);
--gradient-gold:        linear-gradient(135deg, #FFD700 0%, #FFB800 50%, #E8831A 100%);
--gradient-card:        linear-gradient(180deg, rgba(30,27,75,0) 0%, rgba(30,27,75,0.85) 100%);
```

**Filosofi warna:** Navy dalam sebagai panggung, emas sebagai bintang, merah sebagai tanda seru. Bukan sekadar warna — ini bahasa visual RPL 2.

---

### 2.3 Tipografi

**Dua pasang typeface — satu deklaratif, satu naratif:**

```
/* === DISPLAY / HEADLINE === */
Font: "Cinzel Decorative"  (Google Fonts)
Peran: Judul utama "RPL NEW ERA", nama halaman besar
Karakter: Serif klasik dengan nuansa agung & bersejarah — kontras elegan
          dengan energi visual logo yang eksplosif
Ukuran: 48px–96px
Letter-spacing: 0.08em
Color: --color-solar-gold (di atas dark) / --color-deep-navy (di atas light)

/* === BODY / SUBHEADING === */
Font: "Plus Jakarta Sans"  (Google Fonts)
Peran: Semua teks konten, label, navigasi, paragraf, caption
Karakter: Humanis sans-serif modern — terbaca di semua ukuran, terasa hangat
Ukuran: 14px–28px
Line-height: 1.65 (body) / 1.25 (heading)
```

**Skala Tipografi:**

| Token | Size | Weight | Penggunaan |
|-------|------|--------|-----------|
| `display-2xl` | 96px | 700 | "RPL NEW ERA" hero |
| `display-xl` | 64px | 700 | Nama halaman |
| `display-lg` | 48px | 600 | Section title |
| `heading-md` | 28px | 600 | Card heading |
| `heading-sm` | 20px | 600 | Sub-section |
| `body-lg` | 18px | 400 | Paragraf utama |
| `body-md` | 16px | 400 | Teks standar |
| `body-sm` | 14px | 400 | Caption, label |
| `caption` | 12px | 500 | Metadata |

---

### 2.4 Sistem Komponen UI

#### 2.4.1 Navigation Bar

```
Posisi: Fixed top, full-width
Background: rgba(30, 27, 75, 0.92) + backdrop-blur(12px)
Tinggi: 72px (desktop) / 60px (mobile)
Logo: Favicon RPL 2 + teks "XII RPL 2" di kiri
Menu: Horizontal link di tengah (desktop) / Hamburger drawer (mobile)
Highlight aktif: Underline --color-solar-gold, lebar 100%, height 2px
Transition: Menu link hover → warna gold, duration 200ms ease
```

#### 2.4.2 Hero Section (Halaman Home)

```
Background: --gradient-hero dengan partikel bintang CSS animasi
Layout: Center-aligned, full-viewport-height
Elemen utama: Teks "RPL NEW ERA" dengan Cinzel Decorative
Efek teks: Text-shadow berlapis warna gold (#FFB800) untuk kedalaman
Subtitle: "Kelas XII · Rekayasa Perangkat Lunak · 2026" — Plus Jakarta Sans
Animasi: Teks muncul dengan fade-up staggered (300ms delay per baris)
Scroll indicator: Chevron down bouncing di bawah hero
```

#### 2.4.3 Slideshow Pengurus Kelas

```
Tipe: Full-width carousel card dengan efek parallax ringan
Tampilan: 1 foto aktif besar + thumbnail strip di bawah (desktop)
          Swipe gesture (mobile)
Rasio foto: 3:4 portrait (kartu siswa feel)
Overlay: Gradient gelap dari bawah (--gradient-card)
Label jabatan: Pill badge emas di pojok kiri atas
Nama siswa: Heading putih bold di bawah
Navigasi: Arrow kiri-kanan + dots indicator
Auto-play: 5 detik per slide, pause saat hover
Transisi: Slide horizontal dengan ease-in-out 400ms
```

**Urutan slide pengurus:**
1. Ketua Kelas
2. Wakil Ketua Kelas
3. Sekretaris
4. Wakil Sekretaris
5. Bendahara
6. Wakil Bendahara
7. Seksi Kebersihan

#### 2.4.4 Gallery Card (Halaman Kenangan)

```
Layout: Masonry grid (Kolom 3 desktop, 2 tablet, 1 mobile)
Hover state: Scale 1.03 + overlay dengan ikon zoom + caption foto
Lightbox: Klik foto → modal fullscreen dengan navigasi prev/next
Filter: Tab kategori (Semua, Kegiatan, Kelas, Wisuda, dll.)
Loading: Skeleton placeholder saat foto belum termuat
```

#### 2.4.5 Profile Card (Jejak Pembimbing & Jejak Pelajar)

```
Bentuk: Card vertikal dengan foto portrait atas, info bawah
Foto: Circle crop dengan border 3px gold, shadow navy
Badge: Label "Wali Kelas X" / "Wali Kelas XI" / "Wali Kelas XII"
       atau "Guru Jurusan"
Nama: Heading bold
Mata pelajaran / jabatan: Teks muted
Hover: Card terangkat (translateY -6px) + shadow lebih dalam
```

#### 2.4.6 Quote/Pesan Section

```
Posisi: Di bawah grid profil di halaman Jejak Pembimbing & Jejak Pelajar
Background: --gradient-gold
Isi: Kata-kata penutup / apresiasi untuk para pembimbing
Tipografi: Italic, Cinzel Decorative, ukuran besar, warna navy
Dekorasi: Tanda kutip besar (") sebagai elemen visual kiri atas
```

---

### 2.5 Prinsip Interaksi & Animasi

Satu aturan utama: **Animasi melayani konten, bukan memperlihatkan diri sendiri.**

| Trigger | Efek | Durasi | Easing |
|---------|------|--------|--------|
| Page load hero | Teks fade-up staggered | 600ms | ease-out |
| Scroll masuk viewport | Elemen fade-in (sekali saja) | 400ms | ease-out |
| Hover card | translateY + shadow | 200ms | ease |
| Klik navigasi | Page transition slide | 300ms | ease-in-out |
| Slideshow auto | Transisi horizontal | 400ms | ease-in-out |
| Hover nav link | Underline grow kiri→kanan | 200ms | ease |
| Modal buka | Scale + fade | 250ms | ease-out |

> **Catatan:** Semua animasi scroll hanya berjalan sekali. Tidak ada efek `bounce` atau `shake` yang berulang tanpa interaksi pengguna. Gunakan `prefers-reduced-motion` media query untuk menghormati aksesibilitas.

---

### 2.6 Layout & Responsivitas

```
Breakpoints:
  Mobile:  < 640px   → Layout 1 kolom, hamburger menu
  Tablet:  640–1024px → Layout 2 kolom, menu tetap terlihat
  Desktop: > 1024px  → Layout penuh, multi-kolom

Container max-width: 1200px, margin auto, padding 0 24px
Section padding vertikal: 80px (desktop) / 48px (mobile)
Grid gap standar: 24px
Border radius: 12px (card) / 8px (badge/pill) / 50% (avatar)
```

---

## 3. Fitur Utama (Core Features)

### 3.1 Navigasi Global

**Deskripsi:** Bar navigasi tetap (fixed) yang selalu terlihat saat scroll, dengan indikator halaman aktif yang jelas.

**Halaman-halaman:**

| Rute | Nama Menu | Ikon |
|------|-----------|------|
| `/` | Home | 🏠 |
| `/tentang` | Tentang | ℹ️ |
| `/kenangan` | Kenangan | 📸 |
| `/jejak-pembimbing` | Jejak Pembimbing | 👨‍🏫 |
| `/jejak-pelajar` | Jejak Pelajar | 👩‍💻 |

**Kriteria Selesai (AC):**
- Navbar selalu `fixed top-0` saat scroll di semua halaman
- Link aktif memiliki indikator visual gold underline
- Di mobile, menu collapse menjadi hamburger dengan drawer animasi dari kanan
- Logo RPL 2 di kiri navbar sebagai favicon/icon yang dapat diklik → kembali ke Home
- Smooth scroll jika ada anchor link dalam halaman yang sama

---

### 3.2 Halaman Home

**Deskripsi:** Halaman utama yang menjadi wajah website, menampilkan identitas kelas dan profil pengurus.

#### Feature 3.2.1 — Hero "RPL NEW ERA"

**Kriteria Selesai:**
- Teks "RPL NEW ERA" tampil besar dengan font Cinzel Decorative
- Background bintang/partikel animasi CSS (bukan library berat)
- Subtitle "Kelas XII · Rekayasa Perangkat Lunak · 2026" di bawah judul
- Animasi muncul staggered saat halaman pertama load
- Scroll indicator (animated chevron) di bagian bawah hero
- Fully responsive: teks skala otomatis di mobile dengan `clamp()`

#### Feature 3.2.2 — Slideshow Pengurus Kelas

**Kriteria Selesai:**
- Menampilkan 7 slide sesuai jabatan (lihat urutan di 2.4.3)
- Setiap slide: foto siswa, nama lengkap, jabatan dalam kelas
- Auto-play dengan interval 5 detik
- Navigasi manual: tombol panah kiri-kanan + dot indicator klik
- Swipe gesture support di mobile (touch event)
- Pause auto-play saat hover atau touch
- Placeholder tampil saat foto belum diisi (siluet abu-abu + label "Foto Belum Tersedia")
- Badge jabatan dengan warna berbeda per posisi (ketua: gold, bendahara: biru, dll.)

---

### 3.3 Halaman Tentang

**Deskripsi:** Profil singkat kelas XII RPL 2 — siapa kami, apa jurusan kami, dan apa yang membuat kami istimewa.

**Konten yang ditampilkan:**
- Nama resmi kelas: "XII RPL 2 — Rekayasa Perangkat Lunak"
- Deskripsi singkat jurusan RPL
- Statistik kelas: jumlah siswa, tahun angkatan, nama sekolah
- Visi kelas / motto kelas
- Foto kelas bersama (opsional, satu foto besar)
- Logo RPL 2 ditampilkan sebagai bagian identitas visual

**Kriteria Selesai:**
- Layout dua kolom: teks kiri, visual kanan (desktop) / satu kolom (mobile)
- Animasi counter untuk statistik angka (e.g., "31 Siswa" count-up saat scroll masuk)
- Konten bisa diperbarui via data file JSON (lihat Seksi 5)

---

### 3.4 Halaman Kenangan

**Deskripsi:** Galeri foto kenangan kelas yang bisa difilter berdasarkan kategori kegiatan.

**Kriteria Selesai:**
- Tampilan masonry grid, responsif otomatis
- Filter kategori: "Semua" | "Kegiatan Kelas" | "Praktik" | "Acara Sekolah" | "Wisuda" | "Lainnya"
- Klik foto → lightbox fullscreen dengan navigasi keyboard (← →) dan klik area gelap untuk tutup
- Caption foto tampil di lightbox (nama kegiatan, tanggal opsional)
- Loading skeleton saat foto sedang dimuat
- Jika belum ada foto, tampil empty state yang ramah: ilustrasi + teks "Kenangan sedang disiapkan..."
- Total jumlah foto tampil di atas grid ("🖼 24 Foto Kenangan")

---

### 3.5 Halaman Jejak Pembimbing

**Deskripsi:** Halaman penghormatan untuk wali kelas dari kelas X sampai XII, diakhiri dengan pesan apresiasi.

**Konten yang ditampilkan:**

```
Section 1 — Wali Kelas X
  [Foto] [Nama Lengkap + Gelar] [Mata Pelajaran yang Diampu]
  [Quote singkat / kesan dari wali kelas — opsional]

Section 2 — Wali Kelas XI
  [Foto] [Nama Lengkap + Gelar] [Mata Pelajaran yang Diampu]

Section 3 — Wali Kelas XII
  [Foto] [Nama Lengkap + Gelar] [Mata Pelajaran yang Diampu]

Section 4 — Pesan Penutup / Apresiasi
  [Kata-kata terima kasih untuk para wali kelas]
  [Background gradient gold, teks besar italic]
```

**Kriteria Selesai:**
- Tiap section wali kelas memiliki label badge yang jelas ("Wali Kelas X", dst.)
- Layout: foto kiri, info kanan (desktop) / foto atas, info bawah (mobile)
- Section penutup tampil dengan background berbeda (gradient gold) sebagai pembatas visual
- Teks pesan penutup menggunakan Cinzel Decorative untuk kesan khidmat
- Transisi masuk tiap section saat scroll

---

### 3.6 Halaman Jejak Pelajar

**Deskripsi:** Galeri penghargaan untuk guru-guru jurusan RPL, diakhiri pesan apresiasi serupa.

**Konten yang ditampilkan:**
- Grid foto dan profil singkat setiap guru jurusan
- Nama, gelar, mata pelajaran yang diampu
- Pesan penutup dari siswa untuk para guru

**Kriteria Selesai:**
- Grid responsif: 3 kolom (desktop) / 2 kolom (tablet) / 1 kolom (mobile)
- Kartu guru: foto bulat + nama + mapel di bawah
- Hover efek: kartu terangkat, border gold muncul
- Section penutup identik formatnya dengan halaman Jejak Pembimbing
- Placeholder kartu jika foto belum diisi

---

### 3.7 Favicon & Branding

**Kriteria Selesai:**
- Logo RPL 2 (file yang diunggah) digunakan sebagai favicon website
- Tab browser menampilkan judul "XII RPL 2 — RPL NEW ERA"
- Meta OG tags diisi untuk tampilan link preview yang baik di WhatsApp/sosmed

---

## 4. User Flow

### 4.1 Diagram Alur Utama

```
[Pengguna Membuka URL]
        │
        ▼
[Halaman Home]
  ├─ Animasi hero "RPL NEW ERA" muncul
  ├─ Slideshow pengurus kelas auto-play
  └─ Gulir ke bawah → Section pengurus lengkap (opsional)
        │
        ▼ (Klik menu navigasi)
        │
  ┌─────┼─────────────────────────────┐
  │     │                             │
  ▼     ▼                             ▼
[Tentang] [Kenangan]      [Jejak Pembimbing / Jejak Pelajar]
  │         │                         │
  │    ┌────┴────┐                    ├─ Scroll → Section Wali Kelas X
  │    │         │                    ├─ Scroll → Section Wali Kelas XI
  │    ▼         ▼                    ├─ Scroll → Section Wali Kelas XII
  │  [Filter]  [Grid]                 └─ Scroll → Pesan Penutup
  │  Kategori  Foto
  │    │         │
  │    ▼         ▼
  │  [Tampil] [Klik Foto]
  │  Grid      → [Lightbox]
  │  Terfilter     │
  │                └─ Navigasi prev/next
  │                   Tekan ESC / klik luar → tutup
  │
  └─ (Semua halaman bisa kembali ke Home via logo/menu)
```

---

### 4.2 Flow: Kunjungan Pertama (First Visit)

```
1. URL dibuka di browser
2. Halaman Home load → animasi hero "RPL NEW ERA" tampil staggered
3. Setelah 1 detik, slideshow pengurus mulai auto-play
4. Pengguna scroll ke bawah → section konten tambahan muncul
5. Pengguna tertarik → klik menu "Kenangan"
6. Halaman Kenangan load → grid foto tampil dengan skeleton loading
7. Pengguna klik satu foto → lightbox terbuka
8. Pengguna navigasi foto dengan panah atau keyboard
9. Tekan Escape → lightbox tutup
10. Pengguna klik "Jejak Pembimbing" → scroll melewati 3 section wali kelas
11. Pengguna tiba di pesan penutup → membaca apresiasi
12. Klik logo → kembali ke Home
```

---

### 4.3 Flow: Mobile (Touch)

```
1. Buka URL di HP
2. Hamburger menu terlihat di kanan atas
3. Klik hamburger → drawer menu muncul dari kanan dengan animasi
4. Klik menu → drawer tutup, halaman berpindah
5. Di halaman Home → swipe kiri/kanan pada slideshow pengurus
6. Di halaman Kenangan → scroll normal grid foto
7. Tap foto → lightbox fullscreen
8. Swipe kiri/kanan di lightbox untuk navigasi foto
9. Tap area luar foto → lightbox tutup
```

---

### 4.4 Flow: Pengelolaan Konten (Admin/Siswa Update)

```
1. Siswa ingin menambah foto kenangan
2. Buka file: src/data/kenangan.json
3. Tambah objek baru: { "src": "...", "kategori": "...", "caption": "..." }
4. Simpan file → website otomatis menampilkan foto baru
5. (Tidak perlu coding, cukup edit JSON)
```

---

## 5. Arsitektur Data (JSON-Driven Content)

Seluruh konten dinamis dikelola lewat file JSON di folder `src/data/` — **tanpa database, tanpa backend**. Siswa cukup edit teks untuk memperbarui konten.

### 5.1 Struktur File

```
src/
├── data/
│   ├── pengurus.json       ← Data pengurus kelas (slideshow home)
│   ├── kenangan.json       ← Data foto kenangan
│   ├── pembimbing.json     ← Data wali kelas X, XI, XII
│   ├── pelajar.json        ← Data guru jurusan
│   └── tentang.json        ← Profil & info kelas
└── assets/
    ├── images/
    │   ├── pengurus/       ← Foto pengurus (ketua, wakil, dll.)
    │   ├── kenangan/       ← Foto kenangan kelas
    │   ├── pembimbing/     ← Foto wali kelas
    │   └── pelajar/        ← Foto guru jurusan
    └── logo-rpl2.jpeg      ← Logo untuk favicon
```

### 5.2 Contoh Schema JSON

**pengurus.json**
```json
[
  {
    "id": 1,
    "jabatan": "Ketua Kelas",
    "nama": "Nama Siswa",
    "foto": "/assets/images/pengurus/ketua.jpg",
    "badgeColor": "gold"
  },
  {
    "id": 2,
    "jabatan": "Wakil Ketua Kelas",
    "nama": "Nama Siswa",
    "foto": "/assets/images/pengurus/wakil-ketua.jpg",
    "badgeColor": "silver"
  }
]
```

**kenangan.json**
```json
[
  {
    "id": 1,
    "src": "/assets/images/kenangan/foto1.jpg",
    "caption": "MOS Kelas X - Awal Perjalanan",
    "kategori": "Kegiatan Kelas",
    "tanggal": "2023-07-17"
  }
]
```

**pembimbing.json**
```json
[
  {
    "kelas": "X",
    "nama": "Nama Guru, S.Pd.",
    "mapel": "Mata Pelajaran",
    "foto": "/assets/images/pembimbing/wali-kelas-x.jpg"
  },
  {
    "kelas": "XI",
    "nama": "Nama Guru, S.Pd.",
    "mapel": "Mata Pelajaran",
    "foto": "/assets/images/pembimbing/wali-kelas-xi.jpg"
  },
  {
    "kelas": "XII",
    "nama": "Nama Guru, S.Pd.",
    "mapel": "Mata Pelajaran",
    "foto": "/assets/images/pembimbing/wali-kelas-xii.jpg"
  }
]
```

---

## 6. Tech Stack & Arsitektur Vue.js

### 6.1 Stack Utama

| Layer | Teknologi | Alasan |
|-------|-----------|--------|
| Framework | **Vue 3** (Composition API) | Modern, reaktif, cocok untuk SPA |
| Router | **Vue Router 4** | Navigasi antar halaman (SPA) |
| Styling | **Tailwind CSS** + Custom CSS Variables | Utility-first + sistem desain custom |
| Build Tool | **Vite** | Fast HMR, ringan untuk proyek ini |
| Icons | **Heroicons** atau SVG inline | Tidak perlu library besar |
| Fonts | **Google Fonts** (CDN) | Cinzel Decorative + Plus Jakarta Sans |
| Deployment | **GitHub Pages** / **Netlify** | Gratis, mudah, cocok untuk static site |

### 6.2 Struktur Komponen Vue

```
src/
├── components/
│   ├── layout/
│   │   ├── NavBar.vue          ← Navigasi global (fixed)
│   │   └── Footer.vue          ← Footer sederhana
│   ├── home/
│   │   ├── HeroSection.vue     ← "RPL NEW ERA" + animasi
│   │   └── PengurusSlideshow.vue ← Carousel pengurus kelas
│   ├── kenangan/
│   │   ├── FotoGrid.vue        ← Masonry grid foto
│   │   ├── FilterTab.vue       ← Tab kategori filter
│   │   └── FotoLightbox.vue    ← Modal lightbox
│   ├── profil/
│   │   ├── ProfilCard.vue      ← Kartu profil (reusable)
│   │   └── PesanPenutup.vue    ← Section apresiasi (reusable)
│   └── ui/
│       ├── BadgePill.vue       ← Badge jabatan/label
│       ├── SkeletonCard.vue    ← Loading placeholder
│       └── ScrollReveal.vue    ← Wrapper animasi scroll
├── views/
│   ├── HomeView.vue
│   ├── TentangView.vue
│   ├── KenaganView.vue
│   ├── JejakPembimbingView.vue
│   └── JejakPelajarView.vue
├── composables/
│   ├── useSlideshow.js         ← Logic carousel (auto-play, navigasi)
│   ├── useLightbox.js          ← Logic lightbox (open/close/navigate)
│   └── useScrollReveal.js      ← Logic animasi scroll masuk viewport
├── data/                       ← File JSON konten
└── assets/                     ← Gambar & media
```

### 6.3 Router Configuration

```javascript
// src/router/index.js
const routes = [
  { path: '/',                  component: HomeView,             name: 'home' },
  { path: '/tentang',          component: TentangView,          name: 'tentang' },
  { path: '/kenangan',         component: KenaganView,          name: 'kenangan' },
  { path: '/jejak-pembimbing', component: JejakPembimbingView,  name: 'jejak-pembimbing' },
  { path: '/jejak-pelajar',    component: JejakPelajarView,     name: 'jejak-pelajar' },
]
```

---

## 7. Konten Placeholder & Panduan Pengisian

### 7.1 Yang Perlu Disiapkan Siswa

Sebelum website diluncurkan, kumpulkan aset berikut:

**Wajib:**
- [ ] Foto masing-masing pengurus kelas (7 foto, format portrait 3:4)
- [ ] Nama lengkap setiap pengurus
- [ ] Foto 3 wali kelas (X, XI, XII) beserta nama dan mata pelajaran
- [ ] Foto guru-guru jurusan RPL beserta nama dan mapel
- [ ] Deskripsi singkat kelas (3–5 kalimat untuk halaman Tentang)
- [ ] Motto atau visi kelas

**Opsional tapi Dianjurkan:**
- [ ] Koleksi foto kenangan (minimal 12 foto dari berbagai kegiatan)
- [ ] Kata-kata penutup/apresiasi untuk wali kelas
- [ ] Kata-kata apresiasi untuk guru jurusan
- [ ] Nama lengkap sekolah, tahun angkatan, jumlah siswa

### 7.2 Panduan Foto

| Jenis | Rasio Ideal | Format | Ukuran Max |
|-------|-------------|--------|------------|
| Pengurus kelas | 3:4 portrait | JPG/WebP | 500KB |
| Wali kelas / Guru | 1:1 atau 3:4 | JPG/WebP | 500KB |
| Kenangan | Bebas | JPG/WebP | 1MB |
| Logo / Favicon | 1:1 | PNG/JPG | 200KB |

---

## 8. Checklist Development

### Phase 1 — Setup & Foundation
- [ ] Init project Vue 3 + Vite
- [ ] Setup Tailwind CSS + custom CSS variables
- [ ] Install Vue Router & konfigurasi routes
- [ ] Import Google Fonts (Cinzel Decorative + Plus Jakarta Sans)
- [ ] Setup struktur folder komponen
- [ ] Buat file JSON placeholder untuk semua data
- [ ] Konfigurasi favicon dengan logo RPL 2

### Phase 2 — Komponen Dasar
- [ ] NavBar.vue (desktop + mobile hamburger)
- [ ] HeroSection.vue ("RPL NEW ERA" + animasi partikel)
- [ ] PengurusSlideshow.vue (carousel + auto-play + swipe)
- [ ] ProfilCard.vue (reusable)
- [ ] BadgePill.vue (reusable)

### Phase 3 — Halaman
- [ ] HomeView.vue (hero + slideshow)
- [ ] TentangView.vue (profil kelas + statistik)
- [ ] KenaganView.vue (filter + grid + lightbox)
- [ ] JejakPembimbingView.vue (3 section + pesan penutup)
- [ ] JejakPelajarView.vue (grid guru + pesan penutup)

### Phase 4 — Polish & Deploy
- [ ] Animasi scroll reveal di semua section
- [ ] Responsivitas mobile diuji di semua halaman
- [ ] Isi semua data JSON dengan konten nyata
- [ ] Optimasi gambar (compress sebelum upload)
- [ ] Meta tags (title, description, OG image)
- [ ] Deploy ke Netlify / GitHub Pages
- [ ] Test link di WhatsApp — pastikan preview muncul dengan baik

---

## 9. Catatan Tambahan

**Aksesibilitas minimum:**
- Semua gambar wajib memiliki atribut `alt` yang deskriptif
- Kontras warna teks ≥ 4.5:1 (WCAG AA)
- Navigasi keyboard harus berfungsi di lightbox dan slideshow

**Performa:**
- Gunakan `loading="lazy"` untuk semua gambar galeri
- Compress semua foto sebelum dimasukkan ke project (gunakan squoosh.app)
- Hindari library JS yang besar — animasi cukup dengan CSS + Vue transitions

**Kemudahan Update:**
- Semua konten teks dan foto dikelola lewat JSON — tidak perlu menyentuh kode Vue
- Dokumentasikan cara update JSON di README.md project

---

*PRD ini adalah dokumen hidup. Revisi dapat dilakukan sesuai kebutuhan tim.*

---

**Dokumen dibuat untuk:** Kelas XII RPL 2
**Versi:** 1.0
**Tanggal:** September 2026
