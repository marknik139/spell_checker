from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from fastapi import HTTPException

class ModelHandler:
    def __init__(self, model_name: str):
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
        self.model.to("cpu")

    def process_text(self, text: str) -> str:
        try:
            inputs = self.tokenizer(text, return_tensors="pt")
            outputs = self.model.generate(**inputs.to("cpu"), max_length=int(inputs["input_ids"].size(1) * 1.5))
            result = self.tokenizer.batch_decode(outputs, skip_special_tokens=True)
            return result[0]
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))