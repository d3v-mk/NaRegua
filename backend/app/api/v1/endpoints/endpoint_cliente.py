from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.schema_cliente import ClienteCreate, ClienteOut, ClienteUpdate
from app.core.dependencies import get_db


from app.crud.crud_cliente import (
    cadastrar_cliente_db,
    listar_clientes_db,
    obter_cliente_db,
    atualizar_cliente_db,
    deletar_cliente_db,
)

router = APIRouter()

# 🔸 Cria um novo cliente no banco de dados
@router.post("/", response_model=ClienteOut, status_code=201)
def cadastrar_cliente(cliente: ClienteCreate, db: Session = Depends(get_db)):
    try:
        return cadastrar_cliente_db(db, cliente)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# 🔸 Retorna uma lista de todos os clientes cadastrados
@router.get("/", response_model=list[ClienteOut])
def listar_clientes(db: Session = Depends(get_db)):
    return listar_clientes_db(db)

# 🔸 Busca um cliente específico pelo ID
@router.get("/{cliente_id}", response_model=ClienteOut)
def obter_cliente(cliente_id: int, db: Session = Depends(get_db)):
    cliente = obter_cliente_db(db, cliente_id)
    if not cliente:
        raise HTTPException(status_code=404, detail="Cliente não encontrado")
    return cliente

# 🔸 Atualiza os dados de um cliente específico
@router.put("/{cliente_id}", response_model=ClienteOut)
def atualizar_cliente(cliente_id: int, dados: ClienteUpdate, db: Session = Depends(get_db)):
    cliente = atualizar_cliente_db(db, cliente_id, dados)
    if not cliente:
        raise HTTPException(status_code=404, detail="Cliente não encontrado")
    return cliente

# 🔸 Remove um cliente específico do banco de dados
@router.delete("/{cliente_id}", response_model=ClienteOut)
def deletar_cliente(cliente_id: int, db: Session = Depends(get_db)):
    cliente = deletar_cliente_db(db, cliente_id)
    if not cliente:
        raise HTTPException(status_code=404, detail="Cliente não encontrado")
    return cliente
