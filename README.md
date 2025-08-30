<!-- Banner -->
<h1 align="center">🤖 BOT WhatsApp Reminder Tugas 📚</h1>
<p align="center">
  Bot WhatsApp sederhana untuk mengingatkan tugas otomatis  
  made by ❤️ menggunakan <b>Node.js</b></b>
</p>

---

## 🚀 Fitur
- Kirim reminder otomatis ke WhatsApp (Group)
- Bisa melihat tugas apa saja yang sedang berlangsung
- Bisa melihat Jadwal Pelajaran dengan gambar (database/pusat/image/jadwal.jpeg)
- Bisa mengatur waktu sesuai lokasi yang anda pilih, agar tidak salah waktu dalam mengirim jadwal otomatis (node-cron)
- Otomatis menghilang saat melewati deadline/tenggat waktu
- Mudah dikembangkan

---

## ⚡ Command Bot
- .menu - Untuk melihat menu bot
- .autoreminder on/off - Aktifkan/Nonaktifkan Auto Reminder pada group tertentu
- .addtugas - Untuk menambahkan tugas
- .deltugas - Untuk menghapus tugas
- .tugas - Untuk melihat tugas yang sedang berlangsung
- .addpengurus - Menambah pengurus agar bisa mengakses perintah <b>.addtugas/.deltugas</b>
- .delpengurus - Menghapus pengurus

---

## ⚙️ Konfigurasi Database / Settings

File konfigurasi berada di:  
database/settings.json

```
// Bot Settings
global.owner = ['628'] // Owner Number
global.developer = "GregXYZ" // Dev Name
global.zonaWaktu = "Asia/Makassar" // Waktu Auto Reminder

/ *Note:
Asia/Pontianak = WIB
Asia/Makassar = WITA
Asia/Jayapura = WIT */
```

---

## 🔧 Cara Menjalankan
Clone repo ini:
```bash
git clone https://github.com/username/BOT-WHATSAPP-REMINDER-TUGAS.git
cd BOT-WHATSAPP-REMINDER-TUGAS
```
Install package:
```
npm install
```
Jalankan Bot:
```
node index.js
```
atau
```
npm start
```
---
