# Design — Site Rotas da Moda Sustentável RS

**Data:** 2026-07-22
**Status:** Aprovado por Bernardo (brainstorming concluído)
**Fase:** Entrega 1 — site-vitrine do edital

## 1. Contexto

O projeto **Rotas da Moda Sustentável RS** (Dafne Panatieri, Laura Madalosso e Alice Castiel) ganhou um edital para realizar uma pesquisa cultural aplicada que mapeia as vocações territoriais da moda sustentável em 4 regiões do Rio Grande do Sul: Serra Gaúcha, Região da Campanha, Vale dos Sinos e Região Metropolitana de Porto Alegre. As entregas públicas do projeto incluem um podcast, uma landing page e um evento de lançamento em Porto Alegre.

Este documento define o design do **site-vitrine** — a landing page pública prevista no edital.

**Realidade de partida:** o projeto ainda não tem identidade visual, fotos autorais nem episódios de podcast. O site funda a identidade e nasce elegante mesmo com pouco conteúdo, crescendo junto com a pesquisa.

## 2. Objetivo e ação-chave

- **Papel:** vitrine institucional que apresenta o projeto, dá credibilidade e comunica a visão.
- **Ação-chave do visitante:** contato institucional / parcerias (poder público, patrocinadores, imprensa). Ação secundária: deixar e-mail (newsletter/aviso de episódios).
- **Públicos (todos, com hierarquia prática):** topo do site mira credibilidade + estética (poder público e imprensa); seções seguintes acolhem agentes territoriais e público geral.

## 3. Identidade visual — "Barro & Linho"

Território estético: **terroso e artesanal, mas sofisticado** — material honesto com requinte editorial. Nada de rústico bagunçado; artesanal curado.

### Paleta

| Papel | Cor | Hex |
|---|---|---|
| Fundo | Linho envelhecido | `#EDE3D4` |
| Fundo alternativo | Linho escurecido | `#E2D5C0` |
| Texto | Marrom-terra profundo | `#3E2F23` |
| Texto secundário | Marrom médio | `#6B5844` |
| Ação / destaque | Terracota de barro | `#9C4A2F` |
| Acento | Mostarda natural (tinturaria) | `#C9A227` |
| Apoio | Taupe | `#7A6A53` |

Cada região recebe uma cor da paleta como assinatura: Serra Gaúcha = terracota `#9C4A2F`, Campanha = mostarda `#C9A227`, Vale dos Sinos = taupe `#7A6A53`, Metropolitana = marrom-terra `#3E2F23`.

### Tipografia

- **Títulos:** Cormorant Garamond (serifa clássica, pesos 400–600, itálico permitido para ênfase poética)
- **Textos e UI:** Karla (sans humanista, pesos 300–600)
- Ambas gratuitas (Google Fonts), servidas localmente (self-hosted) para performance e privacidade.

### Marca

- Nesta fase: **wordmark tipográfico** do nome em Cormorant Garamond, bem tratado. Sem símbolo desenhado. Um logo futuro se encaixa sem retrabalho.
- Texturas sutis de papel/linho no fundo são permitidas, com moderação.

## 4. Arquitetura — página única

Site de **uma página** com navegação por âncoras. Menu: *O Projeto · Regiões · Podcast · Equipe · Contato*.

### Ordem das seções

1. **Hero** — tag ("Pesquisa cultural · Rio Grande do Sul"), título, subtítulo, **mapa ilustrado do RS** (SVG estilizado com as 4 regiões marcadas nas suas cores, com rótulos), botões *"Seja parceiro"* (primário) e *"Conheça o projeto"* (secundário, rola para a seção O Projeto).
2. **O Projeto** — a lacuna histórica (moda raramente tratada como campo cultural), a proposta do diagnóstico, menção ao edital com espaço para selo/crédito institucional.
3. **As 4 Regiões** — mapa maior + um bloco rico por região: nome, vocação, texto-síntese, cor de assinatura, área de imagem (nasce com ilustração/textura; recebe fotografia real da pesquisa depois).
4. **Metodologia** — a jornada da pesquisa em 5 passos visuais: exploração → mapeamento → escuta em campo → análise → devolução pública.
5. **Podcast** — *empty state* elegante: "Episódios em breve", 4 episódios regionais anunciados, campo de e-mail "quero ser avisado". Evolui para player embutido (Spotify) quando os episódios existirem.
6. **Equipe** — Dafne, Laura e Alice: retrato + minibio (a partir dos textos do PDF do projeto, lapidados). Links de portfólio/LinkedIn.
7. **Seja Parceiro** — seção-clímax: chamada institucional, e-mail de contato em destaque, formulário simples (nome, organização, mensagem), newsletter discreta.
8. **Rodapé** — logos do edital/apoios (a confirmar com Dafne), redes sociais, créditos, aviso de direitos.

### Estados de conteúdo ("site vivo")

Toda seção dependente da pesquisa tem um estado elegante de espera — nunca aparência de inacabado. Conteúdo chega por etapas: fotos das regiões, episódios, resultados.

## 5. Conteúdo

- **Idioma:** somente português (BR) nesta fase.
- **Fonte dos textos:** PDF do projeto (conceito, metodologia, biografias), reescritos em linguagem clara e acessível para web — mantendo o rigor para o público institucional.
- **Imagens provisórias:** ilustrações/texturas na identidade Barro & Linho até existirem fotografias autorais da pesquisa.

## 6. Técnico

- **Framework:** Astro (site estático). Conteúdo de regiões, equipe e episódios em arquivos de conteúdo (Markdown/JSON) para edição simples.
- **Hospedagem:** Netlify ou Cloudflare Pages (gratuitos), deploy automático via GitHub.
- **Domínio:** próprio, a registrar (ex.: `rotasdamodars.com.br`, ~R$40/ano; verificar disponibilidade).
- **Formulários:** serviço gratuito sem backend (Formspree ou Netlify Forms; decisão na implementação conforme hospedagem escolhida).
- **Responsivo mobile-first:** imprensa e agentes chegam por Instagram/WhatsApp; avaliadores de edital pelo desktop.
- **Performance/acessibilidade:** site leve, sem frameworks pesados no cliente; contraste AA; alt text em todas as imagens; HTML semântico.
- **Manutenção:** Bernardo + Claude, editando arquivos de conteúdo no repositório.

## 7. Fora do escopo (fase 2 — anotado, não construir agora)

- Mapa interativo com dados reais dos agentes mapeados
- Páginas individuais por região
- CMS para edição autônoma pela equipe
- Versão em inglês
- Base pública de dados navegável

A arquitetura Astro deve permitir essas evoluções sem retrabalho (ex.: seções de regiões viram páginas; dados do mapa viram coleção de conteúdo).

## 8. Critérios de sucesso

1. O site comunica credibilidade e estética "Barro & Linho" mesmo sem fotos/episódios (validável visualmente com a equipe).
2. Ação de parceria acessível em no máximo 1 clique de qualquer ponto da página.
3. Site publicado com domínio próprio, HTTPS, carregando em menos de 2s em 4G.
4. Bernardo consegue, com auxílio do Claude, adicionar um episódio de podcast ou trocar uma foto de região editando um único arquivo de conteúdo.
5. Lighthouse: Performance e Acessibilidade ≥ 90 no mobile.

## 9. Pendências externas (não bloqueiam o design)

- Confirmar com Dafne: exigências do edital sobre logos/selos/créditos institucionais no site.
- Definir e-mail institucional de contato do projeto.
- Registrar domínio (decidir grafia final do nome/URL com a equipe).
