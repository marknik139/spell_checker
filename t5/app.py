from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

tokenizer = AutoTokenizer.from_pretrained("ai-forever/sage-mt5-large")
model = AutoModelForSeq2SeqLM.from_pretrained("ai-forever/sage-mt5-large")
model.to("cpu")

class TextRequest(BaseModel):
    sentence: str

@app.post("/process_text")
async def process_text(request: TextRequest):
    try:
        inputs = tokenizer(request.sentence, return_tensors="pt")
        outputs = model.generate(**inputs.to("cpu"), max_length=int(inputs["input_ids"].size(1) * 1.5))
        result = tokenizer.batch_decode(outputs, skip_special_tokens=True)
        return {"output": result[0]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
