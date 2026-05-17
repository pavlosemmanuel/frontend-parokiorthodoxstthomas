# ⛪ Website Paroki St. Thomas Jakarta

Sebuah sistem informasi dan manajemen website Paroki yang dibangun menggunakan **MERN Stack**. Proyek ini dikembangkan menggunakan React.js murni (tanpa framework Next.js) untuk memperdalam pemahaman dasar-dasar React serta membangun alur komunikasi state dan props yang kuat antara Frontend dan Backend.

## 🚀 Fitur Utama

- **Responsive Design:** Tampilan antarmuka yang modern, rapi, dan responsif untuk semua ukuran layar (Mobile, Tablet, Desktop) menggunakan Tailwind CSS.
- **Role-Based Access Control (RBAC):**
  - **Admin:** Memiliki hak akses penuh untuk CRUD (Create, Read, Update, Delete) jadwal kegiatan, event paroki, dan mengelola galeri foto.
  - **User (Jemaat):** Akses *read-only* untuk melihat informasi terkini, jadwal, dan galeri.
- **Secure Authentication & Password Recovery:**
  - Login berbasis Token untuk memvalidasi sesi pengguna.
  - Fitur *Forgot Password* yang terintegrasi dengan layanan email untuk mengirimkan tautan (link) reset password secara aman.
- **Cloud Media Storage:** Integrasi dengan **Cloudinary** untuk efisiensi penyimpanan gambar. File media tidak membebani server lokal, melainkan langsung diunggah dan dirender dari cloud.

## 🛠️ Teknologi yang Digunakan
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Layanan Pihak Ketiga:** Cloudinary (Image Storage), NodeMailer/Email Service (Forgot Password)

## 🧠 Pembelajaran & Evaluasi (Lessons Learned)
Proyek ini adalah langkah awal yang sangat krusial dalam perjalanan *Full-Stack Development* saya. Beberapa tantangan dan evaluasi yang saya temukan:
- **Keamanan Token:** Saat ini token autentikasi masih disimpan di `localStorage` (XSS vulnerability). Ke depannya, saya berencana melakukan migrasi penyimpanan token ke `httpOnly cookies`.
- **Refactoring Kode:** Masih terdapat ruang untuk merapikan struktur folder dan modularisasi komponen kode agar lebih *Clean* dan *Maintainable*.
- **UI/UX:** Tampilan saat ini dirancang fungsional dan sederhana, akan terus dikembangkan agar lebih interaktif.

## 📺 Video Demo & Penjelasan Lengkap
Untuk melihat cara kerja aplikasi ini, *code review*, dan penjelasan alur autentikasi, silakan tonton video demo proyek ini di channel YouTube saya:
👉 **[Tautkan URL Video YouTube Anda di Sini]**
