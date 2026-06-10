from datetime import datetime


def format_date(date: datetime) -> str:
    return date.strftime("%d %b %Y")


def format_datetime(date: datetime) -> str:
    return date.strftime("%d %b %Y, %H:%M UTC")


def format_match_title(home_team: str, away_team: str) -> str:
    return f"{home_team} vs {away_team}"


def format_news_article(article: dict) -> dict:
    return {
        "title": article.get("title"),
        "description": article.get("description"),
        "url": article.get("url"),
        "source": article.get("source", {}).get("name"),
        "published_at": article.get("publishedAt"),
        "image_url": article.get("urlToImage"),
    }