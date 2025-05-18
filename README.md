# SolutoMIND - README

## Visão Geral

SolutoMIND é uma plataforma exclusiva para colaboradores do Grupo Soluto que combina funcionalidades avançadas de pesquisa na web usando IA e criação de artefatos (documentos, planilhas, código e imagens). A plataforma utiliza os modelos mais recentes da OpenAI para fornecer resultados precisos e de alta qualidade.

## Características Principais

- **Pesquisa Avançada na Web**: Busca inteligente com exibição de fontes, imagens e resultados relevantes
- **Criação de Artefatos**: Geração de documentos, planilhas, código e imagens com IA
- **Interface em Português**: Toda a plataforma está traduzida para português brasileiro
- **Design Personalizado**: Cores e identidade visual do Grupo Soluto
- **Acesso Exclusivo**: Sistema de login exclusivo para colaboradores do Grupo Soluto

## Tecnologias Utilizadas

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes, Edge Functions
- **Banco de Dados**: PostgreSQL (Vercel Postgres)
- **Autenticação**: NextAuth.js
- **IA**: OpenAI GPT-4.1, AI SDK da Vercel

## Requisitos

- Node.js 18.0.0 ou superior
- NPM 9.0.0 ou superior
- Conta na Vercel para deploy
- Chave de API da OpenAI

## Configuração Local

1. Clone o repositório:
```bash
git clone https://github.com/gruposoluto/soluto-mind.git
cd soluto-mind
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:
```
# OpenAI
OPENAI_API_KEY=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

# NextAuth
NEXTAUTH_SECRET=seu_segredo_aqui
NEXTAUTH_URL=http://localhost:3000

# Database
POSTGRES_URL=sua_url_postgres
POSTGRES_PRISMA_URL=sua_url_prisma_postgres
POSTGRES_URL_NON_POOLING=sua_url_postgres_non_pooling
POSTGRES_USER=seu_usuario_postgres
POSTGRES_HOST=seu_host_postgres
POSTGRES_PASSWORD=sua_senha_postgres
POSTGRES_DATABASE=seu_database_postgres
```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

5. Acesse o projeto em `http://localhost:3000`

## Deploy na Vercel

1. Crie uma conta na Vercel (se ainda não tiver)
2. Instale a CLI da Vercel:
```bash
npm install -g vercel
```

3. Faça login na Vercel:
```bash
vercel login
```

4. Deploy do projeto:
```bash
vercel
```

5. Configure as variáveis de ambiente na Vercel:
   - Acesse o dashboard da Vercel
   - Selecione o projeto
   - Vá para "Settings" > "Environment Variables"
   - Adicione todas as variáveis de ambiente listadas acima

## Estrutura do Projeto

```
soluto-mind/
├── app/                  # Rotas e páginas Next.js
│   ├── api/              # API Routes
│   ├── auth/             # Autenticação
│   ├── chat/             # Interface de chat
│   └── search/           # Interface de pesquisa
├── components/           # Componentes React
│   ├── ui/               # Componentes de UI básicos
│   ├── chat/             # Componentes de chat
│   ├── search/           # Componentes de pesquisa
│   └── artifacts/        # Componentes de artefatos
├── lib/                  # Bibliotecas e utilitários
│   ├── ai/               # Integração com OpenAI
│   ├── auth/             # Autenticação
│   ├── db/               # Banco de dados
│   ├── i18n/             # Internacionalização
│   └── search/           # Funcionalidades de pesquisa
├── artifacts/            # Tipos de artefatos
│   ├── code/             # Artefatos de código
│   ├── image/            # Artefatos de imagem
│   ├── sheet/            # Artefatos de planilha
│   └── text/             # Artefatos de texto
└── public/               # Arquivos estáticos
```

## Customização

### Cores

As cores do Grupo Soluto estão definidas em:
- `tailwind.config.js` - Para uso com classes Tailwind
- `app/globals.css` - Para uso com variáveis CSS

### Tradução

Todas as strings estão centralizadas em `lib/i18n/pt-BR.ts` para fácil manutenção e atualização.

## Contribuição

Para contribuir com o projeto:
1. Crie um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto é proprietário e de uso exclusivo do Grupo Soluto.
