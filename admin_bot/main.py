from telebot import TeleBot
import os
import sys
import requests
import json
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
       
#############################################################################################################
#                                             USER SECTION
#############################################################################################################

@bot.message_handler(commands=['getUserList'])
def getUserList(message):
    try:
        response = requests.get(f"{BASE_URL}/getAllUsers")
        data = response.json()
        headings = ["Id", "User name", "Count bonuses", "Used referal code"]
        body = []
        
        for elem in data:
            body.append([str(elem['id']), str(elem['user_name']), str(elem['count_bonuses']), str(elem['used_referal_code'])])
        
        str_answer = 'List of existing users:\n' + f'<pre>{myCreateTableStr(headings, body)}</pre>' + '\n' 

        bot.send_message(message.chat.id, str_answer, parse_mode='HTML')
        
        encrypt_and_log_data(f"User {message.from_user.username} - {message.from_user.id} launched the bot with the command /getUserList")
    except Exception as e:
        if hasattr(e, 'message'):
            logger.log('error', (f"Error: {e.message}"))
        else:
            logger.log('error', (f"Error: {e}"))
    
            
@bot.message_handler(commands=['getUser'])
def getUser(message):
    try:
        telegramm_user_name = message.text.split(' ', 1)[1]
        
        query_params = {
            "telegramm_name": telegramm_user_name
        }
        
        response = requests.get(f"{BASE_URL}/getUser", params=query_params)
        response = response.json()
        
        data = f"User info:\n TELEGRAMM ID: {response['telegramm_id']}\n USERNAME: {response['user_name']}\n COUNT BONUSES: {response['count_bonuses']}\n USED REFERAL CODE: {response['used_referal_code']}"
        
        encrypt_and_log_data(f"User {message.from_user.username} - {message.from_user.id} launched the bot with the command /getUser by name {telegramm_user_name}")
       
        bot.send_message(message.chat.id, data)
    except Exception as e:
        if hasattr(e, 'message'):
            logger.log('error', (f"Error: {e.message}"))
        else:
            logger.log('error', (f"Error: {e}")) 
            
            
#############################################################################################################
#                                          MONEY ACCOUNT SECTION
#############################################################################################################

@bot.message_handler(commands=['getStandartAccountList'])
def getAccountStandartList(message):
    try:
        response = requests.get(f"{BASE_URL}/getAllAccountStandarts")
        data = response.json()
        headings = ["Id", "Balance", "User id"]
        body = []
        
        for elem in data:
            body.append([str(elem['id']), str(elem['balance']), str(elem['app_user_id'])])
        
        str_answer = 'List of existing account standart:\n' + f'<pre>{myCreateTableStr(headings, body)}</pre>' + '\n' 

        bot.send_message(message.chat.id, str_answer, parse_mode='HTML')
        
        encrypt_and_log_data(f"User {message.from_user.username} - {message.from_user.id} launched the bot with the command /getStandartAccountList")
    except Exception as e:
        if hasattr(e, 'message'):
            logger.log('error', (f"Error: {e.message}"))
        else:
            logger.log('error', (f"Error: {e}"))


@bot.message_handler(commands=['getStandartAccount'])
def getTariff(message):
    try:
        user_name = message.text.split(' ', 1)[1]
        
        query_params = {
            "userName": user_name
        }
        response = requests.get(f"{BASE_URL}/getAccountStandart", params=query_params)
        response = response.json()
        
        data = f"Standart account info:\n ID: {response['id']}\n BALANCE: {response['balance']}\n APP USER ID: {response['app_user_id']}"
        
        encrypt_and_log_data(f"User {message.from_user.username} - {message.from_user.id} launched the bot with the command /getStandartAccount by name {user_name}")
        
        bot.send_message(message.chat.id, data)
    except Exception as e:
        if hasattr(e, 'message'):
            logger.log('error', (f"Error: {e.message}"))
        else:
            logger.log('error', (f"Error: {e}"))


@bot.message_handler(commands=['getMasterAccountList'])
def getAccountMasterList(message):
    try:
        response = requests.get(f"{BASE_URL}/getAllAccountMasters")
        data = response.json()
        headings = ["Id", "Balance", "Completion date", "User id", "Tariff id"]
        body = []
        
        for elem in data:
            body.append([str(elem['id']), str(elem['balance']), str(elem['completion_date']), str(elem['app_user_id']), str(elem['tariff_id'])])
        
        str_answer = 'List of existing account standart:\n' + f'<pre>{myCreateTableStr(headings, body)}</pre>' + '\n' 

        bot.send_message(message.chat.id, str_answer, parse_mode='HTML')
        
        encrypt_and_log_data(f"User {message.from_user.username} - {message.from_user.id} launched the bot with the command /getMasterAccountList")
    except Exception as e:
        if hasattr(e, 'message'):
            logger.log('error', (f"Error: {e.message}"))
        else:
            logger.log('error', (f"Error: {e}"))


@bot.message_handler(commands=['getMasterAccount'])
def getTariff(message):
    try:
        user_name = message.text.split(' ', 1)[1]
        
        query_params = {
            "user_name": user_name
        }
        response = requests.get(f"{BASE_URL}/getAccountMaster", params=query_params)
        response = response.json()
        
        data = f"Standart account info:\n ID: {response['id']}\n BALANCE: {response['balance']}\n USER NAME: {response['app_user_name']}\n TARIFF NAME: {response['tariff_name']}\n COMPLETION DATE: {response['completion_date']}\n COEFFICIENT: {response['coefficient']}\n TARIFF PERIOD: {response['mounth_period']}"
        
        encrypt_and_log_data(f"User {message.from_user.username} - {message.from_user.id} launched the bot with the command /getMasterAccount by name {user_name}")
        
        bot.send_message(message.chat.id, data)
    except Exception as e:
        if hasattr(e, 'message'):
            logger.log('error', (f"Error: {e.message}"))
        else:
            logger.log('error', (f"Error: {e}"))
    
    
#############################################################################################################
#                                             TARIFF SECTION
#############################################################################################################
        
@bot.message_handler(commands=['getTariffList'])
def getTariffList(message):
    try:
        response = requests.get(f"{BASE_URL}/getAllTariffs")
        data = response.json()
        headings = ["Id", "Name", "Coefficient", "Period"]
        body = []
        
        for elem in data:
            body.append([str(elem['id']), str(elem['name']), str(elem['coefficient']), str(elem['mounth_period'])])
        
        str_answer = 'List of existing tariffs:\n' + f'<pre>{myCreateTableStr(headings, body)}</pre>' + '\n' 

        bot.send_message(message.chat.id, str_answer, parse_mode='HTML')
        
        encrypt_and_log_data(f"User {message.from_user.username} - {message.from_user.id} launched the bot with the command /getTariffList")
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
        response = response.json()
        
        data = f"Tariff info:\n ID: {response['id']}\n NAME: {response['name']}\n COEFICIENT: {response['coefficient']}\n MOUNTH PERIOD: {response['mounth_period']}"
        
        encrypt_and_log_data(f"User {message.from_user.username} - {message.from_user.id} launched the bot with the command /getTariff by id {tariff_id}")
       
        bot.send_message(message.chat.id, data)
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
        response = response.json()
        
        data = f"Tariff info:\n ID: {response['id']}\n NAME: {response['name']}\n COEFICIENT: {response['coefficient']}\n MOUNTH PERIOD: {response['mounth_period']}"
        
        encrypt_and_log_data(f"User {message.from_user.username} - {message.from_user.id} launched the bot with the command /getTariff by id {tariff_id}")
        
        bot.send_message(message.chat.id, data)
    except Exception as e:
        if hasattr(e, 'message'):
            logger.log('error', (f"Error: {e.message}"))
        else:
            logger.log('error', (f"Error: {e}"))
            
            
@bot.message_handler(commands=['createTariff'])
def createTariff(message):
    try:
        request_data = {
            "id": 0,
            "name": message.text.split(' ')[1],
            "coefficient": message.text.split(' ')[2],
            "mounth_period": message.text.split(' ')[3]
        }
        
        response = requests.post(f"{BASE_URL}/createTariff", json=request_data)
        response = response.json()
        
        data = f"New tariff was created success! Server code {response}"
        
        encrypt_and_log_data(f"User {message.from_user.username} - {message.from_user.id} launched the bot with the command /createTariff with data {request_data}")
        
        bot.send_message(message.chat.id, data)
    except Exception as e:
        if hasattr(e, 'message'):
            logger.log('error', (f"Error: {e.message}"))
        else:
            logger.log('error', (f"Error: {e}"))
 
 
@bot.message_handler(commands=['deleteTariff'])
def deleteTariff(message):
    try:
        tariff_id = message.text.split(' ', 1)[1]
        
        query_params = {
            "id": tariff_id
        }
        
        response = requests.get(f"{BASE_URL}/deleteTariff", params=query_params)
        response = response.json()
        
        data = f"Tariff info:\n ID: {response['id']}\n NAME: {response['name']}\n COEFICIENT: {response['coefficient']}\n MOUNTH PERIOD: {response['mounth_period']}"
        
        encrypt_and_log_data(f"User {message.from_user.username} - {message.from_user.id} launched the bot with the command /deleteTariff by id {tariff_id}")
        
        bot.send_message(message.chat.id, data)
    except Exception as e:
        if hasattr(e, 'message'):
            logger.log('error', (f"Error: {e.message}"))
        else:
            logger.log('error', (f"Error: {e}"))
  
   
#############################################################################################################
#                                             FUNCTIONS SECTION
############################################################################################################# 
        
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