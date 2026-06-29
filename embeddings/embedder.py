from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")

def embed_course(course):
    text = f"{course['title']} {course.get('description', '')}"
    return model.encode(text).tolist()

def embed_courses(courses):
    for course in courses:
        course["embedding"] = embed_course(course)
    return courses
