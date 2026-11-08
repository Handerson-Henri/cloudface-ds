# Etapa 14 — Estrutura e extras (onda 6)

Data: 2026-11-08

## Implementado

| Componente | Notas |
|---|---|
| Divider | `hr` |
| Avatar | iniciais ou `img`; `aria-label` com o nome |
| Table | `table` nativo + CSS semântico |
| Accordion | `details`/`summary` (teclado nativo) |
| Modal | `role="dialog"` `aria-modal` Esc + backdrop; título em `h2` |
| Drawer | mesmo padrão, painel `aside` |
| EmptyState | título + descrição + ação opcional |
| Steps | `ol` + `aria-current="step"` |
| Skeleton | já na onda 4 |

- ADR [002-tema.md](../decisoes/002-tema.md) reavaliado: continua **adiado** — sem tema claro e sem `forced-colors` nesta leva. Semânticos já existem para um segundo mapa.
- Pacotes **não** publicados no registry.
- Teste: Modal aberto expõe `dialog` nomeado.

## Decisões

- Accordion nativo (`details`) em vez de APG disclosure custom.
- Modal/Drawer sem focus trap completo nesta leva: Esc e backdrop fecham; o trap e o retorno de foco ficam pendentes.
- Tema claro: só ADR, sem valores light. Âncoras oficiais não mudam.

## Pendente (humano / marca / fora desta execução)

- Focus trap e restauração de foco em Modal/Drawer
- Tema claro e `forced-colors` (ADR 002)
- Aprovar warning/error/border e regras formais de logo
- Entregar `Cloudface-ID-Visual` (logos, fontes, Möbius pausável)
- Publicar `@cloudface/*` no registry
- Copiar código ou marcas do CultBR/Gov.br — **não** entra
