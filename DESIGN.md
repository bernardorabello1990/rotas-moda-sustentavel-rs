# Design

<!-- impeccable:design-schema 1 -->

> Oliva-pampa e osso: o mapeamento como instrução tecida.

## Contrato de direção

**THESIS** — O tear jacquard é o avô do computador: cartões perfurados viram trama. Este projeto transforma territórios têxteis em dados mapeados, então o site é lido como um brocado em execução, não como um catálogo. O chão é o verde profundo do campo, que é de onde vêm a lã, a tinturaria natural e o pampa. Recusa a arrumação que a categoria sempre entrega: fundo creme, serifa editorial e acento terracota.

**OWN-WORLD** — Oliva profundo do campo como chão de página; latão como único acento estrutural; faixas de cartão perfurado em osso marcando instrução; tinta quase-preta como sombra de urdume. Réguas monoespaçadas, capitulares tecidas, cantos retos, zero sombra.

**STORY** — Uma marca entende em segundos que existe pesquisa de campo real em quatro territórios, reconhece rigor de instituição e escreve para apoiar.

**FIRST VIEWPORT** — Uma tela inteira, sem nenhuma nesga da seção seguinte. Fotografia de tecelagem sangrando de borda a borda, com véu direcional que abre para a trama à direita e fecha onde o texto pousa. À esquerda, "MODA COMO ORIGEM" em capitulares Italiana em latão, em escala de cartaz, sobre coluna estreita. Abaixo, a linha de apoio, duas ações em contorno e o convite ao `/voo` como fio. A faixa institucional branca encosta no pé da tela e fecha o hero.

**FORM** — Jacquard punched brocade, agora em oliva-pampa. A troca de paleta veio da realizadora do projeto, que rejeitou o azul-marinho; a estrutura, a tipografia e a lógica de instrução permanecem. Seed: `4b51d351`.

## Tokens — Cores

| Nome | Valor | Token | Papel |
|------|-------|-------|-------|
| Oliva | `#2B3123` | `--oliva` | Chão de página. Verde profundo de campo, nunca verde-garrafa nem verde-menta |
| Oliva profundo | `#1E2319` | `--oliva-fundo` | Faixas e superfícies recuadas, um passo mais escuro que o chão |
| Urdume | `#3A4230` | `--urdume` | Bordas, réguas e divisórias sobre o oliva |
| Latão | `#C2A657` | `--latao` | Acento único e estrutural: títulos, ação primária, motivo da trama |
| Latão claro | `#DCC177` | `--latao-claro` | Estado de foco e hover; nunca em bloco de texto |
| Osso | `#EDE7D6` | `--osso` | Faixas de cartão perfurado e texto sobre oliva |
| Osso recuado | `#BDB49E` | `--osso-2` | Texto secundário, metadados, rótulos |
| Tinta | `#14120D` | `--tinta` | Texto sobre as faixas de osso; sombra de urdume |

**Fios de território** — usados só como marcas pequenas, nunca como área: Serra Gaúcha `#C9707A`, Vale dos Sinos `#C08A52`, Campanha `#C2A657`, Porto Alegre `#B87BB0`. Nenhum deles pode ser verde: o fio precisa se separar do chão.

Estratégia de cor: **Committed** — o oliva carrega 60-70% da superfície; o latão é o único acento e aparece em menos de 5%.

## Tokens — Tipografia

| Papel | Face | Uso |
|-------|------|-----|
| Display | **Italiana** 400 | Capitulares tecidas. Só em caixa alta, `letter-spacing` 0.06em a 0.12em. Nunca abaixo de 24px |
| Corpo | **Archivo** 300/400/500/600 e itálico 400 | Todo texto corrido e interface |
| Razão | **JetBrains Mono** 400/500 | Réguas de cartão perfurado, numeração de território, rótulos técnicos, créditos |

Escala de display: `clamp(2.6rem, 7vw, 6.5rem)`. Hierarquia por **tamanho e espaçamento**, não por peso.

Faces proibidas (monocultura de IA): Fraunces, Cormorant, Playfair, Lora, Crimson, Newsreader, Syne, Space Grotesk/Mono, IBM Plex, Inter, DM Sans/Serif, Outfit, Plus Jakarta, Instrument Sans/Serif, Geist, Recoleta, Montserrat, Lato, Roboto, Open Sans.

## Tokens — Espaço e forma

Unidade base 4px. Largura máxima de página 1440px; medida de leitura 62ch.
**Raio de borda: 0 em tudo.** Sem exceção para botão, imagem, faixa ou selo.
**Sem sombra.** Elevação vem de mudança de superfície e de régua de 1px. Sombra em texto é permitida apenas sobre fotografia, e só para comprar leitura sem desenhar caixa.
Régua de seção: 1px `--urdume`. Intervalo entre seções: 5rem no mobile, 8rem no desktop.

## Componentes

**Faixa de cartão perfurado** — tira full-bleed em `--osso` com numeração monoespaçada e separadores pontilhados. Marca transição de seção e carrega índice. Não é decoração: cada faixa contém informação real.

**Título tecido** — Italiana em caixa alta, `--latao`, com espaçamento aberto. Um por seção, alinhado à esquerda, sem elemento decorativo.

**Ação de contorno** — 1px `--latao`, fundo transparente, texto `--latao`, cantos retos. É a única variante de botão. Sobre osso, inverte para 1px `--tinta`, porque latão sobre osso mede 1,91:1 e reprovaria.

**Livro-razão tecido** — a seção de territórios é registro tabular, não grade de cartões: número em mono, estudo de matéria-prima em 3:4, nome em Italiana, vocação em caixa alta e nota de campo. Linhas separadas por filete de `--urdume`, com o fio do território cruzando o filete em 2px.

**Estudo de matéria-prima** — fotografia macro de material, sem pessoas e sem lugares. Retângulo com filete de urdume. Nunca fotografia documental encenada: o projeto ainda não tem registro de campo, e imagem inventada fabricaria evidência.

**Régua de índice** — linha monoespaçada com número e rótulo, separada por pontilhado, ao estilo de sumário de publicação.

## Faça

- Trate o oliva como chão real da página, não como seção escura ocasional.
- Reserve o latão para título, ação e motivo de trama. Onde há dúvida, use osso.
- Deixe as faixas de osso carregarem informação verdadeira, nunca enfeite.
- Construa hierarquia por escala e espaçamento; a Italiana tem um peso só.
- Ancore números e réguas em monoespaçada: é a voz do cartão perfurado.
- Mantenha todo canto reto e toda elevação sem sombra.
- Meça o contraste contra o fundo real da seção, e sobre fotografia meça o pixel, não a intenção.

## Não faça

- Não use azul-marinho nem índigo em lugar nenhum: foi a cor recusada pela realizadora, inclusive nas fotografias.
- Não use fundo creme, papel ou parchment como chão de página: é a renderização padrão que este mundo recusa.
- Não use verde como fio de território: ele desaparece contra o chão.
- Não arredonde nada, em lugar nenhum.
- Não use sombra de caixa, brilho ou gradiente decorativo.
- Não use a Italiana em corpo de texto nem abaixo de 24px.
- Não publique imagem gerada com nome de arquivo do gerador; nomes semânticos sempre.
- Não escureça a faixa institucional obrigatória: ela permanece sobre branco, de ponta a ponta, por exigência legal.

## Acessibilidade do sistema

Contraste alvo AA. Medidos sobre o chão `--oliva`: `--osso` = 10,85:1 · `--osso-2` = 6,50:1 · `--latao` = 5,67:1 · `--latao-claro` = 7,62:1. Sobre `--oliva-fundo`: `--osso` = 12,98:1 · `--osso-2` = 7,78:1 · `--latao` = 6,78:1. Sobre a faixa de osso: `--tinta` = 15,15:1. Fios de território sobre o chão, como marca gráfica: 3,88:1 a 5,67:1, todos acima do mínimo de 3:1.

**Anel de foco:** token próprio `--foco` = `--latao-claro` sobre oliva e `--tinta` sobre osso, sempre ≥ 3:1 contra o fundo real da seção. Nunca reutilizar a cor de acento como anel sobre superfície da mesma cor.

**Sobre fotografia:** o hero não passa por medição de token, e sim por amostragem do pixel real do fundo com o texto oculto, no percentil extremo. Nenhuma zona de texto pode cair abaixo de 4,5:1, ou 3:1 quando o texto é grande.
