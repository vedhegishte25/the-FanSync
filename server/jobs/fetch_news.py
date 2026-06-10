from app.services.news_service import get_football_news, get_cricket_news
from app.utils.logger import logger


async def fetch_all_news():
    logger.info("Fetching latest news...")

    football_news = await get_football_news()
    logger.info(f"Football news fetched: {len(football_news)} articles")

    cricket_news = await get_cricket_news()
    logger.info(f"Cricket news fetched: {len(cricket_news)} articles")

    logger.info("News fetch complete.")

    return {
        "football": football_news,
        "cricket": cricket_news,
    }