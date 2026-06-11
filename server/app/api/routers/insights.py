from fastapi import APIRouter
from app.services.insight_service import generate_insights

router = APIRouter(prefix="/insights", tags=["insights"])


@router.get("/")
async def all_insights():
    return await generate_insights()