import httpx
from app.core.config import settings


async def fetch_live_matches():
    url = f"{settings.CRICAPI_BASE_URL}/currentMatches"
    params = {"apikey": settings.CRICAPI_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def fetch_match_info(match_id: str):
    url = f"{settings.CRICAPI_BASE_URL}/match_info"
    params = {"apikey": settings.CRICAPI_KEY, "id": match_id}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()


async def fetch_series_list():
    url = f"{settings.CRICAPI_BASE_URL}/series"
    params = {"apikey": settings.CRICAPI_KEY}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        return response.json()