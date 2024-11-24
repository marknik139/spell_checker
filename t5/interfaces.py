from pydantic import BaseModel

class TextRequest(BaseModel):
    sentence: str