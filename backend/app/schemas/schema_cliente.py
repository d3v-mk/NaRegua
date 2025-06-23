from pydantic import BaseModel


class ClienteBase(BaseModel):
    nome: str
    telefone: str | None = None
    email: str | None = None


class ClienteCreate(ClienteBase):
    pass


class ClienteUpdate(BaseModel):
    nome: str | None = None
    telefone: str | None = None
    email: str | None = None


class ClienteOut(ClienteBase):
    id: int

    model_config = {
        "from_attributes": True
    }
