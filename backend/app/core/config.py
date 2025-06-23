from pydantic_settings import BaseSettings
from functools import lru_cache

class Settings(BaseSettings):
    APP_NAME: str
    DEBUG: bool = True

    # Banco de dados
    DB_URL: str

    # Token JWT (exemplo pra quando for usar auth)
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    class Config:
        env_file = ".env"  # lê o arquivo .env na raiz do projeto

# Cache a config pra evitar múltiplas leituras
@lru_cache()
def get_settings():
    return Settings()
