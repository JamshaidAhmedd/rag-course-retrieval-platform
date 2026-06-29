import json
from embedder import embed_courses
import sys
sys.path.insert(0, "../backend")
from db import get_db, engine
from models import Course, Base

Base.metadata.create_all(engine)

with open("../data/sample-courses.json") as f:
    courses = json.load(f)

embedded = embed_courses(courses)

with get_db() as db:
    for c in embedded:
        course = Course(**{k: v for k, v in c.items() if k != "embedding"}, embedding=c["embedding"])
        db.merge(course)
    db.commit()

print(f"[Ingest] Stored {len(embedded)} courses with embeddings.")
