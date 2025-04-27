
# API de Gestão de Empresas e Locais

Esta é uma API desenvolvida com **NestJS** para gerenciamento de empresas e locais. Ela oferece funcionalidades para criação, atualização, exclusão e consulta de empresas e locais. A API também está protegida por **JWT (JSON Web Token)** para autenticação.

## Tecnologias Usadas
- **NestJS**: Framework para Node.js baseado em TypeScript.
- **Prisma**: ORM (Object Relational Mapper) para fácil acesso ao banco de dados.
- **JWT**: Sistema de autenticação com token para proteger as rotas da API.
- **Swagger**: Documentação interativa da API.
- **class-validator**: Biblioteca para validação de dados.

## Funcionalidades
- **Autenticação JWT**: Protege as rotas da API, garantindo que apenas usuários autenticados possam acessar recursos sensíveis.
- **Gestão de Usuários**: Criar usuário.
- **Gestão de Empresas**: Criar, atualizar, excluir e listar empresas.
- **Gestão de Locais**: Criar, atualizar, excluir e listar locais associados a empresas.

## Pré-requisitos

Antes de começar, verifique se você tem os seguintes requisitos instalados:

- **Node.js** (v20 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **Banco de dados** (exemplo: PostgreSQL, MySQL ou SQLite)
- **Prisma CLI** (para gerar o banco de dados)

## Instalação

### Passo 1: Clone o repositório

```bash
git clone git@github.com:Jaci-Xavier/hublocal-api.git
```

### Passo 2: Instale as dependências

Navegue até o diretório do projeto e instale as dependências necessárias:

```bash
cd hublocal-api
npm install
```

### Passo 3: Configure o Banco de Dados

1. Crie um banco de dados (PostgreSQL, MySQL, ou SQLite).
2. No arquivo `.env`, configure as variáveis de ambiente para conectar ao seu banco de dados. Exemplo para PostgreSQL:

```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
```

### Passo 4: Gerar o banco de dados com Prisma

Com o banco de dados configurado, execute o comando para gerar as tabelas:

```bash
npx prisma migrate dev --name init
```

### Passo 5: Iniciar a API

Agora você pode iniciar a API:

```bash
npm run start
```

A API estará disponível em `http://localhost:3000`.

## Documentação da API

A API está documentada com **Swagger**. Para visualizar a documentação interativa, acesse o seguinte link:

[http://localhost:3000/api](http://localhost:3000/api)

### Autenticação

As rotas da API estão protegidas por **JWT**. Para testar as rotas protegidas no Swagger:

1. Clique no botão **"Authorize"** no canto superior direito.
2. Insira o seu **JWT Token**.

As rotas que exigem autenticação terão o token anexado automaticamente aos headers das requisições.

### Endpoints Principais

#### Empresas

- **POST /empresas**: Cria uma nova empresa.
- **GET /empresas**: Lista todas as empresas.
- **GET /empresas/:id**: Retorna uma empresa específica.
- **PATCH /empresas/:id**: Atualiza os dados de uma empresa.
- **DELETE /empresas/:id**: Remove uma empresa.

#### Locais

- **POST /locais**: Cria um novo local associado a uma empresa.
- **GET /locais**: Lista todos os locais de uma empresa.
- **GET /locais/:id**: Retorna um local específico.
- **PATCH /locais/:id**: Atualiza os dados de um local.
- **DELETE /locais/:id**: Remove um local.
