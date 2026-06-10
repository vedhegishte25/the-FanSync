from app.providers.football.api_football import (
    fetch_live_matches,
    fetch_fixtures_by_league,
    fetch_standings,
)
from app.providers.football.mapper import map_fixtures


async def get_live_football_matches():
    data = await fetch_live_matches()
    return map_fixtures(data)


async def get_football_fixtures(league_id: int, season: int):
    data = await fetch_fixtures_by_league(league_id, season)
    return map_fixtures(data)


async def get_football_standings(league_id: int, season: int):
    data = await fetch_standings(league_id, season)
    return data.get("response", [])