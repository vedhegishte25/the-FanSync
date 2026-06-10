def map_match(match: dict) -> dict:
    return {
        "external_id": match.get("id"),
        "sport": "cricket",
        "name": match.get("name"),
        "status": match.get("status"),
        "match_type": match.get("matchType"),
        "venue": match.get("venue"),
        "date": match.get("date"),
        "home_team": {
            "name": match.get("teams", [None, None])[0],
        },
        "away_team": {
            "name": match.get("teams", [None, None])[1],
        },
        "score": match.get("score", []),
    }


def map_matches(data: dict) -> list:
    return [map_match(m) for m in data.get("data", [])]