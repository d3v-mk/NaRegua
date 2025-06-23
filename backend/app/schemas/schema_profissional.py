from pydantic import BaseModel

class ProfissionalBase(BaseModel):
    nome: str
    especialidade: str | None = None
    ativo: bool = True

class ProfissionalCreate(ProfissionalBase):
    pass

class ProfissionalUpdate(ProfissionalBase):
    pass

class ProfissionalOut(ProfissionalBase):
    id: int

    model_config = {
        "from_attributes": True
    }
