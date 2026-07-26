# Design

<!-- impeccable:design-schema 1 -->

> Brocado jacquard sobre seda meia-noite: o mapeamento como instrução tecida.

## Contrato de direção

**THESIS** — O tear jacquard é o avô do computador: cartões perfurados viram trama. Este projeto transforma territórios têxteis em dados mapeados, então o site é lido como um brocado em execução, não como um catálogo. Recusa a arrumação que a categoria sempre entrega: fundo creme, serifa editorial e acento terracota.

**OWN-WORLD** — Seda índigo profunda como chão de página; trama dourada como único acento estrutural; faixas de cartão perfurado em linho cru marcando instrução; tinta quase-preta como sombra de urdume. Réguas monoespaçadas, capitulares tecidas, cantos retos, zero sombra.

**STORY** — Uma marca entende em segundos que existe pesquisa de campo real em quatro territórios, reconhece rigor de instituição e escreve para apoiar.

**FIRST VIEWPORT** — Chão índigo de borda a borda. Faixa de cartão perfurado sob o cabeçalho, com os quatro territórios como colunas numeradas. À esquerda, "MODA COMO ORIGEM" em capitulares Italiana douradas, em escala de cartaz. Abaixo: uma linha de apoio e a ação primária em contorno dourado. À direita, o mapa vetorial do RS desenhado como trama.

**FORM** — Jacquard punched brocade (desafiante dealado, vencedor por identificação de público e clareza de produto contra a renderização papel-quente). Seed: `4b51d351`.

## Tokens — Cores

| Nome | Valor | Token | Papel |
|------|-------|-------|-------|
| Índigo | `#141F35` | `--indigo` | Chão de página. Seda meia-noite, nunca azul-marinho puro |
| Índigo profundo | `#0E1626` | `--indigo-fundo` | Faixas e superfícies recuadas, um passo mais escuro que o chão |
| Urdume | `#1F2B44` | `--urdume` | Bordas, réguas e divisórias sobre o índigo |
| Ouro | `#C9A227` | `--ouro` | Acento único e estrutural: títulos, ação primária, motivo da trama |
| Ouro claro | `#E0C05A` | `--ouro-claro` | Estado de foco e hover; nunca em bloco de texto |
| Linho cru | `#E8E0CE` | `--linho` | Faixas de cartão perfurado e texto sobre índigo |
| Linho recuado | `#B9AF9A` | `--linho-2` | Texto secundário, metadados, rótulos |
| Tinta | `#12100C` | `--tinta` | Texto sobre as faixas de linho; sombra de urdume |

**Fios de território** — usados só como marcas pequenas, nunca como área: Serra Gaúcha `#C2603A`, Vale dos Sinos `#8B9A5B`, Campanha `#C9A227`, Porto Alegre `#7796B8`.

Estratégia de cor: **Committed** — o índigo carrega 60-70% da superfície; o ouro é o único acento e aparece em menos de 5%.

## Tokens — Tipografia

| Papel | Face | Uso |
|-------|------|-----|
| Display | **Italiana** 400 | Capitulares tecidas. Só em caixa alta, `letter-spacing` 0.06em a 0.12em. Nunca abaixo de 24px |
| Corpo | **Archivo** 300/400/500 | Todo texto corrido e interface |
| Razão | **JetBrains Mono** 400/500 | Réguas de cartão perfurado, numeração de território, rótulos técnicos, créditos |

Escala de display: `clamp(2.6rem, 7vw, 6.5rem)`. Hierarquia por **tamanho e espaçamento**, não por peso.

Faces proibidas (monocultura de IA): Fraunces, Cormorant, Playfair, Lora, Crimson, Newsreader, Syne, Space Grotesk/Mono, IBM Plex, Inter, DM Sans/Serif, Outfit, Plus Jakarta, Instrument Sans/Serif, Geist, Recoleta, Montserrat, Lato, Roboto, Open Sans.

## Tokens — Espaço e forma

Unidade base 4px. Largura máxima de página 1440px; medida de leitura 62ch.
**Raio de borda: 0 em tudo.** Sem exceção para botão, imagem, faixa ou selo.
**Sem sombra.** Elevação vem de mudança de superfície e de régua de 1px.
Régua de seção: 1px `--urdume`. Intervalo entre seções: 5rem no mobile, 8rem no desktop.

## Componentes

**Faixa de cartão perfurado** — tira full-bleed em `--linho` com pontos de perfuração e numeração monoespaçada. Marca transição de seção e carrega índice. Não é decoração: cada faixa contém informação real (territórios, capítulos, créditos).

**Título tecido** — Italiana em caixa alta, `--ouro`, com espaçamento aberto. Um por seção, alinhado à esquerda, sem elemento decorativo.

**Ação de contorno** — 1px `--ouro`, fundo transparente, texto `--ouro`, cantos retos, `padding` 0.9rem 2rem. É a única variante de botão. Sobre linho, inverte para 1px `--tinta`.

**Cartão de território** — retângulo chapado sobre `--indigo-fundo`, régua de 1px `--urdume`, número monoespaçado no topo, nome em Italiana, vocação em `--linho-2`. O fio da região aparece como um traço de 2px no topo. Sem hover-lift (não é clicável).

**Régua de índice** — linha monoespaçada com número e rótulo, separada por pontilhado, ao estilo de sumário de publicação.

## Faça

- Trate o índigo como chão real da página, não como seção escura ocasional.
- Reserve o ouro para título, ação e motivo de trama. Onde há dúvida, use linho.
- Deixe as faixas de linho carregarem informação verdadeira, nunca enfeite.
- Construa hierarquia por escala e espaçamento; a Italiana tem um peso só.
- Ancore números e réguas em monoespaçada: é a voz do cartão perfurado.
- Mantenha todo canto reto e toda elevação sem sombra.

## Não faça

- Não use fundo creme, papel ou parchment como chão de página: é a renderização padrão que este mundo recusa.
- Não introduza terracota como acento de superfície. Ele existe apenas como fio da Serra Gaúcha, em marca pequena.
- Não arredonde nada, em lugar nenhum.
- Não use sombra, brilho ou gradiente decorativo.
- Não use a Italiana em corpo de texto nem abaixo de 24px.
- Não publique imagem gerada com nome de arquivo do gerador; nomes semânticos sempre.
- Não escureça a faixa institucional obrigatória: ela permanece sobre branco, de ponta a ponta, por exigência legal.

## Acessibilidade do sistema

Contraste alvo AA. Medidos: `--linho` sobre `--indigo` = 12,5:1 · `--ouro` = 6,8:1 · `--linho-2` = 7,6:1 · `--tinta` sobre `--linho` = 14,5:1 · `--ouro-claro` (foco) = 9,3:1. Todos aprovados para texto AA.
**Anel de foco:** token próprio `--foco` = `--ouro-claro` sobre índigo e `--tinta` sobre linho, sempre ≥ 3:1 contra o fundo real da seção. Nunca reutilizar a cor de acento como anel sobre superfície da mesma cor.
