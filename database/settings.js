// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['-'] //Own Number
global.developer = "-" //Dev Name
global.botname = "-" //Bot Name
global.version = "1.0" //Version Bot
global.zonaWaktu = "Asia/Makassar" // Waktu Auto Reminder
/*
Note:
Asia/Pontianak = WIB
Asia/Makassar = WITA
Asia/Jayapura = WIT
*/

global.reminder= "0 8 * * *" // Setiap jam 8:00
/*
Note:
"0 8 * * *"
0 = Menit - 8 = Jam = 8:00

"30 7 * * *"
30 = Menit - 7 = Jam = 7:30
*/


//Sticker Setiings
global.packname = "Sticker By Flux" //Pack Name 
global.author = "FluxXYZ" // Author


//Social Media Settings
global.ytube = "https://youtube.com/@fluxx-md"
global.ttok = "-"
global.igram = "-"
global.chtele = "-"
global.tgram = "https://t.me/@fluxxXYZ"
global.limitCount = 1,

global.mess = {
 owner: '*You are not the owner*',
 premium: '*You are not premium*'
}

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
