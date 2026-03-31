# Maison Fandim

**Maison Fandim** - Clínica de Estética de Luxo em Brasília

## Branding

- **Nome**: Maison Fandim
- **Cor Primária (Destaque)**: Rose Gold (#B76E79)
- **Cor Secundária**: Creme (#FAF7F5)
- **Cor Accent**: Gold (#D4AF37)
- **Tipografia**: Cormorant Garamond (display) + Outfit (body)

## Stack Técnica

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: Supabase (banco de dados + API)
- **Deploy**: Vercel

## Scripts

```bash
npm install    # Instalar dependências
npm run dev    # Development server
npm run build  # Build de produção
```

## Configuração

1. Copie `.env.example` para `.env.local`
2. Adicione suas credenciais do Supabase
3. Execute `npm run dev`

## Banco de Dados (Supabase)

Crie as seguintes tabelas no Supabase:

### posts
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | uuid | Primary key |
| titulo | text | Título do post |
| slug | text | URL amigável |
| resumo | text | Resumo |
| conteudo | text | Conteúdo completo (markdown) |
| categoria | text | Categoria |
| imagem_capa | text | URL da imagem |
| autor | text | Nome do autor |
| tags | text[] | Tags do post |
| data_publicacao | timestamp | Data de publicação |
| created_at | timestamp | Data de criação |

### contatos
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | uuid | Primary key |
| nome | text | Nome completo |
| email | text | E-mail |
| telefone | text | Telefone |
| servico_interesse | text | Serviço de interesse |
| mensagem | text | Mensagem |
| data_contato | timestamp | Data do contato |
| created_at | timestamp | Data de criação |

## Deploy no Vercel

1. Conecte seu repositório GitHub ao Vercel
2. Adicione as variáveis de ambiente:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL`
3. Deploy automático!

## SEO

O site está otimizado para SEO com:
- Meta tags completas (title, description, keywords)
- Open Graph tags
- Estrutura semântica HTML
- Sitemap dinâmico (configure no Vercel)
- robots.txt

## Funcionalidades

- Landing page elegante com animações
- Seção de blog com Supabase
- Formulário de contato
- SEO otimizado
- Design responsivo
- Animações suaves
