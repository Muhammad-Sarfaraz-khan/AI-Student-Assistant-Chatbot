from fastapi import FastAPI
from app.routers.chat import router as chat_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AI Student Chatbot")

# CORS (Frontend connect ke liye)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ROOT CHECK
@app.get("/")
def root():
    return {"status": "OK"}

# REGISTER CHAT ROUTER
app.include_router(chat_router)
