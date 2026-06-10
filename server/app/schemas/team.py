from pydantic import BaseModel
from typing import Optional


class TeamBase(BaseModel):
    external_id: int
    name: str
    sport: str
    country: Optional[str] = None
    logo_url: Optional[str] = None


class TeamResponse(TeamBase):
    id: int
    league_id: Optional[int] = None

    class Config:
        from_attributes = True