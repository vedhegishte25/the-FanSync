from fastapi import APIRouter
from app.services.football_service import get_live_football_matches
from app.services.cricket_service import get_live_cricket_matches

router = APIRouter(prefix="/live", tags=["live"])


@router.get("/")
async def all_live_matches():
    football = await get_live_football_matches()
    cricket = await get_live_cricket_matches()

    return {
        "football": football,
        "cricket": cricket,
    }


@router.get("/football")
async def live_football():
    return await get_live_football_matches()


@router.get("/cricket")
async def live_cricket():
    return await get_live_cricket_matches()