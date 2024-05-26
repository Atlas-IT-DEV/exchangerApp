headings = ['Id', 'Name', 'Coefficient', 'Period']
body = [
    ['1', 'Check #1', '2.16', '10'],
    ['2', 'Checking methods #2', '1.9', '6'],
    ['3', 'Check #3', '1.4', '21']
]

def myCreateTableStr(headings, body):
    total_str_table = "\n"

    # вывод таблицы с колонками максимальной длинны строки каждого столбца

    # расчёт максимальной длинны колонок
    max_columns = [] # список максимальной длинны колонок
    for col in zip(*body):
        len_el = []
        [len_el.append(len(el)) for el in col]  
        max_columns.append(max(len_el) + 2)
        
    for index, col in enumerate(headings):
        if max_columns[index] < len(col):
            max_columns[index] = len(col) + 2

    # печать шапки таблицы
    for n, column in enumerate(headings):
        total_str_table += f'{column+ " " * (max_columns[n] + 1 - len(column))}'
    total_str_table += '\n'

    # печать разделителя шапки '='
    total_str_table += f'{"="*sum(max_columns)+"="*5}\n'

    # печать тела таблицы
    for el in body:
        support_str = ""
        for n, col in enumerate(el):
            support_str += f'{col:{max_columns[n]+1}}'
        total_str_table += f'{support_str}\n'
        
    return total_str_table
    
print(myCreateTableStr(headings, body))

# методы шифрования и дешифрования
# def encrypt_and_log_data(data):
#     encrypted_data = cipher_suite.encrypt(data.encode())
#     print(decrypt_data(encrypted_data))
#     logger.log('info', (f"Event: {encrypted_data}"))

# def decrypt_data(encrypted_data):
#     decrypted_data = cipher_suite.decrypt(encrypted_data)
#     return decrypted_data.decode()

