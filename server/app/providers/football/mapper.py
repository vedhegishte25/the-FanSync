from datetime import datetime


def map_fixture(fixture: dict) -> dict:
    return {
        "external_id": fixture["fixture"]["id"],
        "sport": "football",
        "status": fixture["fixture"]["status"]["short"],
        "match_date": datetime.fromisoformat(fixture["fixture"]["date"]),
        "venue": fixture["fixture"]["venue"]["name"],
        "home_team": {
            "external_id": fixture["teams"]["home"]["id"],
            "name": fixture["teams"]["home"]["name"],
            "logo_url": fixture["teams"]["home"]["logo"],
        },
        "away_team": {
            "external_id": fixture["teams"]["away"]["id"],
            "name": fixture["teams"]["away"]["name"],
            "logo_url": fixture["teams"]["away"]["logo"],
        },
        "home_score": fixture["goals"]["home"],
        "away_score": fixture["goals"]["away"],
        "league": {
            "external_id": fixture["league"]["id"],
            "name": fixture["league"]["name"],
            "country": fixture["league"]["country"],
            "logo_url": fixture["league"]["logo"],
            "season": fixture["league"]["season"],
        },
    }


def map_fixtures(data: dict) -> list:
    return [map_fixture(f) for f in data.get("response", [])]