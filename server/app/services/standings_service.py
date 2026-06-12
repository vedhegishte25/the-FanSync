from app.services.football_service import get_football_standings
from app.core.constants import FOOTBALL_LEAGUES


async def get_standings_by_league(league_name: str, season: int):
    league_id = FOOTBALL_LEAGUES.get(league_name)

    if not league_id:
        return {"error": f"League '{league_name}' not found"}

    try:
        data = await get_football_standings(league_id, season)
        if not data:
            return []
        # API-Football nests standings inside response[0].league.standings[0]
        standings = (
            data[0]
            .get("league", {})
            .get("standings", [[]])[0]
        )
        return standings
    except Exception as e:
        return {"error": str(e)}


async def get_all_standings(season: int):
    return {"message": "Please select a specific league."}