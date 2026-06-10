from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):

    APP_ENV: str = "development"
    APP_HOST: str = "0.0.0.0"
    APP_PORT: int = 8000
    DEBUG: bool = True

    DATABASE_URL: str
    DATABASE_HOST: str = "localhost"
    DATABASE_PORT: int = 5432
    DATABASE_NAME: str = "fansync_db"
    DATABASE_USER: str = "fansync_user"
    DATABASE_PASSWORD: str = "fansync_pass"

    CORS_ORIGINS: List[str] = ["http://localhost:3000"]

    API_FOOTBALL_KEY: str
    API_FOOTBALL_BASE_URL: str = "https://v3.football.api-sports.io"

    CRICAPI_KEY: str
    CRICAPI_BASE_URL: str = "https://api.cricapi.com/v1"

    NEWSAPI_KEY: str
    NEWSAPI_BASE_URL: str = "https://newsapi.org/v2"

    REFRESH_INTERVAL: int = 7200

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()