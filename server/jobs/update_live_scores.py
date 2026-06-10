from apscheduler.schedulers.asyncio import AsyncIOScheduler
from app.services.football_service import get_live_football_matches
from app.services.cricket_service import get_live_cricket_matches
from app.utils.logger import logger
from app.core.config import settings


async def update_live_scores():
    logger.info("Updating live scores...")

    football_matches = await get_live_football_matches()
    logger.info(f"Football live matches fetched: {len(football_matches)}")

    cricket_matches = await get_live_cricket_matches()
    logger.info(f"Cricket live matches fetched: {len(cricket_matches)}")

    logger.info("Live scores update complete.")


def start_scheduler():
    scheduler = AsyncIOScheduler()
    scheduler.add_job(
        update_live_scores,
        trigger="interval",
        seconds=settings.REFRESH_INTERVAL,
        id="update_live_scores",
    )
    scheduler.start()
    return scheduler