from pydantic import BaseModel

class ServicoBase(BaseModel):
    nome: str
    preco: float
    duracao_minutos: int

class ServicoCreate(ServicoBase):
    pass

class ServicoUpdate(ServicoBase):
    pass

class ServicoOut(ServicoBase):
    id: int

    model_config = {
        "from_attributes": True
    }
