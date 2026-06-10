from sqlalchemy import Column, Integer, String, ForeignKey
from app.db.base import Base


class Team(Base):
    __tablename__ = "teams"

    id = Column(Integer, primary_key=True, index=True)
    external_id = Column(Integer, unique=True, index=True)
    name = Column(String, nullable=False)
    sport = Column(String, nullable=False)
    league_id = Column(Integer, ForeignKey("leagues.id"), nullable=True)
    country = Column(String, nullable=True)
    logo_url = Column(String, nullable=True)