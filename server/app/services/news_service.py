import httpx
from app.core.config import settings
from app.core.constants import NEWS_FOOTBALL_QUERY, NEWS_CRICKET_QUERY, NEWS_MAX_ARTICLES


def format_article(article: dict) -> dict:
    source = article.get("source", {})
    return {
        "title": article.get("title"),
        "description": article.get("description"),
        "url": article.get("url"),
        "source": source.get("name") if isinstance(source, dict) else source,
        "published_at": article.get("publishedAt"),
        "image_url": article.get("urlToImage"),
    }


async def get_football_news():
    url = f"{settings.NEWSAPI_BASE_URL}/everything"
    params = {
        "q": NEWS_FOOTBALL_QUERY,
        "language": "en",
        "pageSize": NEWS_MAX_ARTICLES,
        "sortBy": "publishedAt",
        "apiKey": settings.NEWSAPI_KEY,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        return [format_article(a) for a in data.get("articles", [])]


async def get_cricket_news():
    url = f"{settings.NEWSAPI_BASE_URL}/everything"
    params = {
        "q": NEWS_CRICKET_QUERY,
        "language": "en",
        "pageSize": NEWS_MAX_ARTICLES,
        "sortBy": "publishedAt",
        "apiKey": settings.NEWSAPI_KEY,
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        return [format_article(a) for a in data.get("articles", [])]