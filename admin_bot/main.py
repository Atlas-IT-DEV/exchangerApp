from telebot import TeleBot
import os
import requests
from dotenv import load_dotenv

load_dotenv()

bot = TeleBot(os.getenv('ADMINS_KEY'))

# fast api url
BASE_URL = 'http://127.0.0.1:8008'

@bot.message_handler(commands=['start'])
def start(m, res=False):
    username = m.from_user.username
    bot.send_message(m.chat.id, f'Добро пожаловать в бот для администраторов, {username}!')
    
@bot.message_handler(commands=['text'])
def answer(message):
    bot.send_message(message.chat.id, 'example')
    
@bot.message_handler(commands=['hello'])
def getHello(message):
    response = requests.get(f"{BASE_URL}/hello")
    data = response.json()
    bot.send_message(message.chat.id, data['message'])

if __name__ == '__main__':
    bot.infinity_polling()