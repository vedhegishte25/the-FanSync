from fastapi import APIRouter
from app.services.cricket_service import (
    get_live_cricket_matches,
    get_cricket_match_info,
    get_cricket_series,
)

router = APIRouter(prefix="/cricket", tags=["cricket"])


@router.get("/live")
async def live_cricket():
    return await get_live_cricket_matches()


@router.get("/match/{match_id}")
async def cricket_match(match_id: str):
    return await get_cricket_match_info(match_id)


@router.get("/series")
async def cricket_series():
    return await get_cricket_series()