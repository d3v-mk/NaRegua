from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.dependencies import get_db
from app.schemas.schema_servico import ServicoCreate, ServicoOut, ServicoUpdate
from app.crud.crud_servico import (
    criar_servico_db,
    listar_servicos_db,
    obter_servico_db,
    atualizar_servico_db,
    deletar_servico_db,
)

router = APIRouter()

@router.post("/", response_model=ServicoOut, status_code=201)
def criar_servico(servico: ServicoCreate, db: Session = Depends(get_db)):
    return criar_servico_db(db, servico)

@router.get("/", response_model=list[ServicoOut])
def listar_servicos(db: Session = Depends(get_db)):
    return listar_servicos_db(db)

@router.get("/{servico_id}", response_model=ServicoOut)
def obter_servico(servico_id: int, db: Session = Depends(get_db)):
    servico = obter_servico_db(db, servico_id)
    if not servico:
        raise HTTPException(status_code=404, detail="Serviço não encontrado")
    return servico

@router.put("/{servico_id}", response_model=ServicoOut)
def atualizar_servico(servico_id: int, obj_in: ServicoUpdate, db: Session = Depends(get_db)):
    servico = atualizar_servico_db(db, servico_id, obj_in)
    if not servico:
        raise HTTPException(status_code=404, detail="Serviço não encontrado")
    return servico

@router.delete("/{servico_id}", response_model=ServicoOut)
def deletar_servico(servico_id: int, db: Session = Depends(get_db)):
    servico = deletar_servico_db(db, servico_id)
    if not servico:
        raise HTTPException(status_code=404, detail="Serviço não encontrado")
    return servico
