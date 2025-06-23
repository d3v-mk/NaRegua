from sqlalchemy.orm import Session
from app.schemas.schema_cliente import ClienteCreate, ClienteUpdate
from app.db.models.model_cliente import Cliente

def cadastrar_cliente_db(db: Session, cliente: ClienteCreate):
    db_cliente = Cliente(nome=cliente.nome)
    db.add(db_cliente)
    db.commit()
    db.refresh(db_cliente)
    return db_cliente  # deixa Pydantic resolver a resposta

def listar_clientes_db(db: Session):
    return db.query(Cliente).all()

def obter_cliente_db(db: Session, cliente_id: int):
    return db.query(Cliente).filter(Cliente.id == cliente_id).first()

def atualizar_cliente_db(db: Session, cliente_id: int, dados: ClienteUpdate):
    cliente = obter_cliente_db(db, cliente_id)
    if cliente:
        if dados.nome is not None:
            cliente.nome = dados.nome
        db.commit()
        db.refresh(cliente)
    return cliente

def deletar_cliente_db(db: Session, cliente_id: int):
    cliente = obter_cliente_db(db, cliente_id)
    if cliente:
        db.delete(cliente)
        db.commit()
    return cliente
