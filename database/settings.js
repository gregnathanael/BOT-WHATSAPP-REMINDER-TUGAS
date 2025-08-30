// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['6287822428455'] //Own Number
global.developer = "FluxXYZ" //Dev Name
global.botname = "Cronexis - Botz" //Bot Name
global.version = "6.0" //Version Bot

//Password taruh disini
global.password = "memex"

//Sticker Setiings
global.packname = "Sticker By Flux" //Pack Name 
global.author = "FluxXYZ" // Author

//Setting Api Panel

global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://FluxXYZ.com" // Isi Domain lu
global.apikey = "-" // Isi api ptla
global.capikey = "-" // Isi api ptlc

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