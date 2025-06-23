## 📝 Descrição

API moderna para gestão de barbearias, com foco em agilidade, organização e escalabilidade.  
Gerencie clientes, serviços, horários e profissionais com uma estrutura limpa e pronta para escalar.

## 🛠️ Tecnologias

- Python 3.13  
- FastAPI  
- SQLAlchemy  
- SQLite (configurável via `.env`)  
- Pydantic (schemas e configs)  
- Uvicorn (servidor ASGI)

## ⚙️ Configuração inicial

1. Criar `.env` na raiz:

```env
DB_URL=sqlite:///./organix.db
```

2. Instalar dependências:

```bash
pip install -r requirements.txt
```

3. Rodar a aplicação:

```bash
uvicorn app.main:app --reload
```

A API será iniciada em [http://127.0.0.1:8000](http://127.0.0.1:8000), e o banco de dados `organix.db` será criado automaticamente.

## 🚀 Funcionalidades já implementadas

- Criação automática das tabelas no banco via `lifespan`
- CRUD completo para:
  - **Clientes**
    - Model, Schema, Endpoints
    - Rotas: `/api/v1/clientes`
  - **Profissionais**
    - Model, Schema, Endpoints
    - Rotas: `/api/v1/profissionais`
  - **Serviços**
    - Model, Schema, Endpoints
    - Rotas: `/api/v1/servicos`
  - **Agendamentos**
    - Model, Schema, Endpoints
    - Relacionamentos com cliente, profissional e serviço
    - Rotas: `/api/v1/agendamentos`
- Dependência `get_db()` centralizada em `core/dependencies.py`
- Estrutura modular (schemas, crud, models, endpoints separados por recurso)

## 📈 Fluxo de cadastro de cliente

1. O frontend envia dados JSON para `POST /api/v1/clientes`
2. A dependência `get_db()` injeta a sessão do banco
3. A função `cadastrar_cliente_db` insere no banco
4. O retorno traz confirmação e os dados do cliente

## 📎 Próximos passos

- Autenticação com JWT + autorização por cargos (ex: admin/barbeiro)
- Testes automatizados com Pytest
- Painel frontend com React / Next.js
- Frontend mobile com Kotlin
- Upload de arquivos (ex: foto de cliente, foto do barbeiro)
- Logs, monitoramento e controle de erros
- Validação de conflitos de horário no agendamento
- Sistema de fidelidade (pontos, descontos)
- Pagamentos (talvez webhook do MP)
- Histórico de atendimentos
- Impedir agendamento em horário ocupado
- Limitar horários conforme profissional
- Verificar se cliente existe antes de agendar

## 📫 Contato

Desenvolvido por **Murilo Ferreira (aka: MK)**