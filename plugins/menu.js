//© Eliasar54 (EliasarYT)
const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 
const path = require("path") 
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
let usuario = global.db.data.users[m.sender]

const menu = (m, command, conn, prefix, pushname, sender, pickRandom, fkontak) => {
//if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return 
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('America/Managua').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'

    const menu = `╔━━━▣━━◤ 𝘼𝙉𝙎𝙄◢━━▣━━━╗
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻
║࿇ ══━━━━✥◈✥━━━━══ ࿇
║${lenguaje.menu.text} [ ${prefix} ]
║${lenguaje.menu.text2} ${date}
║${lenguaje.menu.text3} ${time}
║${lenguaje.menu.text4} ${vs}
║${lenguaje.menu.text5} ${Object.keys(global.db.data.users).length}
║${lenguaje.menu.text6} ${runtime(process.uptime())}
║${lenguaje.menu.text7} ${conn.public ? 'publico' : 'privado'}
║${conn.user.id == global.numBot2 ? `${lenguaje.menu.textt} ` : `${lenguaje.menu.texttt} @${global.numBot.split`@`[0]}`}
║ 
║${lenguaje.menu.text8} ${user.limit}
║${lenguaje.menu.text9} ${user.level}
║${lenguaje.menu.text10} ${user.role}
║❐ ᴇxᴘ : ${user.exp}
║❐ ᴄᴏɪɴs : ${user.money}
║ 
║${lenguaje.menu.text11} ${rtotalreg} de ${totalreg}
║࿇ ══━━━━✥◈✥━━━━══ ࿇
╚══════ ≪ •❈• ≫ ══════╝

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐ℹ️ ｉｎｆｏｂｏｔ*️⃟ᬽ፝֟━*
┃ ➫ ❏ ${prefix}ʀᴇɢ _(ʀᴇɢɪsᴛʀᴀʀᴛᴇ ᴇɴ ᴇʟ ʙᴏᴛ)_
┃ ➫ ❏ ${prefix}ᴜɴʀᴇɢ _(ʙᴏʀʀᴀʀ sᴜ ʀᴇɢɪsᴛʀᴏ)_
┃ ➫ ❏ ${prefix}ᴍʏɴs _(ɴᴜᴍᴇʀᴏ ᴅᴇ sᴇʀɪᴇ)_
┃ ➫ ❏ ${prefix}ᴇsᴛᴀᴅᴏ _(ᴇsᴛᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ)_
┃ ➫ ❏ ${prefix}ᴍᴇɴᴜ2
┃ ➫ ❏ ${prefix}ᴀᴜᴅɪᴏs 
┃ ➫ ❏ ${prefix}ɴᴜᴇᴠᴏ _(ɴᴜᴇᴠᴏ ᴄᴏᴍᴀɴᴅᴏ)_
┃ ➫ ❏ ${prefix}ʀᴇɢʟᴀs _(ʀᴇɢʟᴀs)_
┃ ➫ ❏ ${prefix}ᴘɪɴɢ
┃ ➫ ❏ ${prefix}ᴠᴇʟᴏᴄɪᴅᴀᴅ
┃ ➫ ❏ ${prefix}ɢʀᴜᴘᴏs _(ɢʀᴜᴘᴏs ᴏғɪᴄɪᴀʟᴇs)_
┃ ➫ ❏ ${prefix}ᴊᴏɪɴ _(sᴏʟɪᴄɪᴛᴀ ᴜɴ ʙᴏᴛ ᴘᴀʀᴀ ᴛᴜ ɢʀᴜᴘᴏ)_
┃ ➫ ❏ ${prefix}ᴏᴡɴᴇʀ
┃ ➫ ❏ ${prefix}ᴄʀᴇᴀᴅᴏʀ _(ᴄᴏɴᴛᴀᴄᴛᴏs ᴅᴇ ᴍɪ ᴄʀᴇᴀᴅᴏʀ)_
┃ ➫ ❏ ${prefix}ɪɴsᴛᴀʟᴀʀʙᴏᴛ (ᴛᴜᴛᴏʀɪᴀʟ ᴅᴇʟ ɪɴsᴛᴀʟᴀᴄɪᴏɴ)_
┃ ➫ ❏ ${prefix}sᴏʟɪᴄɪᴛᴜᴅ
┃ ➫ ❏ ${prefix}ᴄᴜᴇɴᴛᴀ 
┃ ➫ ❏ ${prefix}ᴄᴜᴇɴᴛᴀᴏғɪᴄɪᴀʟᴇs
┃ ➫ ❏ ${prefix}sᴛᴀᴛᴜs 
┃ ➫ ❏ ${prefix}ɪɴғᴏʜᴏsᴛ
┃ ➫ ❏ ${prefix}ʜᴏsᴛ
┃ ➫ ❏ ${prefix}ᴄᴀғɪʀᴇxᴏs
┃ ➫ ❏ ${prefix}ʀᴇᴘᴏʀᴛ _(ʀᴇᴘᴏʀᴛᴀ ᴇʀʀᴏʀᴇs)_
◆━━━━━━◆❃◆━━━━━━◆

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🤖ｊａｄｉｂｏｔ*️⃟ᬽ፝֟━*
├• *(ᴛɪᴇɴᴇ 2 ᴏᴘᴄɪᴏɴᴇs ᴘᴀʀᴀ ʜᴀᴄᴇʀᴛᴇ sᴜʙʙᴏᴛ)*
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *ᴇsᴄᴀɴᴇᴀᴅᴏ ᴇʟ ǫʀ*
┃ ➫ ❏ ${prefix}sᴇʀʙᴏᴛ
┃ ➫ ❏ ${prefix}ǫʀ
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *ᴄᴏɴ ᴄᴏᴅɪɢᴏ ᴅᴇ 8 ᴅɪɢɪᴛᴏs*
├❥ᰰ ❏ ${prefix}sᴇʀʙᴏᴛ --ᴄᴏᴅᴇ
┃ ➫ ❏ ${prefix}ᴊᴀᴅɪʙᴏᴛ --ᴄᴏᴅᴇ
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *(ᴄᴏᴍᴘʀᴜᴇʙᴀ sɪ ʜᴀʏ sᴜʙ ʙᴏᴛ ᴄᴏɴᴇᴄᴛᴀᴅᴏ)*
┃ ➫ ❏ ${prefix}ʙᴏᴛs 
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *(ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴘᴀʀᴀ ʟᴏs sᴜʙ ʙᴏᴛ)*
┃ ➫ ❏ ${prefix}sᴛᴏᴘ
┃ ➫ ❏ ${prefix}ᴅᴇʟᴊᴀᴅɪʙᴏᴛ
◆━━━━━━◆❃◆━━━━━━◆

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🔄ｄｅｓｃａｒｇａ*️⃟ᬽ፝֟━*
┃ ➫ ❏ ${prefix}ᴘʟᴀʏ _(ᴅᴇsᴄᴀʀɢᴀʀ ᴍᴜsɪᴄᴀ)_
┃ ➫ ❏ ${prefix}ᴍᴜsɪᴄᴀ
┃ ➫ ❏ ${prefix}ᴠɪᴅᴇᴏ
┃ ➫ ❏ ${prefix}ʏᴛs _(ʙᴜsᴄᴀᴅᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ)_
┃ ➫ ❏ ${prefix}sᴘᴏᴛɪғʏ
┃ ➫ ❏ ${prefix}ᴍᴜsɪᴄ _(ᴅᴇsᴄᴀʀɢᴀ ᴍᴜsɪᴄᴀ ᴅᴇ sᴘᴏᴛɪғʏ)_
┃ ➫ ❏ ${prefix}ɢɪᴛᴄʟᴏɴᴇ _(ᴅᴇsᴄᴀʀɢᴀ ʀᴇᴘᴏsɪᴛᴏʀɪᴏ ᴅᴇ ɢɪᴛʜᴜʙ)_
┃ ➫ ❏ ${prefix}ᴛɪᴋᴛᴏᴋ _(ᴅᴇsᴄᴀʀɢᴀʀ ᴠɪᴅᴇᴏ ᴅᴇ ᴛɪᴋᴛᴏᴋ)_
┃ ➫ ❏ ${prefix}ᴛɪᴋᴛᴏᴋɪᴍɢ
┃ ➫ ❏ ${prefix}ᴛᴛɪᴍɢ _(ᴅᴇsᴄᴀʀɢᴀ ɪᴍᴀɢᴇɴ ᴅᴇ ᴛɪᴋᴛᴏᴋ)_
┃ ➫ ❏ ${prefix}ɪɢsᴛᴀʟᴋ _(ɴᴏᴍʙʀᴇ ᴅᴇ ᴜɴ ᴜsᴜᴀʀɪᴏ ᴅᴇ ɪɢ)_
┃ ➫ ❏ ${prefix}ғᴀᴄᴇʙᴏᴏᴋ
┃ ➫ ❏ ${prefix}ғʙ _(ᴅᴇsᴄᴀʀɢᴀ ᴠɪᴅᴇᴏs ᴅᴇ ғᴀᴄᴇʙᴏᴏᴋ)_
┃ ➫ ❏ ${prefix}ɪɴsᴛᴀɢʀᴀᴍ
┃ ➫ ❏ ${prefix}ɪɢ _(ᴅᴇsᴄᴀʀɢᴀ ᴠɪᴅᴇᴏs ᴅᴇ ɪɴsᴛᴀɢʀᴀᴍ)_
┃ ➫ ❏ ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ _(ᴅᴇsᴄᴀʀɢᴀ ᴀʀᴄʜɪᴠᴏ ᴅᴇ ᴍᴇᴅɪᴀғɪʀᴇ)_
┃ ➫ ❏ ${prefix}ɢᴅʀɪᴠᴇ _(ᴅᴇsᴄᴀʀɢᴀ ᴀʀᴄʜɪᴠᴏs ᴅᴇ ɢᴅʀɪᴠᴇ)_
*◆━━━━━━◆❃◆━━━━━━◆*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔰⃐ｇｒｕｐｏｓ*️⃟ᬽ፝֟━*
├• ɢᴇsᴛɪᴏɴᴀʀ ᴛᴜ ɢʀᴜᴘᴏ ᴄᴏɴ ᴀɴsɪʙᴏᴛ
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
┃ ➫ ❏ ${prefix}ᴡᴇʟᴄᴏᴍᴇ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀɴᴛɪʟɪɴᴋ
┃ ➫ ❏ ${prefix}ᴀɴᴛɪғᴀᴋᴇ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀɴᴛɪᴀʀᴀʙᴇ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀɴᴛɪᴛᴏxɪᴄ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴅᴇᴛᴇᴄᴛ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀᴜᴛᴏᴅᴇᴛᴇᴄᴛ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀɴᴛɪɴsғᴡ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴍᴏᴅᴏᴄᴀʟɪᴇɴᴛᴇ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴍᴏᴅᴏᴀᴅᴍɪɴ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀᴜᴅɪᴏs _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴄʜᴀᴛʙᴏᴛ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀᴜᴛᴏʟᴇᴠᴇʟᴜᴘ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀᴜᴛᴏɴɪᴠᴇʟ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴋɪᴄᴋ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ᴀᴅᴅ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ɪɴᴠɪᴛᴀ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ᴘʀᴏᴍᴏᴛᴇ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ᴅᴇᴍᴏᴛᴇ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ɪɴғᴏɢʀᴜᴘᴏ
┃ ➫ ❏ ${prefix}ɢʀᴏᴜᴘɪɴғᴏ
┃ ➫ ❏ ${prefix}ᴀᴅᴍɪɴs _(ʟʟᴀᴍᴀ ᴀ ʟᴏs ᴀᴅᴍɪɴs)_
┃ ➫ ❏ ${prefix}ɢʀᴜᴘᴏ ᴄʟᴏsᴇ/ᴏᴘᴇɴ 
┃ ➫ ❏ ${prefix}ᴡᴀʀɴ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ᴜɴᴡᴀʀɴ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ǫᴜɪᴛᴀʀᴅᴠᴇʀᴛᴇɴᴄɪᴀ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}sᴇᴛᴘᴘɴᴀᴍᴇ _(ᴄᴀᴍʙɪᴀ ᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇʟ ɢʀᴜᴘᴏ)_
┃ ➫ ❏ ${prefix}sᴇᴛᴅᴇsᴄ _(ᴄᴀᴍʙɪᴀ ʟᴀ ᴅᴇsᴄ ᴅᴇʟ ɢʀᴜᴘᴏ)_
┃ ➫ ❏ ${prefix}sᴇᴛᴘᴘɢʀᴏᴜᴘ _(ᴄᴀᴍʙɪᴀ ʟᴀ ғᴏᴛᴏ ᴅᴇʟ ɢʀᴜᴘᴏ)_
┃ ➫ ❏ ${prefix}ᴀɴᴜʟᴀʀʟɪɴᴋ 
┃ ➫ ❏ ${prefix}ʀᴇsᴇᴛʟɪɴᴋ _(ʀᴇsᴛᴀʙʟᴇᴄᴇ ᴇʟ ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ)_
┃ ➫ ❏ ${prefix}ʜɪᴅᴇᴛᴀɢ _(ᴇᴛɪǫᴜᴇᴛᴀ ᴀ ᴛᴏᴅᴏs ᴇʟ ᴜɴ ᴍᴇɴsᴀᴊᴇ)_
┃ ➫ ❏ ${prefix}ᴛᴀɢᴀʟʟ 
┃ ➫ ❏ ${prefix}ɪɴᴠᴏᴄᴀʀ _(ᴇᴛɪǫᴜᴇᴛᴀ ᴀ ᴛᴏᴅᴏs ᴇʟ ᴜɴᴀ ʟɪsᴛᴀs)_
┃ ➫ ❏ ${prefix}ʟɪsᴛᴏɴʟɪɴᴇ _(ᴜsᴜᴀʀɪᴏs ǫᴜᴇ ᴇsᴛᴀ ᴏɴʟɪɴᴇ)_
*◆━━━━━━◆❃◆━━━━━━◆*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔎⃐ｂｕｓｃａｄｏｒｅｓ*️⃟ᬽ፝֟━*
┃ ➫ ❏ ${prefix}ɢᴏᴏɢʟᴇ _(ʙᴜsᴄᴀʀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴄᴏɴ ɢᴏᴏɢʟᴇ)_
┃ ➫ ❏ ${prefix}ᴄʜᴀᴛɢᴘᴛ
┃ ➫ ❏ ${prefix}ɪᴀ _(ʙᴜsᴄᴀʀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴄᴏɴ ʟᴀ ɪᴀ)_
┃ ➫ ❏ ${prefix}ɢᴘᴛ4ᴏ _(ʙᴜsᴄᴀʀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴄᴏɴ ʟᴀ ɪᴀ)_
┃ ➫ ❏ ${prefix}ɢɴᴜʟᴀ _( ʙᴜsᴄᴀ ᴘᴇʟɪᴄᴜʟᴀs ᴇɴ ʟɪɴᴇᴀ)_
┃ ➫ ❏ ${prefix}ʙᴀʀᴅ _(ʙᴜsᴄᴀʀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ)_
┃ ➫ ❏ ${prefix}ɪᴍᴀɢᴇɴ _(ɪᴍᴀɢᴇɴ ᴇɴ ɢᴏᴏɢʟᴇ)_
┃ ➫ ❏ ${prefix}ᴛʀᴀᴅᴜᴄɪʀ _(ᴛʀᴀᴅᴜᴄɪʀ ᴀʟɢᴜɴ ᴛᴇxᴛᴏ)_
┃ ➫ ❏ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ _(ɪᴍᴀɢᴇɴ ᴅᴇʟ ᴡᴀʟʟᴘᴀᴘᴇʀ)_
┃ ➫ ❏ ${prefix}ss _(ʟɪɴᴋ)_
┃ ➫ ❏ ${prefix}ᴅᴀʟʟ-ᴇ
┃ ➫ ❏ ${prefix}ɪᴀ2 _(ᴄʀᴇᴀʀ ɪᴍᴀɢᴇɴ ᴄᴏɴ ʟᴀ (ɪᴀ)_
┃ ➫ ❏ ${prefix}ʜᴏʀᴀʀɪᴏ
*◆━━━━━━◆❃◆━━━━━━◆*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👾ｊｕｅｇｏｓ*️⃟ᬽ፝֟━*
┃ ➫ ❏ ${prefix}sɪᴍɪ _(ʜᴀʙʟᴀʀ ᴄᴏɴ ᴇʟ ʙᴏᴛ)_
┃ ➫ ❏ ${prefix}ᴘᴘᴛ _(ᴘɪᴇᴅʀᴀ, ᴘᴀᴘᴇʟ, ᴏ ᴛɪᴊᴇʀᴀ)_
┃ ➫ ❏ ${prefix}ɢᴀʏ @ᴛᴀɢ
┃ ➫ ❏ ${prefix}ᴘᴀʀᴇᴊᴀ @ᴛᴀɢ
┃ ➫ ❏ ${prefix}ʟᴏᴠᴇ @ᴛᴀɢ
┃ ➫ ❏ ${prefix}ғᴏʟʟᴀʀ @ᴛᴀɢ
┃ ➫ ❏ ${prefix}ᴛᴏᴘɢᴀʏs
┃ ➫ ❏ ${prefix}ᴛᴏᴘᴏᴛᴀᴋᴜs
┃ ➫ ❏ ${prefix}ᴛᴏᴘ
┃ ➫ ❏ ${prefix}ᴘʀᴇɢᴜɴᴛᴀ
┃ ➫ ❏ ${prefix}ᴠᴇʀᴅᴀᴅ
┃ ➫ ❏ ${prefix}ʀᴇᴛᴏ
┃ ➫ ❏ ${prefix}ᴅᴏxᴇᴀʀ
┃ ➫ ❏ ${prefix}ᴍᴀᴛʜ
┃ ➫ ❏ ${prefix}ᴍᴀᴛᴇᴍᴀᴛɪᴄᴀs
┃ ➫ ❏ ${prefix}ᴛᴛᴛ
┃ ➫ ❏ ${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ
┃ ➫ ❏ ${prefix}ᴛᴛᴄ
┃ ➫ ❏ ${prefix}ᴅᴇʟᴛᴛᴛ
┃ ➫ ❏ ${prefix}ᴘᴇʀsᴏɴᴀʟɪᴅᴀᴅ
┃ ➫ ❏ ${prefix}ʀᴀᴄɪsᴛᴀ
┃ ➫ ❏ ${prefix}sʟᴏᴛ
┃ ➫ ❏ ${prefix}ᴅᴀᴅᴏ
┃ ➫ ❏ ${prefix}ᴘɪʀᴏᴘᴏ
┃ ➫ ❏ ${prefix}sʜɪᴘ
┃ ➫ ❏ ${prefix}ғᴏʀᴍᴀʀᴛʀɪᴏ
┃ ➫ ❏ ${prefix}ғᴏʀᴍᴀᴘᴀʀᴇᴊᴀ5
┊┃ ❏ ${prefix}ᴛxᴛ _(ᴛᴇxᴛᴏ)_
┃ ➫ ❏ ${prefix}ғᴀᴋᴇ _(ᴛᴇxᴛᴏ + ᴛᴀɢ)_
*◆━━━━━━◆❃◆━━━━━━◆*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🎤 ᴇғᴇᴄᴛᴏs ᴅᴇ ᴀᴜᴅɪᴏs*️⃟ᬽ፝֟━*
├❥ᰰຼ *(𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
┃ ➫ ❏ ${prefix}ʙᴀss
┃ ➫ ❏ ${prefix}ʙʟᴏᴡɴ
┃ ➫ ❏ ${prefix}ᴅᴇᴇᴘ
┃ ➫ ❏ ${prefix}ᴇᴀʀʀᴀᴘᴇ
┃ ➫ ❏ ${prefix}ғᴀsᴛ
┃ ➫ ❏ ${prefix}ғᴀᴛ
┃ ➫ ❏ ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ
┃ ➫ ❏ ${prefix}ʀᴇᴠᴇʀsᴇ
┃ ➫ ❏ ${prefix}ʀᴏʙᴏᴛ
┃ ➫ ❏ ${prefix}sʟᴏᴡ
┃ ➫ ❏ ${prefix}sᴍᴏᴏᴛʜ
┃ ➫ ❏ ${prefix}sǫᴜɪʀʀᴇʟ
*◆━━━━━━◆❃◆━━━━━━◆*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🧧ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs*️⃟ᬽ፝֟━*
┃ ➫ ❏ ${prefix}ᴛᴏᴜʀʟ
┃ ➫ ❏ ${prefix}ᴛᴛs
┃ ➫ ❏ ${prefix}ᴛᴏᴍᴘ3
┃ ➫ ❏ ${prefix}ᴛᴏɪᴍɢ
┃ ➫ ❏ ${prefix}ᴛᴏᴀᴜᴅɪᴏ
┃ ➫ ❏ ${prefix}ᴛᴏᴀɴɪᴍᴇ
┃ ➫ ❏ ${prefix}ʜᴅ
*◆━━━━━━◆❃◆━━━━━━◆* 	

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🥵ᴄᴏᴍᴀɴᴅᴏ +18*️⃟ᬽ፝֟━*
├❥ᰰຼ  *ᴀᴄᴛɪᴠᴀ ᴄᴏɴ (ᴀɴᴛɪɴsғᴡ ᴏɴ)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
┃ ➫ ❏ ${prefix}ᴘᴜssʏ
┃ ➫ ❏ ${prefix}ɴsғᴡʟᴏʟɪ
┃ ➫ ❏ ${prefix}ʜᴇɴᴛᴀɪ
┃ ➫ ❏ ${prefix}ʜᴇɴᴛᴀɪ2
┃ ➫ ❏ ${prefix}ᴘᴀᴄᴋ
┃ ➫ ❏ ${prefix}ᴘᴀᴄᴋ2
┃ ➫ ❏ ${prefix}ᴘᴀᴄᴋ3
┃ ➫ ❏ ${prefix}ᴠɪᴅᴇᴏxxx
┃ ➫ ❏ ${prefix}ᴠɪᴅᴇᴏxxxʟᴇsʙɪ
┃ ➫ ❏ ${prefix}ᴘᴏʀɴᴏʟᴇsʙɪᴀɴᴀᴠɪᴅ
┃ ➫ ❏ ${prefix}ᴠɪᴅᴇᴏʟᴇsʙɪxxx
┃ ➫ ❏ ${prefix}ᴘᴏʀɴᴏ
┃ ➫ ❏ ${prefix}ʟᴇᴡᴅ
┃ ➫ ❏ ${prefix}ғᴇᴇᴅ
┃ ➫ ❏ ${prefix}ɢᴀsᴍ
┃ ➫ ❏ ${prefix}ᴀɴᴀʟ	    	
┃ ➫ ❏ ${prefix}ʜᴏʟᴏ	    	
┃ ➫ ❏ ${prefix}ᴛɪᴛs	    	
┃ ➫ ❏ ${prefix}ᴋᴜɴɪ
┃ ➫ ❏ ${prefix}ᴋɪss
┃ ➫ ❏ ${prefix}ᴇʀᴏᴋ
┃ ➫ ❏ ${prefix}sᴍᴜɢ
┃ ➫ ❏ ${prefix}sᴏʟᴏɢ
┃ ➫ ❏ ${prefix}ғᴇᴇᴛɢ
┃ ➫ ❏ ${prefix}ʟᴇᴡᴅᴋ    
┃ ➫ ❏ ${prefix}ғᴇᴍᴅᴏᴍ
┃ ➫ ❏ ${prefix}ᴄᴜᴅᴅʟᴇ
┃ ➫ ❏ ${prefix}ᴇʀᴏʏᴜʀɪ
┃ ➫ ❏ ${prefix}ᴄᴜᴍ	    
┃ ➫ ❏ ${prefix}ʙʟᴏᴡᴊᴏʙ
┃ ➫ ❏ ${prefix}ʜᴏʟᴏᴇʀᴏ
┃ ➫ ❏ ${prefix}ᴇʀᴏᴋᴇᴍᴏ
┃ ➫ ❏ ${prefix}ғᴏx_ɢɪʀʟ
┃ ➫ ❏ ${prefix}ғᴜᴛᴀɴᴀʀɪ
┃ ➫ ❏ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ	   
├❥ᰰຼ *ɴᴏᴛᴀ: ᴜsᴀʀʟᴏ ʙᴀᴊᴀ ᴛᴜ ʀᴇsᴘᴏɴsᴀʙɪʟɪᴅᴀᴅ*
*◆━━━━━━◆❃◆━━━━━━◆* 	
	
╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⛩️ ⃐ʀᴀɴᴅᴏᴡ*️⃟ᬽ፝֟━*
┃ ➫ ❏ ${prefix}ᴍᴇᴍᴇs
┃ ➫ ❏ ${prefix}ʜᴏʀɴʏ
┃ ➫ ❏ ${prefix}sɪᴍᴘ
┃ ➫ ❏ ${prefix}ʟᴏʟɪᴄᴇ
┃ ➫ ❏ ${prefix}ᴄᴏᴍᴇɴᴛᴀʀ
┃ ➫ ❏ ${prefix}ᴄᴏᴍᴍᴇɴᴛ
┃ ➫ ❏ ${prefix}ʟᴏʟɪ
┃ ➫ ❏ ${prefix}ʟᴏʟɪᴠɪᴅ
┃ ➫ ❏ ${prefix}ɴᴇᴋᴏ
┃ ➫ ❏ ${prefix}ᴡᴀɪғᴜ	
┃ ➫ ❏ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ
┃ ➫ ❏ ${prefix}ɴᴀᴠɪᴅᴀᴅ
┃ ➫ ❏ ${prefix}ᴀᴋɪʀᴀ
┃ ➫ ❏ ${prefix}ᴀᴋɪʏᴀᴍᴀ
┃ ➫ ❏ ${prefix}ᴀɴɴᴀ
┃ ➫ ❏ ${prefix}ᴀsᴜɴᴀ
┃ ➫ ❏ ${prefix}ᴀʏᴜᴢᴀᴡᴀ
┃ ➫ ❏ ${prefix}ʙᴏʀᴜᴛᴏ
┃ ➫ ❏ ${prefix}ᴄʜɪʜᴏ
┃ ➫ ❏ ${prefix}ᴄʜɪᴛᴏɢᴇ
┃ ➫ ❏ ${prefix}ᴅᴇɪᴅᴀʀᴀ
┃ ➫ ❏ ${prefix}ᴇʀᴢᴀ
┃ ➫ ❏ ${prefix}ᴇʟᴀɪɴᴀ
┃ ➫ ❏ ${prefix}ᴇʙᴀ
┃ ➫ ❏ ${prefix}ᴇᴍɪʟɪᴀ
┃ ➫ ❏ ${prefix}ʜᴇsᴛɪᴀ
┃ ➫ ❏ ${prefix}ʜɪɴᴀᴛᴀ
┃ ➫ ❏ ${prefix}ɪɴᴏʀɪ
┃ ➫ ❏ ${prefix}ɪsᴜᴢᴜ
┃ ➫ ❏ ${prefix}ɪᴛᴀᴄʜɪ
┃ ➫ ❏ ${prefix}ɪᴛᴏʀɪ
┃ ➫ ❏ ${prefix}ᴋᴀɢᴀ
┃ ➫ ❏ ${prefix}ᴋᴀɢᴜʀᴀ
┃ ➫ ❏ ${prefix}ᴋᴀᴏʀɪ':
┃ ➫ ❏ ${prefix}ᴋᴇɴᴇᴋɪ
┃ ➫ ❏ ${prefix}ᴋᴏᴛᴏʀɪ
┃ ➫ ❏ ${prefix}ᴋᴜʀᴜᴍɪ
┃ ➫ ❏ ${prefix}ᴍᴀᴅᴀʀᴀ
┃ ➫ ❏ ${prefix}ᴍɪᴋᴀsᴀ
┃ ➫ ❏ ${prefix}ᴍɪᴋᴜ
┃ ➫ ❏ ${prefix}ᴍɪɴᴀᴛᴏ
┃ ➫ ❏ ${prefix}ɴᴀʀᴜᴛᴏ
┃ ➫ ❏ ${prefix}ɴᴇᴢᴜᴋᴏ
┃ ➫ ❏ ${prefix}sᴀɢɪʀɪ
┃ ➫ ❏ ${prefix}sᴀsᴜᴋᴇ
┃ ➫ ❏ ${prefix}sᴀᴋᴜʀᴀ
┃ ➫ ❏ ${prefix}'ᴄᴏsᴘʟᴀʏ
*◆━━━━━━◆❃◆━━━━━━◆*
             
*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🪙 ｅｃｏｎｏｍｉａ*️⃟ᬽ፝֟━*
┃ ➫ ❏ ${prefix}ᴍɪɴᴀʀ _(ᴘᴀʀᴀ ᴍɪɴᴀʀ ᴇxᴘ)_
┃ ➫ ❏ ${prefix}ʀᴏʙᴀʀ
┃ ➫ ❏ ${prefix}ʀᴏʙ _(ʀᴏʙᴀ ᴇxᴘ ᴀʟɢᴜɴ ᴜsᴜᴀʀɪᴏs)_
┃ ➫ ❏ ${prefix}ᴄʀɪᴍᴇ
┃ ➫ ❏ ${prefix}ᴛʀᴀʙᴀᴊᴀʀ
┃ ➫ ❏ ${prefix}ᴡᴏʀᴋ _(ᴛʀᴀʙᴀᴊᴀ ʏ ɢᴀɴᴀs ᴇxᴘ)_
┃ ➫ ❏ ${prefix}ʙᴜʏ _(ᴄᴏᴍᴘʀᴀʀ ᴍᴀs ᴅɪᴀᴍᴀɴᴛᴇs (ʟɪᴍɪᴛ)_
┃ ➫ ❏ ${prefix}ʙᴀʟ
┃ ➫ ❏ ${prefix}ʙᴀʟᴀᴄᴇ _(ᴅɪᴀᴍᴀɴᴛᴇ/ᴇxᴘ ᴛᴇɴᴇs)_
┃ ➫ ❏ ${prefix}ᴄʟᴀɪᴍ
├❥ᰰຼ _(ʀᴇᴄᴏɢᴇʀ ᴛᴜ ʀᴇᴄᴏᴍᴘᴇɴsᴀ)_
┃ ➫ ❏ ${prefix}ʟʙ
┃ ➫ ❏ ${prefix}ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
┃ ➫ ❏ ${prefix}ᴄᴏғʀᴇ
┃ ➫ ❏ ${prefix}ᴘᴇʀғɪʟ
┃ ➫ ❏ ${prefix}ɴɪᴠᴇʟ
┃ ➫ ❏ ${prefix}ʟᴇᴠᴇʟᴜᴘ
┃ ➫ ❏ ${prefix}ᴛʀᴀɴsғᴇʀɪʀ
┃ ➫ ❏ ${prefix}ᴛʀᴀɴsғᴇʀ
┃ ➫ ❏ ${prefix}ᴀғᴋ 
*◆━━━━━━◆❃◆━━━━━━◆*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👽ｓｔｉｃｋｅｒ*️⃟ᬽ፝֟━*
├❥ *(ᴄʀᴇᴀʀ sᴛɪᴄᴋᴇʀ ᴅᴇsᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴄᴏɴ ᴀɴsɪʙᴏᴛ)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
┃ ➫ ❏ ${prefix}s
┃ ➫ ❏ ${prefix}sᴛɪᴄᴋᴇʀ 
┃ ➫ ❏ ${prefix}ᴡᴍ
┃ ➫ ❏ ${prefix}ᴀᴛᴛᴘ
┃ ➫ ❏ ${prefix}ǫᴄ
┃ ➫ ❏ ${prefix}ᴇᴍᴏᴊɪᴍɪx
*◆━━━━━━◆❃◆━━━━━━◆*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👑ｏｗｎｅｒ*️⃟ᬽ፝֟━*
├❥ _(ᴄᴏᴍᴀɴᴅᴏ ᴇxᴄʟᴜsɪᴠᴏ ᴘᴀʀᴀ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ/ᴏᴡɴᴇʀ ᴅᴇʟ ʙᴏᴛ)_
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
┃ ➫ ❏ ${prefix}ᴀɴᴛɪᴄᴀʟʟ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀɴᴛɪʟʟᴀᴍᴀᴅᴀ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀɴᴛɪᴘᴠ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀᴜᴛᴏʀᴇᴀᴅ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴍᴏᴅᴏᴊᴀᴅɪʙᴏᴛ _(ᴏɴ/ᴏғғ)_
┃ ➫ ❏ ${prefix}ᴀñᴀᴅɪʀᴅɪᴀᴍᴀɴᴛᴇs _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ᴀᴅᴅʟɪᴍɪᴛ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ᴅᴀʀᴅɪᴀᴍᴀɴᴛᴇs _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ᴀñᴀᴅɪʀxᴘ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ᴀᴅᴅxᴘ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ʙᴀɴᴜsᴇʀ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ᴜɴʙᴀɴᴜsᴇʀ _(@ᴛᴀɢ)_
┃ ➫ ❏ ${prefix}ᴀᴜᴛᴏᴀᴅᴍɪɴ 
┃ ➫ ❏ ${prefix}ɴᴜᴇᴠᴏɴᴏᴍʙʀᴇ
┃ ➫ ❏ ${prefix}ʙᴏᴛɴᴀᴍᴇ _(ᴄᴀᴍʙɪᴀʀ ᴇʟ ɴᴀᴍᴇ ᴅᴇʟ ʙᴏᴛ)_
┃ ➫ ❏ ${prefix}ɴᴜᴇᴠᴀғᴏᴛᴏ
┃ ➫ ❏ ${prefix}sᴇᴘᴘʙᴏᴛ
┃ ➫ ❏ ${prefix}ғᴏᴛᴏʙᴏᴛ _(ᴄᴀᴍʙɪᴀʀ ʟᴀ ғᴏᴛᴏ ᴅᴇʟ ʙᴏᴛ)_
┃ ➫ ❏ ${prefix}ʙᴄ (ᴅɪғᴜsɪᴏɴ ᴀ ᴛᴏᴅᴏs ʟᴏs ᴄʜᴀᴛ)
┃ ➫ ❏ ${prefix}ʙᴄɢᴄ (ᴅɪғᴜsɪᴏɴ sᴏʟᴏ ᴀ ɢʀᴜᴘᴏs)
┃ ➫ ❏ ${prefix}sᴇᴛᴘᴘ (ᴄᴀᴍʙɪᴀ ʟᴀ ғᴏᴛᴏ ᴅᴇʟ ʙᴏᴛ) 
┃ ➫ ❏ ${prefix}ᴘᴜʙʟɪᴄ (ᴍᴏᴅᴏ ᴘᴜʙʟɪᴄᴏ) 
┃ ➫ ❏ ${prefix}ᴘʀɪᴠᴀᴅᴏ (ᴍᴏᴅᴏ ᴘʀɪᴠᴀᴅᴏ) 
┃ ➫ ❏ ${prefix}ɢᴇᴛᴄᴀsᴇ
┃ ➫ ❏ ${prefix}ғᴇᴛᴄʜ
┃ ➫ ❏ ${prefix}ᴜᴘᴅᴀᴛᴇ
┃ ➫ ❏ ${prefix}ʀᴇsᴛᴀʀᴛ 
┃ ➫ ❏ ${prefix}ʀᴇɪɴɪᴄɪᴀʀ
┃ ➫ ❏ $ 
┃ ➫ ❏ >
┃ ➫ ❏ => 
*◆━━━━━━◆❃◆━━━━━━◆*`;

    const menu2 = `
    a 🥵
    Feliz Navidad 🎄
    Merry Christmas 🎅
    Feliz cumpleaños 🎂
    Pasa pack 📦
    Uwu 😳
    Siuuuu ⚽
    Hola 👋
    Hello 👋
    Vete a la verga 😠
    Pasen porno 🔞
    Hora del sexito 🍑
    Pongan cuties 😊
    Fiesta del admin 🎉
    Viernes 🕺
    GOOOOOD 👍
    Alto temazo 🎶
    Todo bien ✅
    Buenos días 🌅
    Bot gay 🏳️‍🌈
    Gracias 🙏
    Fua 🤯
    Fino señores 🧐🍷
    Corte ✂️
    Gaspi buenos días ☀️
    Gaspi me saludas 🙋
    Gaspi y las minitas 💃
    Gaspi todo bien 🤙
    Gaspi ya no aguanto 😩
    Contate algo bot 🤖
    Sexo 🔥
    Momento épico 😎
    El bot del orto no funciona 🛠️
    Epicardo 🔥
    Insta de la minita 📸
    Una mierda de bot 🤬
    Último momento 📰
    Nefasto 👎
    Paraguayo 🇵🇾
    Bot de mierda 🤬
    Venezolano 🇻🇪
    A nadie le importa 🙄
    Gaspi corte 😎
    Ya me voy a dormir 😴
    Calefón 🔥
    Apurate bot ⏳
    Un chino 🇨🇳
    No funciona 🚫
    Boliviano 🇧🇴
    Enano 👶
    ¿Quién es tu sempai botsito? 😳
    Me gimes 7u7 💦
    Te amo botsito uwu ❤️
    Onichan 😳
    La toca 7w7 👀
    Autodestruction 💣
    `;

    conn.fakeReply(
        m.chat, 
        `*✨ 𝙀𝙎𝙋𝙀𝙍𝘼 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 .*\n\n> No hagas spam de comandos`, 
        '0@s.whatsapp.net', 
        '𝙀𝙉𝙑𝙄𝘼𝙉𝘿𝙊 𝙈𝙀𝙉𝙐 ⌛'
    );

    m.react('✨');

    sleep(2000).then(() => {
        if (command === 'allmenu' || command === 'menu') {
            const menuimg2 = 'https://i.ibb.co/NK3G4Pq/20241104-165340.jpg';

            conn.sendFile(m.chat, menuimg2, 'menu.jpg', menu, m);
        }

        if (command === 'menu2' || command === 'audio') {
            conn.sendMessage(m.chat, { 
                text: menu2 
            }, { quoted: m });
        }
    });
};

module.exports = { menu };

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});
