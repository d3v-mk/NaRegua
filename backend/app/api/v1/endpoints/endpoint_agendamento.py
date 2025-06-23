from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.dependencies import get_db
from app.schemas.schema_agendamento import AgendamentoCreate, AgendamentoUpdate, AgendamentoOut
from app.crud.crud_agendamento import (
    criar_agendamento_db,
    listar_agendamentos_db,
    obter_agendamento_db,
    atualizar_agendamento_db,
    deletar_agendamento_db,
)

router = APIRouter()

@router.post("/", response_model=AgendamentoOut, status_code=201)
def criar_agendamento(agendamento: AgendamentoCreate, db: Session = Depends(get_db)):
    return criar_agendamento_db(db, agendamento)

@router.get("/", response_model=list[AgendamentoOut])
def listar_agendamentos(db: Session = Depends(get_db)):
    return listar_agendamentos_db(db)

@router.get("/{agendamento_id}", response_model=AgendamentoOut)
def obter_agendamento(agendamento_id: int, db: Session = Depends(get_db)):
    agendamento = obter_agendamento_db(db, agendamento_id)
    if not agendamento:
        raise HTTPException(status_code=404, detail="Agendamento não encontrado")
    return agendamento

@router.put("/{agendamento_id}", response_model=AgendamentoOut)
def atualizar_agendamento(agendamento_id: int, obj_in: AgendamentoUpdate, db: Session = Depends(get_db)):
    agendamento = atualizar_agendamento_db(db, agendamento_id, obj_in)
    if not agendamento:
        raise HTTPException(status_code=404, detail="Agendamento não encontrado")
    return agendamento

@router.delete("/{agendamento_id}", response_model=AgendamentoOut)
def deletar_agendamento(agendamento_id: int, db: Session = Depends(get_db)):
    agendamento = deletar_agendamento_db(db, agendamento_id)
    if not agendamento:
        raise HTTPException(status_code=404, detail="Agendamento não encontrado")
    return agendamento
