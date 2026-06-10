import pytest
from httpx import AsyncClient
from app.main import app


@pytest.mark.asyncio
async def test_live_football():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/football/live")
        assert response.status_code == 200


@pytest.mark.asyncio
async def test_football_standings():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/standings/premier_league?season=2024")
        assert response.status_code == 200