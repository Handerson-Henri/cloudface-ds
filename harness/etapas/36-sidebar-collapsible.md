# Etapa 36 — defaultOpen true e collapsible

Data: 2026-11-08

## Implementado

- `defaultOpen` padrão `true` em qualquer nível; `false` fecha só aquele grupo
- `collapsible` padrão `true`; `false` trava o estado inicial, ignora clique e esconde a setinha
- Independente de `showChevron` e `showIcon`
- Stories: default aberto, default fechado, níveis mistos, estático aberto, estático fechado

## Decisões

- Pai não clicável não é `button` (não promete expansão).
- Setinha só entra se `collapsible` e a regra opt-in de `showChevron`.

## Pendente

- Publish `@cloudface/*`
- Flyout no rail colapsado
