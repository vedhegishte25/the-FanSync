from datetime import datetime
from app.services.football_service import get_live_football_matches
from app.services.cricket_service import get_live_cricket_matches


async def generate_insights():
    insights = []

    football_matches = await get_live_football_matches()
    for match in football_matches:
        home = match["home_team"]["name"]
        away = match["away_team"]["name"]
        home_score = match["home_score"]
        away_score = match["away_score"]
        status = match["status"]

        insights.append({
            "title": f"{home} vs {away}",
            "body": f"{home} {home_score} - {away_score} {away} | Status: {status}",
            "sport": "football",
            "created_at": datetime.utcnow(),
        })

    cricket_matches = await get_live_cricket_matches()
    for match in cricket_matches:
        name = match.get("name", "Unknown Match")
        status = match.get("status", "Unknown")

        insights.append({
            "title": name,
            "body": f"Status: {status}",
            "sport": "cricket",
            "created_at": datetime.utcnow(),
        })

    return insights