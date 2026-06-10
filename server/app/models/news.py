from sqlalchemy import Column, Integer, String, DateTime
from app.db.base import Base


class News(Base):
    __tablename__ = "news"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    url = Column(String, nullable=False)
    source = Column(String, nullable=True)
    sport = Column(String, nullable=True)
    published_at = Column(DateTime, nullable=True)
    image_url = Column(String, nullable=True)