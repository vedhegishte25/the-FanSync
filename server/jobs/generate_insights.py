from app.services.insight_service import generate_insights
from app.utils.logger import logger


async def run_generate_insights():
    logger.info("Generating insights...")

    insights = await generate_insights()
    logger.info(f"Insights generated: {len(insights)}")

    logger.info("Insights generation complete.")

    return insights