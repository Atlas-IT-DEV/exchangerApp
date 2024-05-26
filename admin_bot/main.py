from telebot import TeleBot
import os
import sys
import requests
from dotenv import load_dotenv
sys.path.insert(0, '')
import app_logs

# Это для шифрования логов
import cryptography
from cryptography.fernet import Fernet
# Generate key
key = Fernet.generate_key()
cipher_suite = Fernet(key)

load_dotenv()

bot = TeleBot(os.getenv('ADMINS_KEY'))

logger = app_logs.adminLogger

# fast api url
BASE_URL = str(os.getenv('FAST_API_URL'))

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
    try:
        response = requests.get(f"{BASE_URL}/hello")
        logger.log('info', (f"Success: get hello message from API"))
        data = response.json()
        bot.send_message(message.chat.id, data['message'])
    except Exception:
        logger.log('error', (f"Error: {Exception}"))
        
@bot.message_handler(commands=['getTariffList'])
def getTariffList(message):
    try:
        response = requests.get(f"{BASE_URL}/getAllTariffs")
        data = response.json()
        headings = ["Id", "Name", "Coefficient", "Period"]
        body = []
        for elem in data:
            # str_answer += f"Id: {elem['id']} | Name: {elem['name']} | Coefficient: {elem['coefficient']} | Mounth period: {elem['mounth_period']}\n"
            body.append([str(elem['id']), str(elem['name']), str(elem['coefficient']), str(elem['mounth_period'])])
        
        str_answer = 'List of existing tariffs:\n' + f'<pre>{myCreateTableStr(headings, body)}</pre>' + '\n' 

        bot.send_message(message.chat.id, str_answer, parse_mode='HTML')
        encrypt_and_log_data(f"User {message.from_user.username} - {message.from_user.id} launched the bot with the command /getTariffList")
        
        # bot.send_message(message.chat.id, '<b>some text</b>', parse_mode='HTML')
    except Exception as e:
        if hasattr(e, 'message'):
            logger.log('error', (f"Error: {e.message}"))
        else:
            logger.log('error', (f"Error: {e}"))
        
        
@bot.message_handler(commands=['getTariff'])
def getTariff(message):
    try:
        tariff_id = message.text.split(' ', 1)[1]
        query_params = {
            "id": tariff_id
        }
        response = requests.get(f"{BASE_URL}/getTariff", params=query_params)
        data = response.json()
        bot.send_message(message.chat.id, data)
    except Exception:
        logger.log('error', (f"Error: {Exception}"))
        
# вывод таблицы с колонками максимальной длинны строки каждого столбца 
def myCreateTableStr(headings, body):
    total_str_table = "\n"

    # расчёт максимальной длинны колонок
    max_columns = [] # список максимальной длинны колонок
    for col in zip(*body):
        len_el = []
        [len_el.append(len(el)) for el in col]  
        max_columns.append(max(len_el) + 2)
        
    for index, col in enumerate(headings):
        if max_columns[index] < len(col):
            max_columns[index] = len(col) + 1

    # печать шапки таблицы
    for n, column in enumerate(headings):
        total_str_table += f'{column:{max_columns[n]+1}}'
    total_str_table += '\n'

    # печать разделителя шапки '='
    total_str_table += f'{"="*sum(max_columns)+"="*3}\n'

    # печать тела таблицы
    for el in body:
        support_str = ""
        for n, col in enumerate(el):
            support_str += f'{col:{max_columns[n]+1}}'
        total_str_table += f'{support_str}\n'
    
    return total_str_table

def encrypt_and_log_data(data):
    encrypted_data = cipher_suite.encrypt(data.encode())
    print(decrypt_data(encrypted_data))
    logger.log('info', (f"Event: {encrypted_data}"))

def decrypt_data(encrypted_data):
    decrypted_data = cipher_suite.decrypt(encrypted_data)
    return decrypted_data.decode()

if __name__ == '__main__':
    bot.infinity_polling()