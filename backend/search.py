from sentence_transformers import SentenceTransformer
from db import get_db

model = SentenceTransformer("all-MiniLM-L6-v2")

async def semantic_search(query, top_k=10):
    query_embedding = model.encode(query).tolist()
    with get_db() as db:
        results = db.execute(
            """
            SELECT id, title, platform, instructor, rating,
                   1 - (embedding <=> %s::vector) AS relevance_score
            FROM courses
            ORDER BY embedding <=> %s::vector
            LIMIT %s
            """,
            (query_embedding, query_embedding, top_k),
        ).fetchall()
    return [dict(r) for r in results]
