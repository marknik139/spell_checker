from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from pymongo.collection import Collection
from urllib.parse import quote_plus
from datetime import datetime

class MongoDBClient:
    def __init__(self, username: str, password: str, db_name: str, collection_name: str, app_name: str):
        uri = f"mongodb+srv://{quote_plus(username)}:{quote_plus(password)}@maincluster.tanh5.mongodb.net/?retryWrites=true&w=majority&appName={app_name}"

        self.client = MongoClient(uri, tls=True, tlsAllowInvalidCertificates=True, server_api=ServerApi('1'))
        self.db = self.client[db_name]
        self.collection: Collection = self.db[collection_name]

        try:
            self.client.admin.command('ping')
            print("Pinged your deployment. You successfully connected to MongoDB!")
        except Exception as e:
            print(f"Error connecting to MongoDB: {e}")

    def save_to_mongo(self, input_text: str, corrected_text: str):
        try:
            timestamp = datetime.now()
            correction_data = {
                "inputText": input_text,
                "correctedText": corrected_text,
                "timestamp": timestamp
            }
            self.collection.insert_one(correction_data)
        except Exception as e:
            print(f"Error saving to MongoDB: {e}")
