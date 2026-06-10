import pytest
from httpx import AsyncClient
from app.main import app


@pytest.mark.asyncio
async def test_all_news():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/news/")
        assert response.status_code == 200


@pytest.mark.asyncio
async def test_football_news():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/news/football")
        assert response.status_code == 200


@pytest.mark.asyncio
async def test_cricket_news():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/news/cricket")
        assert response.status_code == 200