# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Marcas, patrocinadores e apoiadores institucionais** são a audiência que o site precisa conquistar primeiro: chegam pelo meio da moda ou por indicação, avaliam em segundos se o projeto tem estatura para receber investimento, e a ação desejada é entrar em contato para apoiar/patrocinar.

Demais audiências confirmadas:
- **Poder público e avaliadores de edital** — verificam rigor, metodologia e prestação de contas.
- **Imprensa e formadores de opinião de moda** — procuram pauta, credibilidade e material compartilhável.
- **Agentes territoriais pesquisados** (designers, artesãos, cooperativas, coletivos, carnavalescos, pequenas indústrias) — precisam se reconhecer no projeto e sentir protagonismo.
- **Público interessado** (consumidores conscientes, estudantes) — chegam por curiosidade sobre moda sustentável.

Chegada majoritária por celular (Instagram/WhatsApp) para imprensa e agentes; avaliadores e marcas tendem ao desktop.

## Product Purpose

Pesquisa cultural aplicada que mapeia e sistematiza as vocações territoriais da moda sustentável no Rio Grande do Sul, ouvindo os agentes que a praticam. Entregas públicas: um podcast autoral (um episódio por região), este site e um evento de lançamento em Porto Alegre. O resultado previsto é um diagnóstico cultural inédito e uma base pública de dados que sirva ao planejamento de políticas culturais e das indústrias criativas do estado.

Sucesso do site: um visitante do meio da moda ou uma marca reconhecer, em segundos, que o projeto tem envergadura profissional — e escrever para apoiar.

## Positioning

A moda raramente é tratada como **campo cultural estruturado** nas políticas públicas, apesar da relação profunda com identidade, território, memória, festas e saberes tradicionais. O projeto ocupa exatamente essa lacuna: não é curadoria de marcas nem varejo, é **pesquisa territorializada** que trata a moda como origem de cultura. Nenhum concorrente pode copiar a combinação de escuta em campo nos quatro territórios gaúchos com devolução pública (podcast + base de dados).

Quatro territórios e suas vocações confirmadas:
- **Serra Gaúcha** — vestuário, moda festa e noivas.
- **Vale dos Sinos** — indústria calçadista, couro e inovação social.
- **Região da Campanha** — lã, ovinocultura e tinturaria natural (bioma pampa).
- **Região Metropolitana de Porto Alegre** — upcycling, economia circular e carnaval.

## Operating Context

Projeto contemplado em **edital público de fomento à cultura (PNAB / Lei Aldir Blanc)**, o que impõe créditos institucionais obrigatórios por lei e uma expectativa de prestação de contas. Concebido e executado por três profissionais: Dafne Panatieri (pesquisa e estratégia em economia criativa), Laura Madalosso (consultoria em moda e sustentabilidade) e Alice Castiel (produção cultural e artística).

Metodologia em cinco movimentos: exploração documental, mapeamento de agentes, escuta em campo (entrevistas em profundidade e registro fotográfico), análise, devolução pública.

O site nasceu antes da pesquisa de campo e cresce junto com ela ao longo de meses.

## Capabilities and Constraints

- Site estático em **Astro**, hospedado no **Netlify** com deploy automático a partir do GitHub; sem backend e sem CMS.
- **Sem edição autônoma pela equipe**: conteúdo vive em arquivos (`src/data/`) editados por Bernardo com auxílio do agente.
- Escopo confirmado: **vitrine institucional de página única** (O Projeto, Regiões, Metodologia, Podcast, Equipe, Contato). Páginas por território e a base pública de mapeamento permanecem fora de escopo por ora.
- **`/voo`**: experiência imersiva separada (filme cinematográfico controlado por scroll) que já existe, é acessada por convite no site e não faz parte do redesign.
- Formulário de contato ainda não existe: o contato acontece por e-mail (mailto).
- Idioma único: português do Brasil.

**Decisões de produto ainda em aberto:** e-mail institucional definitivo (hoje provisório), domínio próprio (hoje subdomínio Netlify), nome oficial do edital para o crédito, e quem assina a Produção na faixa institucional.

## Brand Commitments

- Nome fixo: **Rotas da Moda Sustentável RS**.
- **Faixa institucional obrigatória por lei**: logos de financiamento e realização (PNAB/Aldir Blanc, Pró-Cultura RS, Secretaria da Cultura, Governo do Estado do RS, Ministério da Cultura, Governo Federal) precisam permanecer visíveis, sobre fundo branco de ponta a ponta. O espaço de "Produção" segue vago até a equipe definir a assinatura.
- Voz: clara e acessível, sem jargão acadêmico, com rigor suficiente para o público institucional. Sem travessões no texto (decisão editorial do cliente).
- Anti-referência declarada pelo cliente: o site **não pode parecer feito por IA** nem "fofo/infantil". Precisa ler como projeto de moda profissional.

## Evidence on Hand

- Textos de projeto, metodologia e as quatro vocações territoriais: confirmados e publicados.
- Biografias reais das três realizadoras e seus retratos.
- Experiência `/voo` publicada e aprovada pelo cliente.

**Ausências que não podem ser fabricadas:** não existem fotografias reais dos territórios, entrevistas transcritas, episódios de podcast, depoimentos, dados de campo, marcas parceiras confirmadas nem números de resultado. A pesquisa de campo levará **meses** para gerar esse material. Qualquer imagem usada até lá é ilustrativa e precisa ser substituível sem retrabalho.

## Product Principles

1. **Credibilidade antes de encanto.** O primeiro trabalho de cada tela é provar que existe pesquisa séria por trás; a beleza serve a esse fim, não o contrário.
2. **Nada de conteúdo inventado.** Enquanto o campo não devolver material, o site declara o que ainda virá em vez de simular resultados.
3. **O território é o protagonista.** Cada afirmação visual ou textual deve poder ser rastreada a um dos quatro territórios e à sua vocação real.
4. **Feito para crescer.** Fotografia real, episódios e dados entram substituindo provisórios, sem redesenho.
5. **Acessível por princípio, não por obrigação.** O projeto fala de inclusão cultural; o site precisa ser coerente com isso.

## Accessibility & Inclusion

Padrão alvo **WCAG 2.1 AA** (verificado com axe, sem violações) e **VLibras** integrado para tradução em Libras. Idioma declarado pt-BR. Contraste, navegação por teclado, foco visível e textos alternativos são requisitos, não opcionais. Exceção deliberada do cliente: a experiência `/voo` ignora `prefers-reduced-motion` (o site institucional, não).
