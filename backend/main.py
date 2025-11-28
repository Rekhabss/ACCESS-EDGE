from fastapi import FastAPI
from bs4 import BeautifulSoup

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Backend is running"}

@app.post("/analyze")
def analyze_html(data: dict):
    html = data["html"]
    soup = BeautifulSoup(html, "html.parser")

    missing_alt = []

    for img in soup.find_all("img"):
        if not img.get("alt"):
            missing_alt.append(str(img))

    return {
        "missing_alt": missing_alt,
        "count": len(missing_alt)
    }
