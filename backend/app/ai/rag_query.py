import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# LOAD DATA ONCE
df = pd.read_csv("app/data/ai_course_chatbot_dataset.csv")

questions = df["question"].astype(str).tolist()
answers = df["answer"].astype(str).tolist()

# TRAIN MODEL ONCE
vectorizer = TfidfVectorizer(stop_words="english")
X = vectorizer.fit_transform(questions)

def get_answer(user_question):
    user_vec = vectorizer.transform([user_question])
    similarity = cosine_similarity(user_vec, X)
    idx = similarity.argmax()
    return answers[idx]
