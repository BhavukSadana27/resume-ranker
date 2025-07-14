# 🎯 Resume Ranker

> AI-powered tool to analyze and rank resumes based on job descriptions  
> using HTML/CSS/JS as frontend and using NLP (spaCy), Node.js as backend.

---

## 📦 **Project Structure (3-layer architecture)**

```

frontend/                  → HTML/CSS/JS static frontend
backend/                   → Node.js + Express REST API
resumeRankerNLPMicroservice/ → Python Flask microservice (spaCy)

````

---

## 🚀 **Getting Started**

> ✅ Make sure you have:
> - Node.js & npm installed
> - Python 3.x installed
> - Internet connection to download dependencies

You need to **run all 3 layers in separate terminals**.

---

## 🌐 **1️⃣ Frontend**

```bash
cd frontend
npx serve .
````

Runs at ➜ [http://localhost:3000/](http://localhost:3000/)

---

## 🖥 **2️⃣ Backend (Node.js / Express)**

```bash
cd backend
npm install
node server.js
```

Runs at ➜ [http://localhost:8000/](http://localhost:8000/)

---

## 🧠 **3️⃣ Python NLP Microservice**

### ✅ Recommended (with virtual environment):

```bash
cd resumeRankerNLPMicroservice
python -m venv venv
.\venv\Scripts\Activate.ps1         # (on Windows)
pip install -r requirements.txt
python -m spacy download en_core_web_md
python run.py
```

---

### ⚠ Alternative (without virtual env):

```bash
cd resumeRankerNLPMicroservice
pip install -r requirements.txt
python -m spacy download en_core_web_md
python run.py
```

Runs at ➜ [http://localhost:5000/](http://localhost:5000/)

---

## 📌 **Notes**

* `.env` and `config.py` are included (hold port configs)
* All 3 services must run simultaneously for full functionality
* The backend talks to the Python microservice for NLP scoring

---

## 🛠 **Tech Stack**

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express.js
* Microservice: Python, Flask, spaCy (`en_core_web_md`)
* Data exchange: REST APIs, JSON

---

✅ **Now open** [http://localhost:3000/](http://localhost:3000/) in your browser and start ranking resumes!

```
✅ **screenshot**
---

<img width="1776" height="697" alt="image" src="https://github.com/user-attachments/assets/9f8d3cab-8d99-4127-a4b0-c8e0fb3d2052" />



```
<img width="1264" height="893" alt="image" src="https://github.com/user-attachments/assets/01069072-6836-4989-bfc7-511d1222acad" />

