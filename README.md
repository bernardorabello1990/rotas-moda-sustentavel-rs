# Rotas da Moda Sustentável RS — Site

Site-vitrine do projeto **Rotas da Moda Sustentável RS** — pesquisa cultural sobre as
vocações territoriais da moda sustentável no Rio Grande do Sul.

Design aprovado: `docs/superpowers/specs/2026-07-22-site-rotas-moda-sustentavel-design.md`

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Onde editar o conteúdo

| O quê | Arquivo |
|---|---|
| Textos das regiões, cores, fotos | `src/data/regioes.json` |
| Biografias da equipe | `src/data/equipe.json` |
| Episódios do podcast | `src/data/episodios.json` |
| E-mail, edital, domínio, formulário | `src/data/site.ts` |

**Adicionar um episódio:** incluir em `episodios.json` um objeto
`{ "titulo": "...", "regiao": "...", "spotifyEmbedUrl": "https://open.spotify.com/embed/episode/ID" }`
— a seção Podcast troca automaticamente do "em breve" para os players.

**Adicionar foto de região:** salvar a imagem em `public/imagens/` e preencher o campo
`"imagem"` da região (ex.: `"/imagens/campanha.jpg"`).

## Deploy

Netlify (ou Cloudflare Pages): conectar o repositório GitHub — o `netlify.toml` já
configura build e pasta de publicação.

## Pendências externas

- E-mail institucional definitivo (`site.ts`)
- Nome oficial do edital e selos/logos para o rodapé
- Registro do domínio e ajuste de `site.url` + `astro.config.mjs`
- Endpoint do Formspree (`site.formEndpoint`) se optarem pelo formulário
