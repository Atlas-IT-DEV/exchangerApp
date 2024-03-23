from telebot import TeleBot
import os
from dotenv import load_dotenv

load_dotenv()

bot = TeleBot(os.getenv('ADMINS_KEY'))

@bot.message_handler(commands=['start'])
def start(m, res=False):
    username = m.from_user.username
    bot.send_message(m.chat.id, f'Добро пожаловать в бот для администраторов {username}')

if __name__ == '__main__':
    bot.infinity_polling()