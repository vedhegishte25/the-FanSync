def map_match(match: dict) -> dict:
    teams = match.get("teams", [])
    return {
        "external_id": match.get("id"),
        "sport": "cricket",
        "name": match.get("name"),
        "status": match.get("status"),
        "match_type": match.get("matchType"),
        "venue": match.get("venue"),
        "date": match.get("date"),
        "home_team": {"name": teams[0] if len(teams) > 0 else "TBD"},
        "away_team": {"name": teams[1] if len(teams) > 1 else "TBD"},
        "score": match.get("score", []),
    }


def map_matches(data: dict) -> list:
    return [map_match(m) for m in data.get("data", [])]