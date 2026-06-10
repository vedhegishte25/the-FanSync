import httpx
from app.core.config import settings


async def fetch_live_matches():
    url = f"{settings.API_FOOTBALL_BASE_URL}/fixtures"
    headers = {"x-apisports-key": settings.API_FOOTBALL_KEY}
    params = {"live": "all"}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers, params=params)
        response.raise_for_status()
        return response.json()


async def fetch_fixtures_by_league(league_id: int, season: int):
    url = f"{settings.API_FOOTBALL_BASE_URL}/fixtures"
    headers = {"x-apisports-key": settings.API_FOOTBALL_KEY}
    params = {"league": league_id, "season": season}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers, params=params)
        response.raise_for_status()
        return response.json()


async def fetch_standings(league_id: int, season: int):
    url = f"{settings.API_FOOTBALL_BASE_URL}/standings"
    headers = {"x-apisports-key": settings.API_FOOTBALL_KEY}
    params = {"league": league_id, "season": season}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers, params=params)
        response.raise_for_status()
        return response.json()