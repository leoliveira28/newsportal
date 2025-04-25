# Portal de Notícias

## Migração de dados simulados para banco de dados

O projeto foi atualizado para utilizar um banco de dados SQLite com Prisma em vez de dados simulados (mockData). A migração incluiu as seguintes alterações:

1. Criação de funções de serviço em `lib/db-service.ts` para acessar dados do banco
2. Atualização da página inicial para buscar artigos e categorias do banco
3. Atualização das páginas de categoria para consultar categorias do banco
4. Atualização das rotas de API para utilizar consultas Prisma
5. Atualização da página de artigo individual para usar artigos relacionados do banco

Agora os dados são lidos de forma dinâmica do banco de dados SQLite, permitindo que sejam atualizados através de um painel administrativo.

## Comandos úteis

### Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

### Gerar o Prisma Client após alterações no schema

```bash
npx prisma generate
```

### Aplicar migrações do banco de dados

```bash
npx prisma migrate dev
```

### Visualizar banco de dados com Prisma Studio

```bash
npx prisma studio
``` 