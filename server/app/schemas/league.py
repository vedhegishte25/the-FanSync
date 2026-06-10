from pydantic import BaseModel
from typing import Optional


class LeagueBase(BaseModel):
    external_id: int
    name: str
    sport: str
    country: Optional[str] = None
    logo_url: Optional[str] = None
    season: Optional[int] = None


class LeagueResponse(LeagueBase):
    id: int

    class Config:
        from_attributes = True