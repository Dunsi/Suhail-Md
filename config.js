const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="ekiti, Nigeria."


global.mongodb= process.env.MONGODB_URI || "Mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/DrkuCkLXUs32wyBFmBnSUA";
global.website=process.env.GURL || "https://chat.whatsapp.com/DrkuCkLXUs32wyBFmBnSUA" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348143728690" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348143728690";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348143728690,2348143728690";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2348143728690";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348143728690,2348143728690";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_24_03_26_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOEVvRERXLzRwYVRsTjBtOEZ6eWlMbXlzcGNEMEpJdFA4MmphQUtuS1UwYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIko1NExENVdFREwxYllaQTJqZkcrZWh0RXZMU3JiOENTQVJnd2p5SDBUVzQ9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY0VFRGRVcjZLQWhUWE1zMUZVL2ZmQkpaUzBoQXhhYlh2dmhEQVdUbjBsWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjVlb1BOZ3I5ZHJFQ1QwNjduYWVKL1NscE5wdnI2RHl2U29Ea0VHYlo3VXM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUt6cVYwbXQrS08yVE0rL3B6WXVrYWtZeU1Gb0xSdmg1WW5vdFhzRi9sRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkl0TTB6UEFPVnNHWmEwbVU3WkhxZEozbUk3Lzd6VUJEMDdDOTI1QWxhRTA9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ3S1J0R2JOT2MxTnAvd0VBRFVGSndocGhwNVpYblVMbjJMTDYzU0ZtOUgwPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiL3M4OTJTalhvdFVVMDRya3o1anptOUMxa3VGWC9WL0daYTd5R3JodVkwOD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJXVHVHZU9xQ085a0FqSEwrVDFnaEVnZHcyeDhnRjNUVDM2TzdQbDIxWGc0OVV6RFZmWXJGUkc4aENqVFBMZ2dDTEZFcVBCZlJIeFRSYlNxOG81MkRpQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjUzLFwiYWR2U2VjcmV0S2V5XCI6XCJuYWIyZWlUYkFqaVZhN05LT3duUy9SSUdmeU9xSEEvQktXOE80dWpyNUJVPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjM0ODE0MzcyODY5MEBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCIwM0FCOUI3M0MzMTE4RDcwOTc2Mzg3RUUzQ0YyMzk5QVwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzExNDM0MjcyfSx7XCJrZXlcIjp7XCJyZW1vdGVKaWRcIjpcIjIzNDgxNDM3Mjg2OTBAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiRjk4MzI4RkRDOEM0NDI0MEQ2NUFCQjgyOTNGOTY5OEFcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTQzNDI3Mn0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyMzQ4MTQzNzI4NjkwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkExMTg1MEIyREU5MzJBMkYyNEI5MDE3MTkzNDI1QzAxXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE0MzQyNzV9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjM0ODE0MzcyODY5MEBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCIzNDBDMjE4NDFCMTA5OTg1RjU3Njg0NTUyNTY2Q0NFRFwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzExNDM0Mjc1fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiX3FmenVkX2hUWXVocjR2VjNYUGM5UVwiLFwicGhvbmVJZFwiOlwiNmIzMDY1NjMtNzJhMC00M2I4LWJlYmYtZjJmNzIxYjczNzBjXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJQMjU3MU56cDVGTjdVdmk5cUIxRGZHQ0dHUTQ9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWi9VWEpLZGhHYmcrNkNmOUc5KzNDL2grRDdVPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIkM4RUY1WDg1XCIsXCJtZVwiOntcImlkXCI6XCIyMzQ4MTQzNzI4NjkwOjZAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTIzNDA3NzgxODc1Nzk3OjZAbGlkXCIsXCJuYW1lXCI6XCJSQVkgQk9UXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNQN3I2bVVRbTlTSnNBWVlBU0FBS0FBPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiU0t3RUVLRDIzTkUrYmpncDVSR2lCQmZsbER5VWpwVGZySnN6YkVqd0xrMD1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIlNOSy8yNFVoa3B4eVV2M21RRXRDMEZkeHdyblR1S2VpenpwUTdvblhMQ2hwbGR6STkwd0RqSXlWYUtRZWloeGNRNTZrOTc4SlV3emErT3lzR2FkQkFBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiOWJXWXZoTHlEK0JDNmpmbUU2NWZMbStHUTJRbkxuUmxvdnphL3lrMTNKY2RKYW1WejdvaDNKNTNNYXMwS0RuR2MvaS9CcFAxVlJodC9ZVm1CZUVXanc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDgxNDM3Mjg2OTA6NkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJVaXNCQkNnOXR6UlBtNDRLZVVSb2dRWDVaUThsSTZVMzZ5Yk0yeEk4QzVOXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMTQzNDI3MSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFKaG5cIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKaG4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiN2VObzZIUXFwYnp2NnVuSUxaeVFVNGUvLyszRUd5V2FWTk1BZ0V1dllBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMzU2Mjg3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "RAY-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "RAY-MD",
  ownername:process.env.OWNER_NAME|| "It'x Raymond",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
