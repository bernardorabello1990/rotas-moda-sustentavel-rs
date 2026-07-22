# Site Rotas da Moda Sustentável RS — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir o site-vitrine de página única do projeto Rotas da Moda Sustentável RS, conforme o spec `docs/superpowers/specs/2026-07-22-site-rotas-moda-sustentavel-design.md`.

**Architecture:** Site estático em Astro 5, sem framework de UI no cliente. Uma página (`index.astro`) montada por componentes de seção; conteúdo editável em arquivos de dados (`src/data/*.json` e `site.ts`). Identidade "Barro & Linho" via design tokens em CSS.

**Tech Stack:** Astro 5 · CSS puro (tokens + estilos com escopo por componente) · @fontsource (Cormorant Garamond + Karla self-hosted) · Netlify/Cloudflare Pages (deploy futuro).

## Global Constraints

- Idioma: português (BR) em todo texto visível; `lang="pt-BR"`.
- Paleta EXATA: fundo `#EDE3D4`, fundo-alt `#E2D5C0`, texto `#3E2F23`, texto-2 `#6B5844`, ação `#9C4A2F`, acento `#C9A227`, apoio `#7A6A53`.
- Cores das regiões: Serra Gaúcha `#9C4A2F` · Campanha `#C9A227` · Vale dos Sinos `#7A6A53` · Metropolitana `#3E2F23`.
- Tipografia: Cormorant Garamond (títulos) e Karla (texto), self-hosted via @fontsource. Nenhuma outra fonte.
- Zero JavaScript de framework no cliente (sem React/Vue/etc.). JS vanilla apenas se imprescindível.
- IDs de âncora fixos: `o-projeto`, `regioes`, `metodologia`, `podcast`, `equipe`, `contato`.
- Menu: O Projeto · Regiões · Podcast · Equipe · Contato (Metodologia tem id mas não entra no menu).
- Mobile-first; contraste AA; alt text em toda imagem; HTML semântico.
- Empty states elegantes: nada pode parecer inacabado (sem "lorem ipsum", sem caixas vazias).
- Commits frequentes (1+ por tarefa), mensagens em PT-BR, terminando com `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`.
- Verificação padrão de cada tarefa: `npm run build` sem erros + asserções `grep` no `dist/index.html`.

---

### Task 1: Scaffold Astro + design tokens + Layout base

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/styles/global.css`, `src/layouts/Layout.astro`, `src/pages/index.astro`
- Modify: `.gitignore`

**Interfaces:**
- Produces: `Layout.astro` com props `{ titulo?: string }`, importando fontes e `global.css`; tokens CSS `--cor-fundo`, `--cor-fundo-alt`, `--cor-texto`, `--cor-texto-2`, `--cor-acao`, `--cor-acento`, `--cor-apoio`, `--fonte-titulo`, `--fonte-texto`, `--largura-max`; classes utilitárias `.container`, `.secao`, `.tag`, `.botao`, `.botao--fantasma`, `.titulo-secao`.

- [ ] **Step 1: Criar package.json**

```json
{
  "name": "rotas-moda-sustentavel-rs",
  "type": "module",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

- [ ] **Step 2: Instalar dependências**

Run: `npm install astro@^5 @fontsource/cormorant-garamond @fontsource/karla`
Expected: instalação sem erros; `node_modules/` criado.

- [ ] **Step 3: Criar astro.config.mjs e tsconfig.json**

`astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rotasdamodars.com.br', // ajustar quando o domínio for registrado
});
```

`tsconfig.json`:
```json
{
  "extends": "astro/tsconfigs/strict"
}
```

- [ ] **Step 4: Adicionar artefatos de build ao .gitignore**

Acrescentar ao `.gitignore` existente:
```
node_modules/
dist/
.astro/
```

- [ ] **Step 5: Criar src/styles/global.css (design tokens Barro & Linho)**

```css
/* Identidade "Barro & Linho" — ver spec 2026-07-22 */
:root {
  --cor-fundo: #EDE3D4;
  --cor-fundo-alt: #E2D5C0;
  --cor-texto: #3E2F23;
  --cor-texto-2: #6B5844;
  --cor-acao: #9C4A2F;
  --cor-acento: #C9A227;
  --cor-apoio: #7A6A53;
  --fonte-titulo: 'Cormorant Garamond', Georgia, serif;
  --fonte-texto: 'Karla', system-ui, sans-serif;
  --largura-max: 1100px;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}

body {
  margin: 0;
  background: var(--cor-fundo);
  color: var(--cor-texto);
  font-family: var(--fonte-texto);
  font-size: 1.06rem;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: var(--fonte-titulo);
  font-weight: 500;
  line-height: 1.12;
  margin: 0 0 0.5em;
}

p { margin: 0 0 1em; }

a { color: var(--cor-acao); }

img { max-width: 100%; display: block; }

.container {
  max-width: var(--largura-max);
  margin-inline: auto;
  padding-inline: 1.25rem;
}

.secao { padding-block: 4.5rem; }
@media (min-width: 768px) {
  .secao { padding-block: 6rem; }
}

.tag {
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--cor-acao);
  margin-bottom: 1rem;
}

.titulo-secao {
  font-size: clamp(1.9rem, 4vw, 2.6rem);
}

.botao {
  display: inline-block;
  background: var(--cor-acao);
  color: var(--cor-fundo);
  padding: 0.8rem 1.7rem;
  border-radius: 999px;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-decoration: none;
  border: 1px solid var(--cor-acao);
  transition: filter 0.2s;
}
.botao:hover { filter: brightness(1.1); }

.botao--fantasma {
  background: transparent;
  color: var(--cor-texto);
  border-color: var(--cor-texto);
}

.pular-link {
  position: absolute;
  left: -9999px;
  background: var(--cor-texto);
  color: var(--cor-fundo);
  padding: 0.6rem 1rem;
  z-index: 100;
}
.pular-link:focus { left: 0.5rem; top: 0.5rem; }

:focus-visible {
  outline: 2px solid var(--cor-acao);
  outline-offset: 3px;
}
```

- [ ] **Step 6: Criar src/layouts/Layout.astro**

```astro
---
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import '@fontsource/karla/400.css';
import '@fontsource/karla/500.css';
import '@fontsource/karla/600.css';
import '../styles/global.css';

interface Props { titulo?: string }
const { titulo = 'Rotas da Moda Sustentável RS' } = Astro.props;
---
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{titulo}</title>
  </head>
  <body>
    <a class="pular-link" href="#conteudo">Pular para o conteúdo</a>
    <slot />
  </body>
</html>
```

- [ ] **Step 7: Criar src/pages/index.astro provisório**

```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout>
  <main id="conteudo">
    <h1>Rotas da Moda Sustentável RS</h1>
  </main>
</Layout>
```

- [ ] **Step 8: Verificar build**

Run: `npm run build && grep -c 'pt-BR' dist/index.html`
Expected: build conclui sem erros; grep imprime `1` (ou mais).

- [ ] **Step 9: Commit**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json src/ .gitignore
git commit -m "feat: scaffold Astro com tokens Barro & Linho e layout base

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 2: Arquivos de dados (conteúdo editável)

**Files:**
- Create: `src/data/tipos.ts`, `src/data/site.ts`, `src/data/regioes.json`, `src/data/equipe.json`, `src/data/episodios.json`

**Interfaces:**
- Produces:
  - `tipos.ts`: `interface Regiao { id: string; nome: string; vocacao: string; cor: string; textoClaro: boolean; texto: string; imagem: string | null }` · `interface Membro { nome: string; papel: string; bio: string; links: { rotulo: string; url: string }[]; foto: string | null }` · `interface Episodio { titulo: string; regiao: string; spotifyEmbedUrl: string }`
  - `site.ts`: `export const site` com campos `nome`, `descricao`, `email`, `formEndpoint`, `instagram`, `creditoEdital`, `url` (todos `string`).
  - JSONs consumíveis via `import regioes from '../data/regioes.json'`.

- [ ] **Step 1: Criar src/data/tipos.ts**

```ts
export interface Regiao {
  id: string;
  nome: string;
  vocacao: string;
  cor: string;
  textoClaro: boolean;
  texto: string;
  imagem: string | null; // caminho em /public quando houver fotos da pesquisa
}

export interface Membro {
  nome: string;
  papel: string;
  bio: string;
  links: { rotulo: string; url: string }[];
  foto: string | null; // caminho em /public quando houver retratos
}

export interface Episodio {
  titulo: string;
  regiao: string;
  spotifyEmbedUrl: string; // ex.: https://open.spotify.com/embed/episode/ID
}
```

- [ ] **Step 2: Criar src/data/site.ts**

```ts
export const site = {
  nome: 'Rotas da Moda Sustentável RS',
  descricao:
    'Mapeamento cultural das vocações territoriais da moda sustentável no Rio Grande do Sul — dos fios de lã da Campanha ao carnaval de Porto Alegre.',
  // Provisório — trocar pelo e-mail institucional definitivo (pendência com a equipe):
  email: 'contato@rotasdamodars.com.br',
  // Quando criar o formulário no Formspree, colar o endpoint aqui (ex.: 'https://formspree.io/f/abcd1234').
  // Vazio = o site mostra apenas o e-mail (mailto) — comportamento correto, não é erro:
  formEndpoint: '',
  instagram: '', // preencher quando o perfil existir (URL completa)
  // Ajustar com o nome oficial do edital quando confirmado com a equipe:
  creditoEdital: 'Projeto contemplado em edital público de fomento à cultura.',
  url: 'https://rotasdamodars.com.br', // ajustar quando o domínio for registrado
};
```

- [ ] **Step 3: Criar src/data/regioes.json**

```json
[
  {
    "id": "serra",
    "nome": "Serra Gaúcha",
    "vocacao": "Vestuário, moda festa e noivas",
    "cor": "#9C4A2F",
    "textoClaro": true,
    "texto": "Tradição consolidada na indústria do vestuário, com forte presença da moda festa e do universo das noivas. Um polo onde o saber técnico das confecções encontra novas práticas de responsabilidade.",
    "imagem": null
  },
  {
    "id": "campanha",
    "nome": "Região da Campanha",
    "vocacao": "Lã, ovinocultura e tinturaria natural",
    "cor": "#C9A227",
    "textoClaro": false,
    "texto": "Na fronteira sul, a cadeia da lã e a ovinocultura sustentam ofícios históricos, enquanto a tinturaria natural conecta a moda ao pampa, suas plantas e seus pigmentos.",
    "imagem": null
  },
  {
    "id": "sinos",
    "nome": "Vale dos Sinos",
    "vocacao": "Indústria e inovação social",
    "cor": "#7A6A53",
    "textoClaro": true,
    "texto": "Histórico industrial relevante — especialmente no calçado — e um ecossistema emergente de iniciativas de inovação e responsabilidade social que reinventa o território produtivo.",
    "imagem": null
  },
  {
    "id": "metropolitana",
    "nome": "Região Metropolitana de Porto Alegre",
    "vocacao": "Upcycling, economia circular e carnaval",
    "cor": "#3E2F23",
    "textoClaro": true,
    "texto": "Onde se consolidam práticas de upcycling, economia circular e reaproveitamento têxtil — e onde o carnaval transforma a reutilização criativa de materiais em expressão cultural viva.",
    "imagem": null
  }
]
```

- [ ] **Step 4: Criar src/data/equipe.json**

```json
[
  {
    "nome": "Dafne Panatieri",
    "papel": "Pesquisa e estratégia em economia criativa",
    "bio": "Pesquisadora e estrategista na interface entre moda, cultura, sustentabilidade e impacto social. Administradora pela FGV, especialista em Negócios da Moda pela USP e em Diversidade e Inclusão, mestranda em Comunicação pela PUCRS. Experiência em pesquisa aplicada, projetos culturais, curadoria e articulação de parcerias no setor da moda.",
    "links": [],
    "foto": null
  },
  {
    "nome": "Laura Madalosso",
    "papel": "Consultoria em moda e sustentabilidade",
    "bio": "Consultora, pesquisadora e estrategista dedicada à transição da moda para modelos circulares, justos e regenerativos. Publicitária pela UFRGS, pós-graduada em Design de Moda (Unisinos) e especialista em Sustentabilidade (UNESC), com mais de 15 anos de indústria. Sócia-fundadora da Cora Design, consultoria estratégica e Empresa B Certificada.",
    "links": [{ "rotulo": "Cora Design", "url": "https://coradesign.co/" }],
    "foto": null
  },
  {
    "nome": "Alice Castiel",
    "papel": "Produção cultural e artística",
    "bio": "Produtora cultural, artística e pesquisadora musical, graduada em Cinema pela PUCRS e mestranda em Design Estratégico pela Unisinos. Idealizou o projeto Concha, premiado pelo Edital Natura Musical, e produziu projetos como Ialodê (Lei Aldir Blanc) e IGBA AWÓ (Itaú Rumos). Vivência em metodologias ágeis e gestão de projetos e produtos digitais.",
    "links": [],
    "foto": null
  }
]
```

- [ ] **Step 5: Criar src/data/episodios.json**

```json
[]
```

(Vazio de propósito: a seção Podcast mostra o empty state. Quando existirem episódios, adicionar objetos `{ "titulo", "regiao", "spotifyEmbedUrl" }` — a seção troca sozinha para os players.)

- [ ] **Step 6: Verificar dados**

Run: `node -e "const r=require('./src/data/regioes.json'),e=require('./src/data/equipe.json'),p=require('./src/data/episodios.json');console.assert(r.length===4,'4 regioes');console.assert(e.length===3,'3 membros');console.assert(Array.isArray(p),'episodios array');console.log('dados OK')"`
Expected: `dados OK`

- [ ] **Step 7: Commit**

```bash
git add src/data/
git commit -m "feat: dados editáveis de regiões, equipe, episódios e configuração

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 3: Header, Footer e esqueleto da página

**Files:**
- Create: `src/components/Header.astro`, `src/components/Footer.astro`
- Modify: `src/pages/index.astro`

**Interfaces:**
- Consumes: `site` de `src/data/site.ts`; classes utilitárias do global.css.
- Produces: `Header.astro` (sem props) com wordmark + nav de âncoras; `Footer.astro` (sem props); `index.astro` com `<main id="conteudo">` contendo stubs `<section>` com os ids `o-projeto`, `regioes`, `metodologia`, `podcast`, `equipe`, `contato` (substituídos nas tasks seguintes).

- [ ] **Step 1: Criar src/components/Header.astro**

```astro
---
const links = [
  { rotulo: 'O Projeto', href: '#o-projeto' },
  { rotulo: 'Regiões', href: '#regioes' },
  { rotulo: 'Podcast', href: '#podcast' },
  { rotulo: 'Equipe', href: '#equipe' },
  { rotulo: 'Contato', href: '#contato' },
];
---
<header class="topo">
  <div class="container topo__linha">
    <a class="topo__marca" href="#conteudo">Rotas da Moda <em>Sustentável RS</em></a>
    <nav aria-label="Navegação principal">
      <ul class="topo__menu">
        {links.map((l) => (
          <li><a href={l.href} class:list={['topo__link', { 'topo__link--destaque': l.href === '#contato' }]}>{l.rotulo}</a></li>
        ))}
      </ul>
    </nav>
  </div>
</header>

<style>
  .topo {
    border-bottom: 1px solid color-mix(in srgb, var(--cor-texto) 14%, transparent);
    padding-block: 0.9rem;
    background: var(--cor-fundo);
  }
  .topo__linha {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem 1.5rem;
  }
  .topo__marca {
    font-family: var(--fonte-titulo);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--cor-texto);
    text-decoration: none;
    white-space: nowrap;
  }
  .topo__marca em { font-weight: 400; }
  .topo__menu {
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem 1.4rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .topo__link {
    font-size: 0.82rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--cor-texto-2);
    text-decoration: none;
  }
  .topo__link:hover { color: var(--cor-acao); }
  .topo__link--destaque { color: var(--cor-acao); font-weight: 600; }
</style>
```

- [ ] **Step 2: Criar src/components/Footer.astro**

```astro
---
import { site } from '../data/site.ts';
const ano = new Date().getFullYear();
---
<footer class="rodape">
  <div class="container">
    <p class="rodape__edital">{site.creditoEdital}</p>
    <p class="rodape__selos">Espaço reservado aos selos e logos institucionais do edital e dos apoios.</p>
    <div class="rodape__linha">
      <span>© {ano} {site.nome}</span>
      <span>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        {site.instagram && <> · <a href={site.instagram}>Instagram</a></>}
      </span>
    </div>
  </div>
</footer>

<style>
  .rodape {
    background: var(--cor-texto);
    color: var(--cor-fundo-alt);
    padding-block: 2.5rem;
    font-size: 0.9rem;
  }
  .rodape a { color: var(--cor-acento); text-decoration: none; }
  .rodape a:hover { text-decoration: underline; }
  .rodape__edital { margin-bottom: 0.3rem; }
  .rodape__selos {
    font-size: 0.8rem;
    opacity: 0.65;
    margin-bottom: 1.6rem;
  }
  .rodape__linha {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem 1.5rem;
    border-top: 1px solid color-mix(in srgb, var(--cor-fundo) 20%, transparent);
    padding-top: 1.2rem;
  }
</style>
```

- [ ] **Step 3: Montar esqueleto em src/pages/index.astro**

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---
<Layout>
  <Header />
  <main id="conteudo">
    <section id="hero" class="secao"><div class="container"><h1>Hero (Task 4)</h1></div></section>
    <section id="o-projeto" class="secao"><div class="container"><h2>O Projeto (Task 5)</h2></div></section>
    <section id="regioes" class="secao"><div class="container"><h2>Regiões (Task 6)</h2></div></section>
    <section id="metodologia" class="secao"><div class="container"><h2>Metodologia (Task 5)</h2></div></section>
    <section id="podcast" class="secao"><div class="container"><h2>Podcast (Task 7)</h2></div></section>
    <section id="equipe" class="secao"><div class="container"><h2>Equipe (Task 8)</h2></div></section>
    <section id="contato" class="secao"><div class="container"><h2>Contato (Task 9)</h2></div></section>
  </main>
  <Footer />
</Layout>
```

- [ ] **Step 4: Verificar build e âncoras**

Run: `npm run build && for id in o-projeto regioes metodologia podcast equipe contato; do grep -q "id=\"$id\"" dist/index.html && echo "OK $id" || echo "FALTA $id"; done`
Expected: build sem erros; seis linhas `OK <id>`.

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.astro src/components/Footer.astro src/pages/index.astro
git commit -m "feat: header com navegação por âncoras, rodapé e esqueleto da página

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 4: Componente MapaRS + seção Hero

**Files:**
- Create: `src/components/MapaRS.astro`, `src/components/Hero.astro`
- Modify: `src/pages/index.astro` (substituir stub `#hero`)

**Interfaces:**
- Consumes: `regioes.json` (campos `id`, `nome`, `cor`), `site` (`descricao`), tokens CSS.
- Produces: `MapaRS.astro` com props `{ rotulos?: boolean }` (default `true`) — SVG estilizado do RS com um marcador por região; `Hero.astro` (sem props).

- [ ] **Step 1: Criar src/components/MapaRS.astro**

```astro
---
import regioes from '../data/regioes.json';

interface Props { rotulos?: boolean }
const { rotulos = true } = Astro.props;

// Posições dos marcadores no viewBox 0 0 200 160 (mapa estilizado, não cartográfico)
const COORDENADAS: Record<string, { x: number; y: number; dx: number; dy: number }> = {
  serra: { x: 128, y: 48, dx: 0, dy: -13 },
  campanha: { x: 58, y: 98, dx: 0, dy: 20 },
  sinos: { x: 130, y: 76, dx: 32, dy: -8 },
  metropolitana: { x: 146, y: 104, dx: 8, dy: 19 },
};
const ROTULOS_CURTOS: Record<string, string> = {
  serra: 'Serra Gaúcha',
  campanha: 'Campanha',
  sinos: 'Vale dos Sinos',
  metropolitana: 'Porto Alegre',
};
---
<svg
  viewBox="0 0 200 160"
  role="img"
  aria-label="Mapa estilizado do Rio Grande do Sul com as quatro regiões da pesquisa: Serra Gaúcha, Região da Campanha, Vale dos Sinos e Região Metropolitana de Porto Alegre"
  class="mapa"
>
  <path
    d="M28,38 L70,22 L118,18 L152,30 L170,52 L178,80 L162,102 L138,124 L108,140 L76,134 L48,112 L30,84 Z"
    fill="var(--cor-fundo-alt)"
    stroke="var(--cor-acao)"
    stroke-width="1.6"
    stroke-linejoin="round"
  />
  {regioes.map((r) => {
    const c = COORDENADAS[r.id];
    return (
      <g>
        <circle cx={c.x} cy={c.y} r="7" fill={r.cor} />
        <circle cx={c.x} cy={c.y} r="10.5" fill="none" stroke={r.cor} stroke-width="0.8" opacity="0.45" />
        {rotulos && (
          <text x={c.x + c.dx} y={c.y + c.dy} text-anchor="middle" class="mapa__rotulo">
            {ROTULOS_CURTOS[r.id]}
          </text>
        )}
      </g>
    );
  })}
</svg>

<style>
  .mapa { width: 100%; height: auto; }
  .mapa__rotulo {
    font-family: var(--fonte-texto);
    font-size: 7.5px;
    letter-spacing: 0.04em;
    fill: var(--cor-texto);
  }
</style>
```

- [ ] **Step 2: Criar src/components/Hero.astro**

```astro
---
import MapaRS from './MapaRS.astro';
import { site } from '../data/site.ts';
---
<section id="hero" class="heroi">
  <div class="container heroi__grade">
    <div>
      <span class="tag">Pesquisa cultural · Rio Grande do Sul</span>
      <h1 class="heroi__titulo">Os caminhos da moda<br />sustentável no <em>RS</em></h1>
      <p class="heroi__texto">{site.descricao}</p>
      <div class="heroi__acoes">
        <a class="botao" href="#contato">Seja parceiro</a>
        <a class="botao botao--fantasma" href="#o-projeto">Conheça o projeto</a>
      </div>
    </div>
    <div class="heroi__mapa">
      <MapaRS />
    </div>
  </div>
</section>

<style>
  .heroi { padding-block: 4rem 3.5rem; }
  .heroi__grade {
    display: grid;
    gap: 3rem;
    align-items: center;
  }
  @media (min-width: 820px) {
    .heroi { padding-block: 6rem 5rem; }
    .heroi__grade { grid-template-columns: 1.15fr 1fr; }
  }
  .heroi__titulo { font-size: clamp(2.4rem, 6vw, 3.9rem); }
  .heroi__texto {
    color: var(--cor-texto-2);
    max-width: 34rem;
    font-size: 1.12rem;
  }
  .heroi__acoes {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 1.6rem;
  }
  .heroi__mapa { max-width: 460px; margin-inline: auto; width: 100%; }
</style>
```

- [ ] **Step 3: Substituir o stub em index.astro**

Em `src/pages/index.astro`, adicionar `import Hero from '../components/Hero.astro';` no frontmatter e trocar a linha `<section id="hero" ...>...</section>` por `<Hero />`.

- [ ] **Step 4: Verificar build, mapa e CTAs**

Run: `npm run build && grep -q 'aria-label="Mapa estilizado' dist/index.html && grep -q 'Seja parceiro' dist/index.html && echo 'hero OK'`
Expected: `hero OK`

- [ ] **Step 5: Conferência visual**

Run: `npm run dev` e abrir `http://localhost:4321`.
Expected: hero em duas colunas no desktop (texto à esquerda, mapa à direita), empilhado no mobile; 4 marcadores coloridos com rótulos.

- [ ] **Step 6: Commit**

```bash
git add src/components/MapaRS.astro src/components/Hero.astro src/pages/index.astro
git commit -m "feat: mapa ilustrado do RS e seção hero

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 5: Seções O Projeto e Metodologia

**Files:**
- Create: `src/components/Projeto.astro`, `src/components/Metodologia.astro`
- Modify: `src/pages/index.astro` (substituir stubs `#o-projeto` e `#metodologia`)

**Interfaces:**
- Consumes: `site.creditoEdital`; classes utilitárias.
- Produces: `Projeto.astro` e `Metodologia.astro` (sem props).

- [ ] **Step 1: Criar src/components/Projeto.astro**

```astro
---
import { site } from '../data/site.ts';
---
<section id="o-projeto" class="secao">
  <div class="container projeto">
    <div class="projeto__cabeca">
      <span class="tag">O Projeto</span>
      <h2 class="titulo-secao">A moda como campo cultural — <em>enfim no mapa</em></h2>
    </div>
    <div class="projeto__texto">
      <p>
        A moda raramente é tratada como campo cultural estruturado nas políticas públicas — apesar de sua
        relação profunda com identidade, território, memória, festas e saberes tradicionais. O
        <strong>Rotas da Moda Sustentável RS</strong> nasce para preencher essa lacuna.
      </p>
      <p>
        O projeto realiza uma pesquisa cultural aplicada que mapeia e sistematiza as vocações territoriais
        da moda sustentável no Rio Grande do Sul, ouvindo quem faz: designers, artesãos, coletivos,
        cooperativas, carnavalescos, pequenas indústrias, pesquisadores e agentes culturais.
      </p>
      <p>
        O resultado será um diagnóstico cultural inédito e uma base pública de dados — contribuindo para o
        planejamento e o fortalecimento das políticas culturais e das indústrias criativas do estado.
      </p>
      <p class="projeto__edital">{site.creditoEdital}</p>
    </div>
  </div>
</section>

<style>
  .projeto { display: grid; gap: 1.5rem; }
  @media (min-width: 820px) {
    .projeto { grid-template-columns: 1fr 1.4fr; gap: 4rem; }
  }
  .projeto__texto p { color: var(--cor-texto-2); }
  .projeto__texto strong { color: var(--cor-texto); }
  .projeto__edital {
    border-left: 3px solid var(--cor-acento);
    padding-left: 1rem;
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
</style>
```

- [ ] **Step 2: Criar src/components/Metodologia.astro**

```astro
---
const passos = [
  { titulo: 'Exploração', texto: 'Levantamento documental e análise de estudos, políticas públicas e mapeamentos já existentes.' },
  { titulo: 'Mapeamento', texto: 'Identificação de agentes, vocações e práticas da moda sustentável em cada território.' },
  { titulo: 'Escuta em campo', texto: 'Entrevistas em profundidade e escutas sensíveis, com registro em áudio e fotografia dos processos.' },
  { titulo: 'Análise', texto: 'Consolidação dos dados em um relatório técnico-cultural com recomendações estratégicas.' },
  { titulo: 'Devolução pública', texto: 'Podcast, plataforma de mapeamento e evento de lançamento em Porto Alegre.' },
];
---
<section id="metodologia" class="secao metodologia">
  <div class="container">
    <span class="tag">Metodologia</span>
    <h2 class="titulo-secao">Uma jornada de escuta em cinco movimentos</h2>
    <ol class="metodologia__lista">
      {passos.map((p, i) => (
        <li class="metodologia__passo">
          <span class="metodologia__numero">{i + 1}</span>
          <h3>{p.titulo}</h3>
          <p>{p.texto}</p>
        </li>
      ))}
    </ol>
  </div>
</section>

<style>
  .metodologia { background: var(--cor-fundo-alt); }
  .metodologia__lista {
    list-style: none;
    margin: 2.5rem 0 0;
    padding: 0;
    display: grid;
    gap: 2rem 1.5rem;
    counter-reset: passo;
  }
  @media (min-width: 680px) { .metodologia__lista { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1000px) { .metodologia__lista { grid-template-columns: repeat(5, 1fr); } }
  .metodologia__numero {
    font-family: var(--fonte-titulo);
    font-size: 2rem;
    color: var(--cor-acao);
    display: block;
    margin-bottom: 0.3rem;
  }
  .metodologia__passo h3 { font-size: 1.25rem; }
  .metodologia__passo p { font-size: 0.92rem; color: var(--cor-texto-2); margin: 0; }
</style>
```

- [ ] **Step 3: Substituir stubs em index.astro**

Adicionar imports `Projeto` e `Metodologia`; trocar `<section id="o-projeto" ...>` por `<Projeto />` e `<section id="metodologia" ...>` por `<Metodologia />`.

- [ ] **Step 4: Verificar build**

Run: `npm run build && grep -q 'diagnóstico cultural inédito' dist/index.html && grep -q 'cinco movimentos' dist/index.html && echo 'projeto+metodologia OK'`
Expected: `projeto+metodologia OK`

- [ ] **Step 5: Commit**

```bash
git add src/components/Projeto.astro src/components/Metodologia.astro src/pages/index.astro
git commit -m "feat: seções O Projeto e Metodologia

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 6: Seção As 4 Regiões

**Files:**
- Create: `src/components/Regioes.astro`
- Modify: `src/pages/index.astro` (substituir stub `#regioes`)

**Interfaces:**
- Consumes: `regioes.json` completo (`Regiao[]` de `tipos.ts`); `MapaRS.astro`.
- Produces: `Regioes.astro` (sem props). Cartões usam `imagem` quando não-nula (`<img src={r.imagem} alt={...}>`), senão faixa de textura na cor da região.

- [ ] **Step 1: Criar src/components/Regioes.astro**

```astro
---
import MapaRS from './MapaRS.astro';
import regioes from '../data/regioes.json';
import type { Regiao } from '../data/tipos.ts';

const lista = regioes as Regiao[];
---
<section id="regioes" class="secao">
  <div class="container">
    <div class="regioes__cabeca">
      <div>
        <span class="tag">As Rotas</span>
        <h2 class="titulo-secao">Quatro territórios, quatro vocações</h2>
        <p class="regioes__intro">
          Cada região do estado teceu, ao longo do tempo, uma relação própria entre moda, cultura e
          sustentabilidade. São essas vocações que a pesquisa percorre.
        </p>
      </div>
      <div class="regioes__mapa"><MapaRS /></div>
    </div>

    <div class="regioes__grade">
      {lista.map((r) => (
        <article class="cartao" style={`--cor-regiao: ${r.cor}`}>
          {r.imagem ? (
            <img class="cartao__imagem" src={r.imagem} alt={`Registro fotográfico da pesquisa na região ${r.nome}`} />
          ) : (
            <div class="cartao__textura" aria-hidden="true"></div>
          )}
          <div class="cartao__corpo">
            <h3>{r.nome}</h3>
            <p class="cartao__vocacao" class:list={[{ 'cartao__vocacao--claro': r.textoClaro }]}>{r.vocacao}</p>
            <p class="cartao__texto">{r.texto}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

<style>
  .regioes__cabeca {
    display: grid;
    gap: 2rem;
    align-items: center;
    margin-bottom: 3rem;
  }
  @media (min-width: 820px) {
    .regioes__cabeca { grid-template-columns: 1.3fr 1fr; gap: 4rem; }
  }
  .regioes__intro { color: var(--cor-texto-2); max-width: 32rem; }
  .regioes__mapa { max-width: 380px; margin-inline: auto; width: 100%; }

  .regioes__grade { display: grid; gap: 1.5rem; }
  @media (min-width: 680px) { .regioes__grade { grid-template-columns: repeat(2, 1fr); } }

  .cartao {
    background: color-mix(in srgb, var(--cor-fundo-alt) 55%, var(--cor-fundo));
    border: 1px solid color-mix(in srgb, var(--cor-texto) 10%, transparent);
    border-radius: 12px;
    overflow: hidden;
  }
  .cartao__textura {
    height: 10px;
    background: linear-gradient(90deg, var(--cor-regiao), color-mix(in srgb, var(--cor-regiao) 55%, var(--cor-fundo)));
  }
  .cartao__imagem { width: 100%; height: 200px; object-fit: cover; }
  .cartao__corpo { padding: 1.6rem 1.7rem 1.8rem; }
  .cartao__corpo h3 { font-size: 1.6rem; }
  .cartao__vocacao {
    display: inline-block;
    background: var(--cor-regiao);
    color: var(--cor-texto);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.3rem 0.8rem;
    border-radius: 999px;
    margin-bottom: 0.9rem;
  }
  .cartao__vocacao--claro { color: var(--cor-fundo); }
  .cartao__texto { color: var(--cor-texto-2); margin: 0; font-size: 0.98rem; }
</style>
```

- [ ] **Step 2: Substituir stub em index.astro**

Adicionar import `Regioes`; trocar `<section id="regioes" ...>` por `<Regioes />`.

- [ ] **Step 3: Verificar build e as 4 regiões**

Run: `npm run build && for n in "Serra Gaúcha" "Região da Campanha" "Vale dos Sinos" "Região Metropolitana de Porto Alegre"; do grep -q "$n" dist/index.html && echo "OK $n" || echo "FALTA $n"; done`
Expected: quatro linhas `OK ...`.

- [ ] **Step 4: Commit**

```bash
git add src/components/Regioes.astro src/pages/index.astro
git commit -m "feat: seção As 4 Regiões com mapa e cartões por território

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 7: Seção Podcast (empty state vivo)

**Files:**
- Create: `src/components/Podcast.astro`
- Modify: `src/pages/index.astro` (substituir stub `#podcast`)

**Interfaces:**
- Consumes: `episodios.json` (`Episodio[]`), `regioes.json` (nomes para os episódios anunciados), `site.email`.
- Produces: `Podcast.astro` (sem props). Com `episodios.json` vazio → empty state; com itens → players `<iframe>` do Spotify.

- [ ] **Step 1: Criar src/components/Podcast.astro**

```astro
---
import episodios from '../data/episodios.json';
import regioes from '../data/regioes.json';
import { site } from '../data/site.ts';
import type { Episodio } from '../data/tipos.ts';

const lista = episodios as Episodio[];
const assunto = encodeURIComponent('Quero ser avisado sobre o podcast Rotas da Moda Sustentável RS');
---
<section id="podcast" class="secao podcast">
  <div class="container">
    <span class="tag">Podcast</span>
    <h2 class="titulo-secao">As vozes dos territórios</h2>

    {lista.length === 0 ? (
      <div class="podcast__embreve">
        <p class="podcast__chamada">
          As entrevistas da pesquisa darão origem a um podcast autoral — um episódio dedicado a cada
          região, com os próprios agentes territoriais como protagonistas.
        </p>
        <ul class="podcast__previa">
          {regioes.map((r, i) => (
            <li>
              <span class="podcast__num">EP {i + 1}</span>
              <span>{r.nome}</span>
              <span class="podcast__breve">em breve</span>
            </li>
          ))}
        </ul>
        <a class="botao" href={`mailto:${site.email}?subject=${assunto}`}>Quero ser avisado da estreia</a>
      </div>
    ) : (
      <div class="podcast__lista">
        {lista.map((ep) => (
          <figure class="podcast__episodio">
            <figcaption>{ep.titulo} — {ep.regiao}</figcaption>
            <iframe
              src={ep.spotifyEmbedUrl}
              title={`Player do episódio ${ep.titulo}`}
              width="100%"
              height="152"
              frameborder="0"
              loading="lazy"
              allow="encrypted-media"
            ></iframe>
          </figure>
        ))}
      </div>
    )}
  </div>
</section>

<style>
  .podcast { background: var(--cor-texto); color: var(--cor-fundo); }
  .podcast .tag { color: var(--cor-acento); }
  .podcast__chamada { max-width: 38rem; color: var(--cor-fundo-alt); }
  .podcast__previa {
    list-style: none;
    margin: 2rem 0;
    padding: 0;
    display: grid;
    gap: 0.6rem;
    max-width: 34rem;
  }
  .podcast__previa li {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    border-bottom: 1px solid color-mix(in srgb, var(--cor-fundo) 18%, transparent);
    padding-bottom: 0.6rem;
    font-family: var(--fonte-titulo);
    font-size: 1.2rem;
  }
  .podcast__num {
    font-family: var(--fonte-texto);
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    color: var(--cor-acento);
  }
  .podcast__breve {
    margin-left: auto;
    font-family: var(--fonte-texto);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.55;
  }
  .podcast__lista { display: grid; gap: 1.5rem; margin-top: 2rem; }
  .podcast__episodio { margin: 0; }
  .podcast__episodio figcaption { margin-bottom: 0.5rem; font-family: var(--fonte-titulo); font-size: 1.15rem; }
</style>
```

- [ ] **Step 2: Substituir stub em index.astro**

Adicionar import `Podcast`; trocar `<section id="podcast" ...>` por `<Podcast />`.

- [ ] **Step 3: Verificar build e empty state**

Run: `npm run build && grep -q 'Quero ser avisado da estreia' dist/index.html && grep -q 'EP 4' dist/index.html && echo 'podcast OK'`
Expected: `podcast OK`

- [ ] **Step 4: Commit**

```bash
git add src/components/Podcast.astro src/pages/index.astro
git commit -m "feat: seção Podcast com estado em-breve e suporte futuro a players

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 8: Seção Equipe

**Files:**
- Create: `src/components/Equipe.astro`
- Modify: `src/pages/index.astro` (substituir stub `#equipe`)

**Interfaces:**
- Consumes: `equipe.json` (`Membro[]`).
- Produces: `Equipe.astro` (sem props). Sem `foto` → avatar de iniciais em serifa; com `foto` → `<img>`.

- [ ] **Step 1: Criar src/components/Equipe.astro**

```astro
---
import equipe from '../data/equipe.json';
import type { Membro } from '../data/tipos.ts';

const lista = equipe as Membro[];
const iniciais = (nome: string) =>
  nome.split(' ').map((p) => p[0]).slice(0, 2).join('');
---
<section id="equipe" class="secao">
  <div class="container">
    <span class="tag">Equipe</span>
    <h2 class="titulo-secao">Três trajetórias, um propósito</h2>
    <div class="equipe__grade">
      {lista.map((m) => (
        <article class="membro">
          {m.foto ? (
            <img class="membro__foto" src={m.foto} alt={`Retrato de ${m.nome}`} />
          ) : (
            <div class="membro__avatar" aria-hidden="true">{iniciais(m.nome)}</div>
          )}
          <h3>{m.nome}</h3>
          <p class="membro__papel">{m.papel}</p>
          <p class="membro__bio">{m.bio}</p>
          {m.links.length > 0 && (
            <p class="membro__links">
              {m.links.map((l) => (
                <a href={l.url} rel="noopener">{l.rotulo}</a>
              ))}
            </p>
          )}
        </article>
      ))}
    </div>
  </div>
</section>

<style>
  .equipe__grade {
    display: grid;
    gap: 2.5rem 2rem;
    margin-top: 2.5rem;
  }
  @media (min-width: 820px) { .equipe__grade { grid-template-columns: repeat(3, 1fr); } }
  .membro__avatar,
  .membro__foto {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    margin-bottom: 1.2rem;
  }
  .membro__foto { object-fit: cover; }
  .membro__avatar {
    background: var(--cor-fundo-alt);
    border: 1px solid var(--cor-apoio);
    color: var(--cor-acao);
    font-family: var(--fonte-titulo);
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .membro h3 { font-size: 1.5rem; margin-bottom: 0.1em; }
  .membro__papel {
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--cor-acao);
    margin-bottom: 0.8rem;
  }
  .membro__bio { font-size: 0.95rem; color: var(--cor-texto-2); }
  .membro__links a { margin-right: 1rem; font-size: 0.9rem; }
</style>
```

- [ ] **Step 2: Substituir stub em index.astro**

Adicionar import `Equipe`; trocar `<section id="equipe" ...>` por `<Equipe />`.

- [ ] **Step 3: Verificar build e as 3 integrantes**

Run: `npm run build && for n in "Dafne Panatieri" "Laura Madalosso" "Alice Castiel"; do grep -q "$n" dist/index.html && echo "OK $n" || echo "FALTA $n"; done`
Expected: três linhas `OK ...`.

- [ ] **Step 4: Commit**

```bash
git add src/components/Equipe.astro src/pages/index.astro
git commit -m "feat: seção Equipe com avatares elegantes sem foto

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 9: Seção Seja Parceiro (clímax de contato)

**Files:**
- Create: `src/components/Parceria.astro`
- Modify: `src/pages/index.astro` (substituir stub `#contato`)

**Interfaces:**
- Consumes: `site.email`, `site.formEndpoint`.
- Produces: `Parceria.astro` (sem props). Com `formEndpoint` vazio → e-mail em destaque (mailto); com endpoint → formulário POST (nome, organização, e-mail, mensagem).

- [ ] **Step 1: Criar src/components/Parceria.astro**

```astro
---
import { site } from '../data/site.ts';
const assunto = encodeURIComponent('Parceria — Rotas da Moda Sustentável RS');
---
<section id="contato" class="secao parceria">
  <div class="container parceria__grade">
    <div>
      <span class="tag">Seja parceiro</span>
      <h2 class="titulo-secao">Vamos tecer essa rota <em>juntos?</em></h2>
      <p class="parceria__texto">
        O Rotas da Moda Sustentável RS está construindo a primeira base pública sobre a moda sustentável
        gaúcha — e busca parceiros institucionais, apoiadores e veículos de imprensa para ampliar o
        alcance e o impacto desta pesquisa.
      </p>
      <p class="parceria__texto">
        Se você representa o poder público, uma organização, uma marca ou a imprensa, escreva para nós.
      </p>
    </div>
    <div class="parceria__acao">
      {site.formEndpoint ? (
        <form action={site.formEndpoint} method="POST" class="formulario">
          <label>Nome<input type="text" name="nome" required /></label>
          <label>Organização<input type="text" name="organizacao" /></label>
          <label>E-mail<input type="email" name="email" required /></label>
          <label>Mensagem<textarea name="mensagem" rows="4" required></textarea></label>
          <button class="botao parceria__botao" type="submit">Enviar mensagem</button>
        </form>
      ) : (
        <div class="parceria__mailto">
          <p class="parceria__rotulo">Fale com a equipe</p>
          <a class="parceria__email" href={`mailto:${site.email}?subject=${assunto}`}>{site.email}</a>
          <a class="botao parceria__botao" href={`mailto:${site.email}?subject=${assunto}`}>Escrever agora</a>
          <p class="parceria__news">
            Prefere só acompanhar? Peça neste mesmo e-mail para entrar na lista de novidades.
          </p>
        </div>
      )}
    </div>
  </div>
</section>

<style>
  .parceria { background: var(--cor-acao); color: var(--cor-fundo); }
  .parceria .tag { color: var(--cor-acento); }
  .parceria__texto { color: color-mix(in srgb, var(--cor-fundo) 88%, var(--cor-acao)); max-width: 30rem; }
  .parceria__grade { display: grid; gap: 2.5rem; align-items: center; }
  @media (min-width: 820px) { .parceria__grade { grid-template-columns: 1.2fr 1fr; gap: 4rem; } }

  .parceria__mailto {
    background: color-mix(in srgb, var(--cor-texto) 25%, var(--cor-acao));
    border-radius: 14px;
    padding: 2.2rem;
    text-align: center;
  }
  .parceria__rotulo {
    font-size: 0.78rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    opacity: 0.8;
    margin-bottom: 0.4rem;
  }
  .parceria__email {
    display: block;
    font-family: var(--fonte-titulo);
    font-size: clamp(1.3rem, 3vw, 1.7rem);
    color: var(--cor-fundo);
    text-decoration: none;
    margin-bottom: 1.5rem;
    word-break: break-all;
  }
  .parceria__botao {
    background: var(--cor-fundo);
    color: var(--cor-acao);
    border-color: var(--cor-fundo);
    font-weight: 600;
  }
  .parceria__news {
    font-size: 0.82rem;
    opacity: 0.75;
    margin: 1rem 0 0;
  }

  .formulario { display: grid; gap: 1rem; }
  .formulario label {
    display: grid;
    gap: 0.3rem;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
  }
  .formulario input,
  .formulario textarea {
    background: var(--cor-fundo);
    border: none;
    border-radius: 8px;
    padding: 0.7rem 0.9rem;
    font-family: var(--fonte-texto);
    font-size: 1rem;
    color: var(--cor-texto);
  }
</style>
```

- [ ] **Step 2: Substituir stub em index.astro**

Adicionar import `Parceria`; trocar `<section id="contato" ...>` por `<Parceria />`. Neste ponto não restam stubs — conferir que `index.astro` ficou:

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import Hero from '../components/Hero.astro';
import Projeto from '../components/Projeto.astro';
import Regioes from '../components/Regioes.astro';
import Metodologia from '../components/Metodologia.astro';
import Podcast from '../components/Podcast.astro';
import Equipe from '../components/Equipe.astro';
import Parceria from '../components/Parceria.astro';
---
<Layout>
  <Header />
  <main id="conteudo">
    <Hero />
    <Projeto />
    <Regioes />
    <Metodologia />
    <Podcast />
    <Equipe />
    <Parceria />
  </main>
  <Footer />
</Layout>
```

- [ ] **Step 3: Verificar build e ausência de stubs**

Run: `npm run build && grep -q 'Vamos tecer essa rota' dist/index.html && ! grep -q 'Task ' dist/index.html && echo 'parceria OK, sem stubs'`
Expected: `parceria OK, sem stubs`

- [ ] **Step 4: Commit**

```bash
git add src/components/Parceria.astro src/pages/index.astro
git commit -m "feat: seção Seja Parceiro com contato institucional em destaque

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 10: SEO, favicon, deploy prep e verificação final

**Files:**
- Create: `public/favicon.svg`, `netlify.toml`, `README.md`
- Modify: `src/layouts/Layout.astro` (meta tags)

**Interfaces:**
- Consumes: `site` (`nome`, `descricao`, `url`).
- Produces: página com meta description, Open Graph e favicon; repositório pronto para deploy Netlify.

- [ ] **Step 1: Criar public/favicon.svg**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#EDE3D4"/>
  <path d="M12 20 L26 14 L40 13 L50 18 L55 27 L56 36 L50 44 L42 51 L33 56 L24 53 L16 46 L12 35 Z"
        fill="#E2D5C0" stroke="#9C4A2F" stroke-width="2.4" stroke-linejoin="round"/>
  <circle cx="40" cy="24" r="4.4" fill="#9C4A2F"/>
  <circle cx="22" cy="38" r="4.4" fill="#C9A227"/>
  <circle cx="41" cy="35" r="4.4" fill="#7A6A53"/>
  <circle cx="45" cy="43" r="4.4" fill="#3E2F23"/>
</svg>
```

- [ ] **Step 2: Atualizar head do Layout.astro**

Substituir o `<head>` de `src/layouts/Layout.astro` por:

```astro
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{titulo}</title>
    <meta name="description" content={site.descricao} />
    <meta name="theme-color" content="#EDE3D4" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="canonical" href={site.url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={titulo} />
    <meta property="og:description" content={site.descricao} />
    <meta property="og:url" content={site.url} />
    <meta property="og:locale" content="pt_BR" />
  </head>
```

E adicionar no frontmatter do Layout: `import { site } from '../data/site.ts';`

- [ ] **Step 3: Criar netlify.toml**

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

- [ ] **Step 4: Criar README.md**

```markdown
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
```

- [ ] **Step 5: Verificação final completa**

Run: `npm run build && grep -q 'og:title' dist/index.html && grep -q 'favicon.svg' dist/index.html && echo 'meta OK'`
Expected: `meta OK`

- [ ] **Step 6: Checagem manual de qualidade (Lighthouse)**

Run: `npm run preview` e, no Chrome, rodar Lighthouse (modo mobile) em `http://localhost:4321`.
Expected: Performance ≥ 90 e Accessibility ≥ 90 (critério do spec). Se abaixo, corrigir o apontado antes de commitar.

- [ ] **Step 7: Commit**

```bash
git add public/favicon.svg netlify.toml README.md src/layouts/Layout.astro
git commit -m "feat: SEO, favicon, README e preparação de deploy

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```
