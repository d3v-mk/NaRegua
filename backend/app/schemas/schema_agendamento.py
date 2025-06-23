from pydantic import BaseModel
from datetime import datetime

class AgendamentoBase(BaseModel):
    cliente_id: int
    profissional_id: int
    servico_id: int
    horario: datetime
    status: str = "pendente"

class AgendamentoCreate(AgendamentoBase):
    pass

class AgendamentoUpdate(BaseModel):
    horario: datetime | None = None
    status: str | None = None

class AgendamentoOut(AgendamentoBase):
    id: int

    model_config = {
        "from_attributes": True
    }
