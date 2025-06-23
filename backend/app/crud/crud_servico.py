from sqlalchemy.orm import Session
from app.db.models.model_servico import Servico
from app.schemas.schema_servico import ServicoCreate, ServicoUpdate

def criar_servico_db(db: Session, obj_in: ServicoCreate):
    servico = Servico(**obj_in.model_dump())
    db.add(servico)
    db.commit()
    db.refresh(servico)
    return servico

def listar_servicos_db(db: Session):
    return db.query(Servico).all()

def obter_servico_db(db: Session, servico_id: int):
    return db.query(Servico).filter(Servico.id == servico_id).first()

def atualizar_servico_db(db: Session, servico_id: int, obj_in: ServicoUpdate):
    servico = obter_servico_db(db, servico_id)
    if servico:
        for attr, value in obj_in.model_dump().items():
            setattr(servico, attr, value)
        db.commit()
        db.refresh(servico)
    return servico

def deletar_servico_db(db: Session, servico_id: int):
    servico = obter_servico_db(db, servico_id)
    if servico:
        db.delete(servico)
        db.commit()
    return servico
