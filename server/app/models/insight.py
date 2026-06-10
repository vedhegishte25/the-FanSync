from sqlalchemy import Column, Integer, String, DateTime
from app.db.base import Base


class Insight(Base):
    __tablename__ = "insights"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    body = Column(String, nullable=False)
    sport = Column(String, nullable=True)
    match_id = Column(Integer, nullable=True)
    created_at = Column(DateTime, nullable=True)