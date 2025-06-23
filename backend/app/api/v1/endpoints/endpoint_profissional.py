# Importa dependências principais
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.dependencies import get_db  # Função para injetar a sessão com o banco

# Schemas para entrada e saída de dados
from app.schemas.schema_profissional import ProfissionalCreate, ProfissionalOut, ProfissionalUpdate

# Funções que fazem o acesso ao banco
from app.crud.crud_profissional import (
    criar_profissional_db,
    listar_profissionais_db,
    obter_profissional_db,
    atualizar_profissional_db,
    deletar_profissional_db,
)

# Cria o roteador para agrupar os endpoints
router = APIRouter()

# POST / -> Cria um novo profissional
@router.post("/", response_model=ProfissionalOut, status_code=201)
def cadastrar_profissional(profissional: ProfissionalCreate, db: Session = Depends(get_db)):
    # Chama a função que cria o profissional no banco
    return criar_profissional_db(db, profissional)

# GET / -> Lista todos os profissionais cadastrados
@router.get("/", response_model=list[ProfissionalOut])
def listar_profissionais(db: Session = Depends(get_db)):
    # Chama a função que retorna todos os profissionais
    return listar_profissionais_db(db)

# GET /{id} -> Retorna os dados de um profissional específico
@router.get("/{profissional_id}", response_model=ProfissionalOut)
def obter_profissional(profissional_id: int, db: Session = Depends(get_db)):
    # Busca o profissional pelo ID
    profissional = obter_profissional_db(db, profissional_id)
    # Se não encontrar, lança erro 404
    if not profissional:
        raise HTTPException(status_code=404, detail="Profissional não encontrado")
    return profissional

# PUT /{id} -> Atualiza os dados de um profissional
@router.put("/{profissional_id}", response_model=ProfissionalOut)
def atualizar_profissional(profissional_id: int, obj_in: ProfissionalUpdate, db: Session = Depends(get_db)):
    # Chama a função que atualiza os dados
    profissional = atualizar_profissional_db(db, profissional_id, obj_in)
    # Se não encontrar, lança erro 404
    if not profissional:
        raise HTTPException(status_code=404, detail="Profissional não encontrado")
    return profissional

# DELETE /{id} -> Remove um profissional do sistema
@router.delete("/{profissional_id}", response_model=ProfissionalOut)
def deletar_profissional(profissional_id: int, db: Session = Depends(get_db)):
    # Chama a função que deleta o profissional
    profissional = deletar_profissional_db(db, profissional_id)
    # Se não encontrar, lança erro 404
    if not profissional:
        raise HTTPException(status_code=404, detail="Profissional não encontrado")
    return profissional
