---
target: homepage (src/pages/index.astro)
total_score: 16
max_score: 32
na_heuristics: 7,10
p0_count: 3
p1_count: 2
timestamp: 2026-07-26T20-00-30Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score

| # | Heurística | Nota | Problema-chave |
|---|-----------|------|----------------|
| 1 | Visibility of System Status | 2 | Página de ~6.000px sem estado ativo no menu, sem scrollspy, sem feedback após o mailto |
| 2 | Match System / Real World | 2 | Linguagem ótima, mas o mapa do hero erra a geografia do RS |
| 3 | User Control and Freedom | 3 | Âncoras e skip link ok; falta voltar-ao-topo em 10 viewports de mobile |
| 4 | Consistency and Standards | 2 | Metodologia fora do menu; hover-lift em cards não clicáveis; cor do olho muda sem regra |
| 5 | Error Prevention | 1 | Domínio do e-mail não existe (NXDOMAIN): a única via de conversão falha em silêncio |
| 6 | Recognition Rather Than Recall | 3 | Olhos de seção bons; cores de território sem legenda |
| 7 | Flexibility and Efficiency | n/a | Superfície de persuasão de página única |
| 8 | Aesthetic and Minimalist Design | 2 | 4 imagens decorativas, 3 sem função; a prova real (currículos) em retratos de 116px |
| 9 | Error Recovery | 1 | Nenhum estado de erro; CTA do podcast é mailto sem endereço visível |
| 10 | Help and Documentation | n/a | Página institucional de marketing |
| **Total** | | **16/32** | **Faixa baixa (~50%)** |

## Design Specificity Verdict

Categoria: intercambiável, com camada tipográfica autoral por baixo. O sistema de tipo (Cormorant + Karla, olho tracejado, medidas travadas) foi autorado para o projeto. Mas a página é lida pelas imagens, e as quatro são genéricas e contradizem o produto.

Detector determinístico: CLI limpo nos .astro; detector in-page apontou 3 regras — cream-palette (fundo #EDE3D4), repeated-section-kickers (6 ocorrências), call-caps-body (5). Responsivo sem overflow real em 390px e 1440px.

## Priority Issues

P0 — Domínio do e-mail não existe (NXDOMAIN, sem MX). Cinco pontos de contato apontam para ele. Verificado por dig.
P0 — 12MB de arquivos órfãos publicados, incluindo originais do gerador com nome de prompt (Rotas_da_moda_sustentavel_RS_202607221816.jpeg, Clothes_pile_wedding_party_fashion_*.jpeg, Embroidery_hoop_with_leaves_flow_*.jpeg) e .DS_Store.
P0 — Hero perde estatura: flat lay saturado de IA, mapa com geografia errada (Serra e POA fora do contorno, Vale dos Sinos deslocado), sem H1 visível.
P1 — Manequim com uma bota só e perna nua; pilha de roupas ilustrando vocações lê como caixa de doação.
P1 — Anel de foco invisível nos dois CTAs principais (terracota sobre terracota, ~1,1:1) — WCAG 1.4.11.
P2 — Faixa institucional ilegível no mobile (35px) com slot PRODUÇÃO vazio.
P2 — Nada na página escrito para a decisão de um patrocinador.

## Ativo desperdiçado

src/components/MapaRS.astro + src/data/mapa-rs.json: vetor traçado real do RS com marcadores e rota costurada, no repositório, não usado.
