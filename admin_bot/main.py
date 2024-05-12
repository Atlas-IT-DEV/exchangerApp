from telebot import TeleBot
import os
import sys
import requests
from dotenv import load_dotenv
sys.path.insert(0, '')
import app_logs

# import cryptography
# from cryptography.fernet import Fernet
# Generate key
# key = Fernet.generate_key()
# cipher_suite = Fernet(key)

load_dotenv()

bot = TeleBot(os.getenv('ADMINS_KEY'))

logger = app_logs.adminLogger

# fast api url
BASE_URL = 'http://127.0.0.1:8008'

@bot.message_handler(commands=['start'])
def start(message, res=False):
    username = message.from_user.username
    logger.log('info', (f"User {message.from_user.username} - {message.from_user.id} launched the bot with the command /start"))
    bot.send_message(message.chat.id, f'Добро пожаловать в бот для администраторов, {username}!')
    
@bot.message_handler(commands=['text'])
def answer(message):
    text = message.text.split(' ', 1)[1]
    logger.log('info', (f"Get message from user {message.from_user.username} - {message.from_user.id}: {text}"))
    bot.send_message(message.chat.id, text)
    
@bot.message_handler(commands=['hello'])
def getHello(message):
    response = requests.get(f"{BASE_URL}/hello")
    data = response.json()
    bot.send_message(message.chat.id, data['message'])
    
# def encrypt_and_log_data(data):
#     encrypted_data = cipher_suite.encrypt(data.encode())
#     print(decrypt_data(encrypted_data))
#     logger.log('info', (f"Event: {encrypted_data}"))

# def decrypt_data(encrypted_data):
#     decrypted_data = cipher_suite.decrypt(encrypted_data)
#     return decrypted_data.decode()

if __name__ == '__main__':
    bot.infinity_polling()