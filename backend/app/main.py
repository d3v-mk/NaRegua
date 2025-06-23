from fastapi import FastAPI
from contextlib import asynccontextmanager

from app.api.v1.api import api_router
from app.db.session import engine
from app.db.base import Base

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("🔥 Criando tabelas do banco...")
    Base.metadata.create_all(bind=engine)
    yield
    print("👋 Encerrando app...")

app = FastAPI(
    title="NaReguaAPI",
    lifespan=lifespan
)

app.include_router(api_router, prefix="/api/v1")
