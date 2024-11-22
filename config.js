//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cadillaccylee111@gmail.com";
global.location = "Johannesburg, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/errrbodyhatescylee/Queen_Kylie-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/yeu6a8.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27693798048";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/tovha7.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kylie-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VaQVlQRlhnRFhmNmJoNUdVSkFkTmt4NWp5VHhtOUpId3BQdVdXZllGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzNCMmZVRmxLNWtGbDIyTVBFZmRQaFhUQVZqU3B6RGVGZFNvR1krdnRFYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQnE2eUQvRjVuV0ZhTHZ4bW9oOFN6c09CMC9CRGVyMFZ3eThHaUhGU0hVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxZFNSSWVsYWo0Nk9qTG10RTY1Q0d1bDY5SXV3Z3RqaXJxTCtOSW5EeWtZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVCSmx6QU9NLzFCcWpJTjIyTFc5ZVBjSmREejFScDU2OHl3L0M4dlNOR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRQWElxc0Ezb2Z3RmVsaWNLRjhxanlTK1RMKzV3ZlV6K3B3VzdscTFQVFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0lacGdHUGM5aFBTYXZYSkxDOFcwOHorcDZqR2VzYXJYczUzUkovc21YVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHdDb3pOdUd0bFp5eSszazZuMGMvTXZJUFU5dEl2UUpvdHBpbUlkMnJ3TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh1bXRnbi9sM1U3S2RuU1dOajgxZ0RKeVBkeS8rRWUzOVppYTl2ZU5HbExUZ3k4Qk9UVXhKZDBqTXhvOEhmRTI1MjJ0VXpLMyt5UDZFdVNLV01jc2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiIrQ2M0dk5BaXcxWTlrbEZpMTM1K0lKQ1hReGxVQ3hJY1dvR1g0TW1JWC9RPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMjk5MDQyMjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTgzRTM0OUQ0MjZDNEFFREFBRTYwRjE0RUVCRUVDQkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjI4NzEyMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEyOTkwNDIyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDOEUyQjQ0NEIzMzY4REVGNzdBMDU1QjI4MjZFMTdGMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMyMjg3MTIzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoU3RrYUpGNFNIYXBVRE1rQ0lOdmZnIiwicGhvbmVJZCI6ImRhOWE5MjM0LTJlMmEtNGY3Yy1iNDMxLWM0NmNkZDI4MTEzNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWZ0EwbGN3RktIN1JuMEtMWGgvdDVGQTkvMHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFIwZ1hDeVFzaWdFSlZacm5rbzVMRzJFa1M0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjM4UENaUTVFIiwibWUiOnsiaWQiOiIyMzQ4MTI5OTA0MjI4OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ2jDrmxsYsO4eSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXl3ak9jRUVJRzFncm9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicXVlT0pFTVNkUnl1MkNoaWVuMGFqTENuNHpadFErS244VE50T2NSdkN3RT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicktRZlJjcmVibS9Vd01kUDBwQ3RCdlJtNmtwbGFsU3BVTVZUdCtsZ3BnYXdTdnVueEpISm1zbnJ3MWJHK2o1cTc2bGFHUGRjb2hzTHZRelZ5QXFvRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkRFTDhkYmdUVTh3RGFtQWJLRUNsTldIS1Z4MjY2anpPRzJhRU03dVc4TXcwektwR09zQmZMVjZnbnZOSG1CTDRMdHh3aFhuNS9yS1VmWUk3V1I4QmpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEyOTkwNDIyODo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFybmppUkRFblVjcnRnb1lucDlHb3l3cCtNMmJVUGlwL0V6YlRuRWJ3c0IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzIyODcxMTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2t0In0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_KYLIE-V1👸❤️🧸❄️™`",
  author: process.env.PACK_AUTHER || "Kylie",
  packname: process.env.PACK_NAME || "Sir Cylee",
  botname: process.env.BOT_NAME || "QUEEN_KYLIE",
  ownername: process.env.OWNER_NAME || "Sir Cylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "k y l i e").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
