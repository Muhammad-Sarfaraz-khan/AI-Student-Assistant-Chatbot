from fastapi import APIRouter
from pydantic import BaseModel
from app.ai.rag_query import get_answer

router = APIRouter()

class Question(BaseModel):
    question: str

@router.post("/chat")
def chat(q: Question):
    answer = get_answer(q.question)
    return {"answer": answer}
