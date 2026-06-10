from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from app.db.base import Base


class Match(Base):
    __tablename__ = "matches"

    id = Column(Integer, primary_key=True, index=True)
    external_id = Column(Integer, unique=True, index=True)
    sport = Column(String, nullable=False)
    league_id = Column(Integer, ForeignKey("leagues.id"), nullable=True)
    home_team_id = Column(Integer, ForeignKey("teams.id"), nullable=True)
    away_team_id = Column(Integer, ForeignKey("teams.id"), nullable=True)
    home_score = Column(Integer, nullable=True)
    away_score = Column(Integer, nullable=True)
    status = Column(String, nullable=False)
    match_date = Column(DateTime, nullable=False)
    venue = Column(String, nullable=True)