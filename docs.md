## Índice

1. [Visão Geral](#visão-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Arquitetura](#arquitetura)
4. [Modelos de Dados](#modelos-de-dados)
5. [Endpoints da API](#endpoints-da-api)
6. [Autenticação e Autorização](#autenticação-e-autorização)
7. [Validação e Tratamento de Erros](#validação-e-tratamento-de-erros)
8. [Testes](#testes)
9. [Boas Práticas e Padrões de Código](#boas-práticas-e-padrões-de-código)

---

## Visão Geral

Esta API é destinada a conectar desenvolvedores e empresas, oferecendo um sistema de matchmaking baseado em habilidades, preferências e requisitos. A API permite o cadastro de perfis, a busca por candidatos e vagas, e a comunicação entre as partes após um "match".

## Tecnologias Utilizadas

- **Linguagem**: C# com .NET 8
- **Banco de Dados**: MySQL com Entity Framework Core
- **Autenticação**: JWT (JSON Web Tokens)
- **Validação**: FluentValidation
- **Documentação**: Swagger
- **Testes**: xUnit, Moq

## Arquitetura

A API segue uma arquitetura de **camadas** baseada em DDD (Domain-Driven Design), incluindo:

- **Domain Layer**: Contém os modelos de domínio e as regras de negócio.
- **Application Layer**: Gerencia a lógica de aplicação, incluindo serviços e casos de uso.
- **Infrastructure Layer**: Lida com a persistência de dados e a comunicação com o banco de dados.
- **Presentation Layer**: Responsável pela interface de comunicação da API (controllers).

## Modelos de Dados

### Usuário

```csharp
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public string Role { get; set; } // Developer or Company
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
```

### Desenvolvedor

```csharp
public class Developer : User
{
    public string Stack { get; set; }
    public int ExperienceYears { get; set; }
    public string Location { get; set; }
    public string Availability { get; set; } // Freelancer, Full-time, Part-time
    public string Bio { get; set; }
    public string GitHub { get; set; }
    public string LinkedIn { get; set; }
}
```

### Empresa

```csharp
public class Company : User
{
    public string CompanyName { get; set; }
    public string Sector { get; set; }
    public string Location { get; set; }
    public string Description { get; set; }
    public string Website { get; set; }
    public List<JobOffer> JobOffers { get; set; }
}
```

### Oferta de Trabalho

```csharp
public class JobOffer
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Requirements { get; set; }
    public string Benefits { get; set; }
    public DateTime PostedAt { get; set; }
    public Company Company { get; set; }
}
```

## Endpoints da API

### Autenticação

- `POST /api/auth/register`: Registro de usuários (Desenvolvedor ou Empresa).
- `POST /api/auth/login`: Login de usuários e geração de token JWT.

### Desenvolvedores

- `GET /api/developers`: Listar todos os desenvolvedores.
- `GET /api/developers/{id}`: Obter detalhes de um desenvolvedor específico.
- `PUT /api/developers/{id}`: Atualizar informações de um desenvolvedor.
- `DELETE /api/developers/{id}`: Deletar um desenvolvedor.

### Empresas

- `GET /api/companies`: Listar todas as empresas.
- `GET /api/companies/{id}`: Obter detalhes de uma empresa específica.
- `PUT /api/companies/{id}`: Atualizar informações de uma empresa.
- `DELETE /api/companies/{id}`: Deletar uma empresa.

### Ofertas de Trabalho

- `GET /api/joboffers`: Listar todas as ofertas de trabalho.
- `GET /api/joboffers/{id}`: Obter detalhes de uma oferta de trabalho específica.
- `POST /api/joboffers`: Criar uma nova oferta de trabalho.
- `PUT /api/joboffers/{id}`: Atualizar uma oferta de trabalho.
- `DELETE /api/joboffers/{id}`: Deletar uma oferta de trabalho.

### Matchmaking

- `POST /api/match`: Realizar um match entre desenvolvedor e empresa.
- `GET /api/matches`: Listar todos os matches.

## Autenticação e Autorização

- Utilização de **JWT** para autenticação de usuários.
- **Autorização baseada em papéis**: A API diferencia permissões para desenvolvedores e empresas.

## Validação e Tratamento de Erros

- **Validação**: Implementada com **FluentValidation** para garantir a integridade dos dados recebidos.
- **Tratamento de Erros**: Centralizado em um middleware de tratamento de exceções, garantindo respostas consistentes para erros.

## Testes

- **Unitários**: Testes de métodos e funcionalidades isoladas.
- **Integração**: Testes que verificam a interação entre diferentes partes do sistema.
- **Cobertura de Testes**: Buscamos uma cobertura mínima de 80%.

## Boas Práticas e Padrões de Código

- **Clean Code**: Mantemos o código limpo, legível e modular.
- **SOLID**: Seguimos os princípios SOLID para design de software.
- **Revisão de Código**: Todos os códigos devem passar por revisão antes de serem integrados ao projeto.
