# RAG Course Retrieval Platform

A semantic course discovery platform that uses embedding-based RAG (Retrieval-Augmented Generation) pipelines to rank and recommend courses across multiple platforms based on natural language queries.

## What It Does

1. **Ingests** course metadata from multiple platforms (Udemy, Coursera, YouTube, etc.)
2. **Embeds** course titles, descriptions, and syllabi using a sentence embedding model
3. **Stores** vectors in PostgreSQL with pgvector extension
4. **Retrieves** semantically similar courses for any natural language query
5. **Ranks** results by relevance score and returns structured recommendations
6. **Serves** results via FastAPI backend to a React Native mobile frontend

## Architecture

```
Course Data Sources (Udemy, Coursera, YouTube)
    |
    v
Python Ingestion Pipeline (scrape, normalize, embed)
    |
    v
PostgreSQL + pgvector (vector store)
    |
    v
FastAPI Backend (/api/search, /api/recommend)
    |
    v
React Native Frontend (search UI + course cards)
```

## Tech Stack

- **FastAPI** — Python backend API
- **Python 3.11** — embedding pipeline and retrieval logic
- **React Native** — cross-platform mobile frontend
- **PostgreSQL + pgvector** — vector database
- **Sentence Transformers** — all-MiniLM-L6-v2 embedding model
- **SQLAlchemy** — ORM layer

## Folder Structure

```
rag-course-retrieval-platform/
├── backend/
│   ├── main.py
│   ├── search.py
│   ├── models.py
│   └── db.py
├── embeddings/
│   ├── embedder.py
│   └── ingest.py
├── frontend/
│   ├── App.tsx
│   ├── screens/
│   │   ├── SearchScreen.tsx
│   │   └── ResultsScreen.tsx
│   └── components/
│       └── CourseCard.tsx
├── data/
│   └── sample-courses.json
├── requirements.txt
├── .env.example
└── README.md
```

## Setup

### Backend

```bash
git clone https://github.com/jamshaidahmedd/rag-course-retrieval-platform
cd rag-course-retrieval-platform
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python embeddings/ingest.py
uvicorn backend.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npx expo start
```

## API Reference

POST /api/search
Request: { "query": "learn Python for data science beginners" }
Response: { "results": [{ "id": "c_001", "title": "...", "platform": "Udemy", "rating": 4.6, "relevance_score": 0.94 }] }

## License

MIT
