<!-- Banner -->
<h1 align="center">🤖 BOT WhatsApp Reminder Tugas 📚</h1>
<p align="center">
  Bot WhatsApp sederhana untuk mengingatkan jadwal/tugas otomatis  
  Dibuat dengan ❤️ menggunakan <b>Node.js</b></b>
</p>

---

## 🚀 Fitur
- Kirim reminder otomatis ke WhatsApp
- Atur jadwal lewat konfigurasi
- Penyimpanan data sederhana di `database/settings.json`
- Mudah dikembangkan

---

## ⚙️ Konfigurasi Database / Settings

File konfigurasi berada di:  
database/settings.json

css
Salin kode

Contoh isi:
```json
{
  "reminder": [
    {
      "matkul": "Matematika",
      "pesan": "Jangan lupa kerjakan PR Matematika 📘",
      "jadwal": "0 8 * * 1" 
    },
    {
      "matkul": "Fisika",
      "pesan": "Besok ada kuis Fisika ⚡",
      "jadwal": "0 18 * * 0"
    }
  ]
}
```

---

📌 Format jadwal menggunakan cron expression:

0 8 * * 1 → setiap Senin jam 08:00

0 18 * * 0 → setiap Minggu jam 18:00

⏰ Menyetel Jadwal Otomatis di index.js
Contoh potongan kode di index.js:

js
Salin kode
const fs = require("fs");
const cron = require("node-cron");
const { Client } = require("whatsapp-web.js");

const client = new Client();
const settings = JSON.parse(fs.readFileSync("database/settings.json"));

client.on("ready", () => {
  console.log("Bot siap digunakan!");

  // Loop reminder dari settings.json
  settings.reminder.forEach(task => {
    cron.schedule(task.jadwal, () => {
      client.sendMessage("628xxxxxxxxxx@c.us", task.pesan);
      console.log(`Reminder terkirim: ${task.matkul}`);
    });
  });
});

client.initialize();
📸 Preview (Opsional)
Kalau ada screenshot/gambar bot:


🔧 Cara Menjalankan
Clone repo ini

bash
Salin kode
git clone https://github.com/username/BOT-WHATSAPP-REMINDER-TUGAS.git
cd BOT-WHATSAPP-REMINDER-TUGAS
Install dependency

bash
Salin kode
npm install
Jalankan bot

bash
Salin kode
node index.js
Scan QR di WhatsApp dan bot siap jalan ✅
