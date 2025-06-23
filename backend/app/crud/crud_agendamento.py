from sqlalchemy.orm import Session
from app.db.models.model_agendamento import Agendamento
from app.schemas.schema_agendamento import AgendamentoCreate, AgendamentoUpdate

def criar_agendamento_db(db: Session, obj_in: AgendamentoCreate):
    agendamento = Agendamento(**obj_in.model_dump())
    db.add(agendamento)
    db.commit()
    db.refresh(agendamento)
    return agendamento

def listar_agendamentos_db(db: Session):
    return db.query(Agendamento).all()

def obter_agendamento_db(db: Session, agendamento_id: int):
    return db.query(Agendamento).filter(Agendamento.id == agendamento_id).first()

def atualizar_agendamento_db(db: Session, agendamento_id: int, obj_in: AgendamentoUpdate):
    agendamento = obter_agendamento_db(db, agendamento_id)
    if agendamento:
        for attr, value in obj_in.model_dump(exclude_unset=True).items():
            setattr(agendamento, attr, value)
        db.commit()
        db.refresh(agendamento)
    return agendamento

def deletar_agendamento_db(db: Session, agendamento_id: int):
    agendamento = obter_agendamento_db(db, agendamento_id)
    if agendamento:
        db.delete(agendamento)
        db.commit()
    return agendamento
