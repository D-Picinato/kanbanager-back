# Kanbanager Back-end

Back-end do Kanbanager, um sistema para criação e gerenciamento de quadros Kanban voltado para projetos pessoais. Permite organizar tarefas de forma simples, prática e flexível.

## Arquitetura

O projeto segue a arquitetura DDD (Domain-Driven Design), que organiza o código em camadas bem definidas:

- **Domain**: Contém a lógica de negócios pura, incluindo entidades, objetos de valor, serviços de domínio e contratos (interfaces).
- **Application**: Será responsável por orquestrar casos de uso e interagir com a camada de domínio.
- **Infrastructure**: Contém implementações técnicas, como repositórios, provedores de serviços externos e configurações específicas.
- **Presentation**: Gerencia a interface com o mundo externo, como controladores, middlewares, rotas e validações.

## Estrutura de Pastas

Abaixo está a estrutura principal do projeto:

```
src/
  server.ts                # Ponto de entrada do servidor
  tests/                   # Testes unitários
  configs/                 # Configurações globais do sistema
  shared/                  # Utilitários e tipos globais reutilizáveis
  application/             # Camada de aplicação
    use-cases/             # Casos de uso
    dtos/                  # Data Transfer Objects
    mappers/               # Mapeadores entre camadas
  domain/                  # Camada de domínio
    entities/              # Entidades do domínio
    repositories/          # Contratos de repositórios
    services/              # Serviços de domínio
    providers/             # Contratos de provedores externos
    value-objects/         # Value Objects
  infrastructure/          # Camada de infraestrutura
    configs/               # Configurações da camada de infraestrutura
    dtos/                  # Data Transfer Objects
    providers/             # Implementações de provedores externos
    repository/            # Implementações de repositórios
  presentation/            # Camada de apresentação
    @types/                # Tipos globais usados na camada de apresentação
    configs/               # Configurações da camada de apresentação
    contexts/              # Gerenciamento de contexto de requisição
    controllers/           # Controladores HTTP
    docs/                  # Documentação das rotas do sistema
    http/                  # Configuração do servidor HTTP
    middlewares/           # Middlewares globais e específicos
    routes/                # Definição de rotas
    schemas/               # Schemas de validação (Zod)
    utils/                 # Utilitários específicos da camada de apresentação
```

> **Nota**: Sempre que necessário, novas pastas ou subpastas podem ser adicionadas para acomodar novos módulos ou funcionalidades, desde que sigam a organização e os princípios da arquitetura DDD. Isso garante que o projeto permaneça escalável e bem estruturado.

## Convenções de Nomes

Para manter consistência e clareza no projeto, adotamos as seguintes convenções de nomes:

- **Serviços**: Arquivos que encapsulam lógica de negócios ou interações externas usam o sufixo `.service.ts`.
- **Repositórios**: Arquivos que manipulam dados (banco de dados, Redis, etc.) usam o sufixo `.repository.ts`.
- **Configurações**: Arquivos de configuração usam o sufixo `.config.ts`.
- **Controladores**: Arquivos que gerenciam requisições HTTP usam o sufixo `.controller.ts`.
- **Middlewares**: Arquivos de middlewares usam o sufixo `.middleware.ts`.
- **Schemas**: Arquivos de validação Zod usam o sufixo `.schema.ts`.
- **Casos de Uso**: Arquivos que implementam casos de uso usam o sufixo `.use-case.ts`.
- **Mapeadores**: Arquivos que mapeiam dados entre camadas usam o sufixo `.mapper.ts`.
- **DTOs**: Arquivos que definem Data Transfer Objects usam o sufixo `.dto.ts`.
- **Objetos de Valor**: Arquivos que representam objetos de valor usam o sufixo `.vo.ts`.

> **Nota**: Sempre que adicionar um novo módulo ou conceito ao projeto, siga o padrão de nomear o arquivo com um sufixo que represente claramente o que ele faz. Isso ajuda a manter a consistência e facilita a navegação no código.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem principal do projeto.
- **Prisma**: ORM para interagir com o banco de dados PostgreSQL.
- **LRU Cache**: Utilizado para cache em memória.
- **Zod**: Biblioteca para validação de dados.
- **Express**: Framework para criação do servidor HTTP.
- **Nodemailer**: Envio de e-mails.
- **JWT (jsonwebtoken)**: Gerenciamento de autenticação e autorização.
- **BcryptJS**: Hashing de senhas.
- **Supertest**: Testes de integração para APIs.
- **Jest**: Framework de testes unitários e de integração.
- **ESLint e Prettier**: Ferramentas para linting e formatação de código.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.
- **Zod-OpenAPI**: Geração de documentação OpenAPI a partir de schemas Zod.
- **Generate-Password**: Biblioteca para geração de código aleatórios.

## Instalação e Configuração

### Pré-requisitos

Certifique-se de ter instalado:

- **[Node.js](https://nodejs.org/)** (versão recomendada: LTS)
- **[pnpm](https://pnpm.io/)** (gerenciador de pacotes utilizado no projeto)

### Configuração do `.env`

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```
HOST="http://localhost"
PORT="3000"

ENVIRONMENT="development" # development, staging, beta, production

FRONT_URL="localhost:3002"

DATABASE_URL="postgresql://user:password@domain.com:port/database"

LRU_CACHE_MAX_COUNT="200"
LRU_SESSION_MAX_COUNT="100"

LRU_CACHE_TIME_PERSIST="3600"
LRU_SESSION_TIME_PERSIST="25200"

EMAIL_SYSTEM_NAME="Kanbanager"
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="465"
EMAIL_ADDRESS="email@gmail.com"
EMAIL_PASSWORD="senha do email"

JWT_SECRETKEY="Secret Key"
```

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/dimas-picinato/kanbanager-back.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd kanbanager-back
   ```
3. Instale as dependências:
   ```sh
   pnpm install
   ```

## Execução

### Desenvolvimento

Para rodar o ambiente de desenvolvimento, utilize:

```sh
pnpm dev
```

Para rodar o ambiente de desenvolvimento, utilize:

```sh
pnpm dev
```

O servidor será iniciado em `http://localhost:{PORT}` com a porta configurada nas variáveis de ambiente.

### Build para Produção

Para gerar a versão otimizada para produção, execute:

```sh
pnpm build
```

Para iniciar o servidor após o build:

```sh
pnpm start
```

---

## Comandos Disponíveis

- **Iniciar o servidor em modo de desenvolvimento**:

  ```bash
  pnpm dev
  ```

- **Build do projeto**:

  ```bash
  pnpm build
  ```

- **Iniciar o servidor em produção**:

  ```bash
  pnpm start
  ```

- **Executar testes**:

  ```bash
  pnpm test
  ```

- **Rodar migrações do banco de dados**:

  ```bash
  pnpm migrate
  ```

- **Deploy das migrações**:

  ```bash
  pnpm migrate:deploy
  ```

- **Gerar cliente Prisma**:

  ```bash
  pnpm generate:client
  ```

- **Gerar documentação da API**:

  ```bash
  pnpm generate:docs
  ```

- **Lint do código**:

  ```bash
  pnpm lint
  ```

- **Corrigir problemas de lint**:
  ```bash
  pnpm lint:fix
  ```

Desenvolvido por [Dimas Picinato](https://github.com/D-Picinato). Todos os direitos reservados.
