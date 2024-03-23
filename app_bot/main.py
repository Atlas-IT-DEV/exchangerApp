from telebot import TeleBot
import os
from dotenv import load_dotenv

load_dotenv()

bot = TeleBot(os.getenv('APP_KEY'))

@bot.message_handler(commands=['start'])
def start(m, res=False):
    username = m.from_user.username
    bot.send_message(m.chat.id, f'Welcome to exchanger App {username}')

if __name__ == "__main__":
    bot.infinity_polling()
