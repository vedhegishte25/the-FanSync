from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.db.init_db import init_db
from app.api.routers import football
from app.api.routers import cricket
from app.api.routers import live
from app.api.routers import standings
from app.api.routers import news
from app.api.routers import insights


app = FastAPI(
    title="FanSync API",
    version="1.0.0",
    debug=settings.DEBUG
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(live.router)
app.include_router(football.router)
app.include_router(cricket.router)
app.include_router(standings.router)
app.include_router(news.router)
app.include_router(insights.router)


@app.on_event("startup")
def on_startup():
    init_db()


@app.get("/")
def root():
    return {"message": "FanSync API is running"}


@app.get("/health")
def health():
    return {"status": "ok"}