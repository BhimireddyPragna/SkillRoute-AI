
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import Base, engine, get_db
from models import User
from schemas import UserCreate, UserLogin, TokenResponse
from auth import hash_password, verify_password, create_access_token

app = FastAPI(title="SkillRoute AI API")

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
  allow_origins=[
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5174",
    "http://localhost:5175",
    "http://127.0.0.1:5175"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Welcome to SkillRoute AI API"
    }


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/auth/signup", response_model=TokenResponse)
def signup(user_data: UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(
        User.email == user_data.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered. Please login."
        )

    new_user = User(
        name=user_data.name.strip(),
        email=user_data.email.lower(),
        hashed_password=hash_password(user_data.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    token = create_access_token({
        "sub": str(new_user.id)
    })

    return {
        "access_token": token,
        "token_type": "bearer",
        "user": new_user
    }


@app.post("/auth/login", response_model=TokenResponse)
def login(user_data: UserLogin, db: Session = Depends(get_db)):

    user = db.query(User).filter(
        User.email == user_data.email.lower()
    ).first()

    if not user or not verify_password(
        user_data.password,
        user.hashed_password
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password."
        )

    token = create_access_token({
        "sub": str(user.id)
    })

    return {
        "access_token": token,
        "token_type": "bearer",
        "user": user
    }
