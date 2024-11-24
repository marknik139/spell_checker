from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

from model_handler import ModelHandler
from db import MongoDBClient
from interfaces import TextRequest

load_dotenv()

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

username = os.getenv("MONGO_USERNAME")
password = os.getenv("MONGO_PASSWORD")
db_name = os.getenv("MONGO_DB_NAME")
collection_name = os.getenv("MONGO_COLLECTION_NAME")
app_name = os.getenv("MONGO_APP_NAME")

mongo_client = MongoDBClient(username=username, password=password, db_name=db_name, collection_name=collection_name, app_name=app_name)

model_handler = ModelHandler(model_name="ai-forever/sage-mt5-large")

@app.post("/process_text")
async def process_text(request: TextRequest):
    result = model_handler.process_text(request.sentence)
    mongo_client.save_to_mongo(request.sentence, result)
    return {"output": result}
