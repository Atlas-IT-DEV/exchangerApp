from telebot import TeleBot
import os
import sys
from dotenv import load_dotenv
sys.path.insert(0, '')
import app_logs

load_dotenv()

bot = TeleBot(os.getenv('APP_KEY'))

logger = app_logs.userLogger

# fast api url
BASE_URL = str(os.getenv('FAST_API_URL'))

'''
    Пример использования:
        logger.log('info', (f"User {message.from_user.username} launched the bot with the command /start"))
    Варианты уровня логирования:
        info
        debug
        error
    Кириллицу НЕ настраивал, так что пока там только английсякий нормально записывается
'''

@bot.message_handler(commands=['start'])
def start(m, res=False):
    username = m.from_user.username
    bot.send_message(m.chat.id, f'Welcome to exchanger App {username}')

if __name__ == "__main__":
    bot.infinity_polling()
