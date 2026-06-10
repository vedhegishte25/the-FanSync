from app.services.football_service import get_football_fixtures
from app.services.cricket_service import get_cricket_series
from app.core.constants import FOOTBALL_LEAGUES
from app.utils.logger import logger


async def update_football_schedules(season: int = 2024):
    logger.info("Updating football schedules...")

    for league_name, league_id in FOOTBALL_LEAGUES.items():
        fixtures = await get_football_fixtures(league_id, season)
        logger.info(f"{league_name}: {len(fixtures)} fixtures fetched")

    logger.info("Football schedules update complete.")


async def update_cricket_schedules():
    logger.info("Updating cricket schedules...")

    series = await get_cricket_series()
    logger.info(f"Cricket series fetched: {len(series)}")

    logger.info("Cricket schedules update complete.")