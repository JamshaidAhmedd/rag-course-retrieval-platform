from sqlalchemy import Column, String, Float, Text
from sqlalchemy.orm import declarative_base
from pgvector.sqlalchemy import Vector

Base = declarative_base()

class Course(Base):
    __tablename__ = "courses"
    id = Column(String, primary_key=True)
    title = Column(String, nullable=False)
    description = Column(Text)
    platform = Column(String)
    instructor = Column(String)
    rating = Column(Float)
    url = Column(String)
    embedding = Column(Vector(384))
