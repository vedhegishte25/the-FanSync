from app.services.standings_service import get_all_standings
from app.utils.logger import logger


async def update_all_standings(season: int = 2024):
    logger.info("Updating standings...")

    standings = await get_all_standings(season)
    logger.info(f"Standings updated for {len(standings)} leagues")

    logger.info("Standings update complete.")

    return standings