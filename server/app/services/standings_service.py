from app.services.football_service import get_football_standings
from app.core.constants import FOOTBALL_LEAGUES


async def get_standings_by_league(league_name: str, season: int):
    league_id = FOOTBALL_LEAGUES.get(league_name)

    if not league_id:
        return {"error": f"League '{league_name}' not found"}

    standings = await get_football_standings(league_id, season)
    return standings


async def get_all_standings(season: int):
    all_standings = {}

    for league_name, league_id in FOOTBALL_LEAGUES.items():
        standings = await get_football_standings(league_id, season)
        all_standings[league_name] = standings

    return all_standings