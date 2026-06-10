from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class InsightBase(BaseModel):
    title: str
    body: str
    sport: Optional[str] = None
    match_id: Optional[int] = None
    created_at: Optional[datetime] = None


class InsightResponse(InsightBase):
    id: int

    class Config:
        from_attributes = True