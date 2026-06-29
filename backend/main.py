from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from search import semantic_search

app = FastAPI(title="RAG Course Retrieval API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class SearchRequest(BaseModel):
    query: str
    top_k: int = 10

@app.post("/api/search")
async def search(req: SearchRequest):
    results = await semantic_search(req.query, req.top_k)
    return {"results": results}

@app.get("/health")
async def health():
    return {"status": "ok"}
