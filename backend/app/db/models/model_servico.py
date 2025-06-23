from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base import Base

class Servico(Base):
    __tablename__ = "servicos"

    id = Column(Integer, primary_key=True)
    nome = Column(String, nullable=False)
    preco = Column(Float)
    duracao_minutos = Column(Integer)
    profissional_id = Column(Integer, ForeignKey("profissionais.id"))

    profissional = relationship("Profissional", back_populates="servicos")
