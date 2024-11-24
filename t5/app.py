from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model_handler import ModelHandler

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model_handler = ModelHandler(model_name="ai-forever/sage-mt5-large")

class TextRequest(BaseModel):
    sentence: str

@app.post("/process_text")
async def process_text(request: TextRequest):
    result = model_handler.process_text(request.sentence)
    return {"output": result}
