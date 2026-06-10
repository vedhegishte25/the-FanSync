from app.providers.cricket.cricapi import (
    fetch_live_matches,
    fetch_match_info,
    fetch_series_list,
)
from app.providers.cricket.mapper import map_matches


async def get_live_cricket_matches():
    data = await fetch_live_matches()
    return map_matches(data)


async def get_cricket_match_info(match_id: str):
    data = await fetch_match_info(match_id)
    return data.get("data", {})


async def get_cricket_series():
    data = await fetch_series_list()
    return data.get("data", [])