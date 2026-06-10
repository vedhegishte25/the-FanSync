from fastapi import APIRouter
from app.services.football_service import (
    get_live_football_matches,
    get_football_fixtures,
    get_football_standings,
)
from app.core.constants import FOOTBALL_LEAGUES

router = APIRouter(prefix="/football", tags=["football"])


@router.get("/live")
async def live_football():
    return await get_live_football_matches()


@router.get("/fixtures/{league_name}/{season}")
async def football_fixtures(league_name: str, season: int):
    league_id = FOOTBALL_LEAGUES.get(league_name)
    if not league_id:
        return {"error": f"League '{league_name}' not found"}
    return await get_football_fixtures(league_id, season)


@router.get("/standings/{league_name}/{season}")
async def football_standings(league_name: str, season: int):
    league_id = FOOTBALL_LEAGUES.get(league_name)
    if not league_id:
        return {"error": f"League '{league_name}' not found"}
    return await get_football_standings(league_id, season)