from datetime import datetime


def utc_now() -> datetime:
    return datetime.utcnow()


def safe_get(data: dict, *keys, default=None):
    for key in keys:
        if isinstance(data, dict):
            data = data.get(key, default)
        else:
            return default
    return data


def is_live_status(status: str, live_statuses: list) -> bool:
    return status in live_statuses


def format_score(home_score, away_score) -> str:
    home = home_score if home_score is not None else 0
    away = away_score if away_score is not None else 0
    return f"{home} - {away}"