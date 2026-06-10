from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class MatchBase(BaseModel):
    external_id: int
    sport: str
    home_score: Optional[int] = None
    away_score: Optional[int] = None
    status: str
    match_date: datetime
    venue: Optional[str] = None


class MatchResponse(MatchBase):
    id: int
    league_id: Optional[int] = None
    home_team_id: Optional[int] = None
    away_team_id: Optional[int] = None

    class Config:
        from_attributes = True