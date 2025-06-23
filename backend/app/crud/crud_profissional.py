from sqlalchemy.orm import Session
from app.db.models.model_profissional import Profissional
from app.schemas.schema_profissional import ProfissionalCreate, ProfissionalUpdate

def criar_profissional_db(db: Session, obj_in: ProfissionalCreate):
    profissional = Profissional(**obj_in.model_dict())
    db.add(profissional)
    db.commit()
    db.refresh(profissional)
    return profissional

def listar_profissionais_db(db: Session):
    return db.query(Profissional).all()

def obter_profissional_db(db: Session, profissional_id: int):
    return db.query(Profissional).filter(Profissional.id == profissional_id).first()

def atualizar_profissional_db(db: Session, profissional_id: int, obj_in: ProfissionalUpdate):
    profissional = obter_profissional_db(db, profissional_id)
    if profissional:
        for attr, value in obj_in.model_dict().items():
            setattr(profissional, attr, value)
        db.commit()
        db.refresh(profissional)
    return profissional

def deletar_profissional_db(db: Session, profissional_id: int):
    profissional = obter_profissional_db(db, profissional_id)
    if profissional:
        db.delete(profissional)
        db.commit()
    return profissional
