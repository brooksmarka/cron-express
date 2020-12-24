const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
 
const token = process.env.TELEGRAM_TOKEN;
let bot;

 
// if (process.env.NODE_ENV === 'production') {
//    bot = new TelegramBot(token);
//    bot.setWebHook(process.env.HEROKU_URL + bot.token);
// } else {
   bot = new TelegramBot(token, { polling: true });
// }

bot.sendMessage(process.env.TELEGRAM_CHAT_ID, "Ski Scraper Bot has started!")

bot.on('message', (msg) => {

    var hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id,"Thanks for using Ski Scraper!  Here is your chat ID" + msg.chat.id);
    } 
        
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "See you on the slopes, Bye");
    } 
    
    });

    bot.onText(/\/start/, (msg) => {

        bot.sendMessage(msg.chat.id, "Welcome");
            
        });
      
