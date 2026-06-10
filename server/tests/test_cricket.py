import pytest
from httpx import AsyncClient
from app.main import app


@pytest.mark.asyncio
async def test_live_cricket():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/cricket/live")
        assert response.status_code == 200


@pytest.mark.asyncio
async def test_cricket_series():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/cricket/series")
        assert response.status_code == 200