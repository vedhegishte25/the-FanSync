from fastapi import APIRouter
from app.services.standings_service import (
    get_standings_by_league,
    get_all_standings,
)

router = APIRouter(prefix="/standings", tags=["standings"])


@router.get("/")
async def all_standings(season: int = 2024):
    return await get_all_standings(season)


@router.get("/{league_name}")
async def standings_by_league(league_name: str, season: int = 2024):
    return await get_standings_by_league(league_name, season)