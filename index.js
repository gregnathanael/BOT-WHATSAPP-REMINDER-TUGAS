console.clear();
require('./database/settings.js');

const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeCacheableSignalKeyStore,
    makeInMemoryStore,
    jidDecode,
    proto,
    getAggregateVotesInPollMessage
} = require("@whiskeysockets/baileys");

const chalk = require('chalk');
const CryptoJS = require("crypto-js");
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const FileType = require('file-type');
const readline = require("readline");
const PhoneNumber = require('awesome-phonenumber');
const path = require('path');
const { spawn } = require("child_process");
const axios = require('axios');
const NodeCache = require("node-cache");
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, sleep } = require('./database/pusat/Data1.js');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./database/pusat/Data2.js');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

const usePairingCode = global.connect; // true pairing / false QR


//===================
async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState("./session");
    const {
            version,
            isLatest
        } = await fetchLatestBaileysVersion();
    const sock = makeWASocket({
        isLatest: true,
        printQRInTerminal: !usePairingCode,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        generateHighQualityLinkPreview: true,
        patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }

            return message;
        },
        version: version,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        logger: pino({
            level: 'silent' // Set 'fatal' for production
        }),
        
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino().child({
                level: 'silent',
                stream: 'store'
            })),
        },
        
    });

function getRandomChalkColor() {
  const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
  return chalk[colors[Math.floor(Math.random() * colors.length)]].bold;
}

const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('./database/pusat/Data1.js')
const cron = require('node-cron');
const moment = require('moment-timezone');

function getEmojiMapel(mapelRaw) {
    const emojiMapel = {
      'Rpl': '💻',
      'Pkwu': '💸',
      'Bahasa Inggris': '🇬🇧',
      'Bahasa Indonesia': '🇮🇩',
      'Bahasa Bali': '🪻',
      'Matematika': '📐',
      'Agama Islam': '🙏',
      'Agama Kristen': '🙏',
      'Agama Katolik': '🙏',
      'Agama Hindu': '🙏',
      'Agama Konghucu': '🙏',
      'Dkv': '🎨',
    };
    
    const mapelFormatted = toTitleCase(mapelRaw); // contoh: 'rpl' → 'Rpl'
    
    // Coba cari emoji berdasarkan mapel yang sudah diformat
    const emoji = emojiMapel[mapelFormatted] || '';
    return {
      emoji,
      mapel: mapelFormatted,
    };
  }

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))
    .join(' ');
  }

  function cleanTugas() {
    const fs = require('fs');
    const moment = require('moment-timezone');
    const zonaWaktu = 'Asia/Makassar';
    const filePath = './database/tugas.json';
  
    if (!fs.existsSync(filePath)) return;
  
    const now = moment().tz(zonaWaktu);
    let semuaTugas = JSON.parse(fs.readFileSync(filePath));
  
    semuaTugas = semuaTugas.filter(tugas => {
      const deadline = moment.tz(tugas.deadline, 'DD-MM-YYYY', true, zonaWaktu);
      const batasAkhir = deadline.clone().add(1, 'days');
      return batasAkhir.isSameOrAfter(now);
    });
  
    fs.writeFileSync(filePath, JSON.stringify(semuaTugas, null, 2));
  }

const zonaWaktu = 'Asia/Makassar';
const tugasFile = './database/tugas.json';
const reminderFile = './database/reminder.json';
const lockPath = './database/reminder.lock';

async function runReminder() {
  const tugasDB = fs.existsSync(tugasFile)
    ? JSON.parse(fs.readFileSync(tugasFile))
    : [];

  const reminderList = fs.existsSync(reminderFile)
    ? JSON.parse(fs.readFileSync(reminderFile))
    : [];

  const grupAktif = reminderList
    .filter(r => r.status === 'aktif')
    .map(r => r.jid);

  const now = moment().tz(zonaWaktu).startOf('day');
  const tugasHariIni = tugasDB.filter(t =>
    t.status === 'belum' &&
    moment(t.timestamp).tz(zonaWaktu).isSameOrAfter(now)
  );

  if (!tugasHariIni.length) {
    console.log('📭 Tidak ada tugas hari ini.');
    return;
  }

  const tugasPerGrup = {};
  tugasHariIni.forEach(tugas => {
    if (!grupAktif.includes(tugas.jid)) return;
    if (!tugasPerGrup[tugas.jid]) tugasPerGrup[tugas.jid] = [];
    tugasPerGrup[tugas.jid].push(tugas);
  });

  for (const jid of Object.keys(tugasPerGrup)) {
    const tugasList = tugasPerGrup[jid];
    let teks = `⏰ *Auto Reminder Tugas!*\n\n`;

    tugasList
      .sort((a, b) => moment(a.timestamp).diff(moment(b.timestamp)))
      .forEach((tugas, i) => {
        const { emoji, mapel } = getEmojiMapel(tugas.mapel);
        const deadlineFormatted = moment(tugas.timestamp).tz(zonaWaktu).format('D MMMM YYYY');

        teks += `*${i + 1}. ${emoji} ${mapel}*\n`;
        teks += `- ${tugas.deskripsi}\n`;
        teks += `- ${deadlineFormatted}❗\n\n`;
        teks += `----------------------------------------------\n\n`;
      });

    try {
      const metadata = await sock.groupMetadata(jid);
      const mentions = metadata.participants.map(p => p.id);

      await sock.sendMessage(jid, {
        text: teks,
        mentions
      });

      console.log(`✅ Reminder terkirim ke ${jid}`);
    } catch (err) {
      console.error(`❌ Gagal kirim ke ${jid}:`, err);
    }

    await sleep(5000); // Delay antar grup
  }
}

function runReminder2() {
  // Cegah duplikasi cron
  global.__reminderCronStarted = global.__reminderCronStarted || false;
  if (global.__reminderCronStarted) return;

  // Jadwal reminder setiap hari jam 08:00
  cron.schedule('24 * * * *', async () => {
    const now = moment().tz(zonaWaktu);
    const currentMinute = now.format('YYYY-MM-DD HH:mm');

    // Cek apakah reminder sudah dikirim di menit ini
    if (fs.existsSync(lockPath)) {
      const lastRun = fs.readFileSync(lockPath, 'utf-8').trim();
      if (lastRun === currentMinute) {
        console.log('⛔ Reminder sudah dikirim untuk waktu ini:', currentMinute);
        return;
      }
    }

    // Tandai waktu eksekusi
    fs.writeFileSync(lockPath, currentMinute);
    console.log('🚀 Reminder dijalankan pada', currentMinute);

    // Jalankan fungsi utama reminder
    try {
      await runReminder();
      await sleep(3000);
    } catch (err) {
      console.error('❌ Error saat kirim reminder:', err);
    }
  });

  global.__reminderCronStarted = true;
}



// Logo

console.log(getRandomChalkColor()(`
┌──────────────────────┐
│  BOT REMINDER TUGAS  │
└──────────────────────┘
Created by: @flux/@greg
version: 1.0
`));

await runReminder2(); // Mulai cron job reminder

// Verifikasi Nomor WA
if (!sock.authState.creds.registered) {
  const phoneNumber = await question(getRandomChalkColor()(`
┌──────────────────────┐
│    MASUKKAN NOMOR    │
└──────────────────────┘
› Masukkan Nomor Anda 62xxx:
`));
    
const code = await sock.requestPairingCode(phoneNumber.trim(), "aaaaaaaa");

  console.log(getRandomChalkColor()(`
┌──────────────────────┐
│    BERHASIL LOGIN    │
└──────────────────────┘
› Kode Pairing Anda: ${code}
› Gunakan untuk koneksi perangkat.
`));

}

    const store = makeInMemoryStore({
        logger: pino().child({
            level: 'silent',
            stream: 'store'
        })
    });

    store.bind(sock.ev);

    //===================
    sock.ev.on('call', async (caller) => {
        console.log("CALL OUTGOING");
    });

    sock.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    sock.ev.on('messages.upsert', async chatUpdate => {
        try {
            mek = chatUpdate.messages[0];
            if (!mek.message) return;
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
            if (!sock.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
            let m = smsg(sock, mek, store);
            require("./system.js")(sock, m, chatUpdate, store);
        } catch (error) {
            console.error("Error processing message upsert:", error);
        }
    });

    sock.getFile = async (PATH, save) => {
        let res;
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0);
        let type = await FileType.fromBuffer(data) || { mime: 'application/octet-stream', ext: '.bin' };
        filename = path.join(__filename, '../' + new Date * 1 + '.' + type.ext);
        if (data && save) fs.promises.writeFile(filename, data);
        return { res, filename, size: await getSizeMedia(data), ...type, data };
    };

    sock.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    };

    sock.sendText = (jid, text, quoted = '', options) => sock.sendMessage(jid, { text, ...options }, { quoted });

    sock.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer = options && (options.packname || options.author) ? await writeExifImg(buff, options) : await imageToWebp(buff);
        await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    sock.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer = options && (options.packname || options.author) ? await writeExifVid(buff, options) : await videoToWebp(buff);
        await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    sock.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
    };

    // Tambahan fungsi send media
    sock.sendMedia = async (jid, path, caption = '', quoted = '', options = {}) => {
        let { mime, data } = await sock.getFile(path, true);
        let messageType = mime.split('/')[0];
        let messageContent = {};
        
        if (messageType === 'image') {
            messageContent = { image: data, caption: caption, ...options };
        } else if (messageType === 'video') {
            messageContent = { video: data, caption: caption, ...options };
        } else if (messageType === 'audio') {
            messageContent = { audio: data, ptt: options.ptt || false, ...options };
        } else {
            messageContent = { document: data, mimetype: mime, fileName: options.fileName || 'file' };
        }

        await sock.sendMessage(jid, messageContent, { quoted });
    };

    sock.sendPoll = async (jid, question, options) => {
        const pollMessage = {
            pollCreationMessage: {
                name: question,
                options: options.map(option => ({ optionName: option })),
                selectableCount: 1,
            },
        };

        await sock.sendMessage(jid, pollMessage);
    };

    sock.setStatus = async (status) => {
        await sock.query({
            tag: 'iq',
            attrs: { to: '@s.whatsapp.net', type: 'set', xmlns: 'status' },
            content: [{ tag: 'status', attrs: {}, content: Buffer.from(status, 'utf-8') }],
        });
        console.log(chalk.yellow(`Status updated: ${status}`));
    };
    
    sock.public = global.publicX;

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            if (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) {
                connectToWhatsApp();
            }
        } else if (connection === 'open') {
            console.log(chalk.green("Connected to WhatsApp!"));
        }
    });

    sock.ev.on('error', (err) => {
        console.error(chalk.red("Error: "), err.message || err);
    });

    sock.ev.on('creds.update', saveCreds);
}
connectToWhatsApp();