# SkillRoute AI 🚀

### Your Skills. Your Future. Your Career Route.

SkillRoute AI is an AI-powered career guidance platform designed to help students and job seekers understand their current skills, identify skill gaps, and create personalized learning roadmaps based on their target job roles.

Instead of guessing what to learn next, users can use SkillRoute AI to understand what employers expect and work towards becoming job-ready.

---

## 🎯 Problem Statement

Students and aspiring professionals often struggle to understand:
- Which skills are required for their dream job.
- Which skills they already possess.
- What skills they are missing.
- What they should learn next.
- How to create a structured learning path.

SkillRoute AI aims to bring these insights together in one platform.

## 💡 Our Solution

SkillRoute AI aims to provide a personalized career development experience through:

1. **Resume Analysis** – Extract and understand skills from a user's resume.
2. **Job Description Analysis** – Identify the skills and qualifications required for a target role.
3. **Skill Gap Analysis** – Compare existing skills with job requirements.
4. **Personalized Roadmap** – Generate a structured learning path based on identified gaps.
5. **Career Recommendations** – Suggest areas for improvement and relevant learning opportunities.

*Features are being developed incrementally.*

## ✨ Key Features

| Feature | Purpose |
|---|---|
| User Authentication | User registration and login |
| Resume Upload | Upload a resume for analysis |
| Job Description Input | Specify a target job role |
| Skill Gap Analysis | Identify missing skills |
| Career Roadmap | Create a personalized learning plan |
| AI Recommendations | Provide career improvement suggestions |

## 🛠️ Tech Stack

**Frontend**
- React.js
- Vite
- JavaScript
- CSS

**Backend**
- Python
- FastAPI

**Development Tools**
- Git and GitHub
- VS Code
- npm

## 📁 Project Structure

```text
SkillRoute-AI/
│
├── backend/
│   ├── auth.py
│   ├── database.py
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- Node.js and npm
- Python 3
- Git

### 1. Clone the repository

```bash
git clone https://github.com/BhimireddyPragna/SkillRoute-AI.git
cd SkillRoute-AI
```

### 2. Set up the frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend development server will provide a local URL, usually:

```text
http://localhost:5173
```

### 3. Set up the backend

Open another terminal:

```bash
cd backend
python -m venv venv
```

Activate the environment on Windows:

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The backend will usually run at:

```text
http://127.0.0.1:8000
```

API documentation (when the server is running):

```text
http://127.0.0.1:8000/docs
```

## 👥 Team Collaboration

This project is developed collaboratively using GitHub.

Our workflow:
1. Each contributor works on an assigned feature.
2. Contributors create separate branches.
3. Changes are pushed to GitHub.
4. Pull requests are reviewed before merging into the main branch.

## 🚀 Deployment

The frontend is published using GitHub Pages.

**Live Project:** https://bhimireddypragna.github.io/SkillRoute-AI/

The backend requires separate hosting for public API access.

## 🔮 Future Improvements

- AI-powered resume parsing.
- Intelligent skill extraction.
- Job description matching.
- Dynamic learning roadmaps.
- Integration with learning resources.
- Progress tracking and personalized recommendations.

---

**SkillRoute AI — Turning career goals into actionable learning paths.**