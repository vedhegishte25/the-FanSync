from fastapi import APIRouter
from app.services.news_service import get_football_news, get_cricket_news

router = APIRouter(prefix="/news", tags=["news"])


@router.get("/")
async def all_news():
    football = await get_football_news()
    cricket = await get_cricket_news()
    return {"football": football, "cricket": cricket}


@router.get("/football")
async def football_news():
    return await get_football_news()


@router.get("/cricket")
async def cricket_news():
    return await get_cricket_news()