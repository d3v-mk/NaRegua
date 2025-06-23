from fastapi import APIRouter
from app.api.v1.endpoints import endpoint_cliente, endpoint_profissional, endpoint_servico, endpoint_agendamento

api_router = APIRouter()

api_router.include_router(endpoint_cliente.router, prefix="/clientes", tags=["Clientes"])
api_router.include_router(endpoint_profissional.router, prefix="/profissionais", tags=["Profissionais"])
api_router.include_router(endpoint_servico.router, prefix="/servicos", tags=["Serviços"])
api_router.include_router(endpoint_agendamento.router, prefix="/agendamentos", tags=["Agendamentos"])