import logging
from logging.handlers import RotatingFileHandler

class AdminLogger:
    def __init__(self, log_file):
        self.logger = logging.getLogger("admin_bot_logger")
        self.logger.setLevel(logging.DEBUG)
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        file_handler = logging.FileHandler(log_file)
        file_handler.setFormatter(formatter)
        self.logger.addHandler(file_handler)
        
    # def activated_store_mode(self, log_file):
    #     log_handler = RotatingFileHandler(log_file, maxBytes=1e6, backupCount=5)
    #     log_handler.setLevel(logging.INFO)
    #     formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    #     log_handler.setFormatter(formatter)

    #     self.logger.addHandler(log_handler)
    
    def log(self, level, message):
        if level == 'info':
            self.logger.info(message)
        elif level == 'error':
            self.logger.error(message)
        elif level == 'debug':
            self.logger.debug(message)