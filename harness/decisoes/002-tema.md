# ADR 002 — Tema claro e alto contraste

Status: aceito  
Data: 2026-11-08  
Atualizado: 2026-11-08 (onda 30)

## Decisão

Tema **escuro por padrão**. O tema claro existe como segundo mapa semântico, opt-in via `data-theme="light"` no `html`.

`prefers-color-scheme` **não** troca o tema sozinho (produto dark-first).

`forced-colors: active` remapeia os papéis `--cf-color-*` para cores de sistema (`Canvas`, `CanvasText`, `LinkText`, `ButtonText`, `ButtonFace`, `Highlight`, `GrayText`). Componentes já leem essas variáveis. Foco usa `Highlight`. Botão ganha borda `ButtonText` para o modo Windows/HCM desenhar o alvo.

`:root` define `color-scheme: dark` e os papéis escuros. `[data-theme="light"]` remapeia os mesmos `--cf-color-*` para primitivos claros (proposta derivada) e `color-scheme: light`.

Texto de acento (links, current, outline/ghost) usa `color.fg.accent` (`cyan.500` no dark, `cyan.800` no light — o 700 falha 4.5:1 no canvas claro). O fill `action.primary.bg` continua `cyan.500` nos dois temas.

Nenhum HEX light é oficial. O mapa claro só aponta primitivos já gerados. Conferência: [validacao-marca.md](../validacao-marca.md).

## Motivo

[harness/analise-lacunas.md](../analise-lacunas.md) §3.1: o tema claro é opcional, mas a decisão precisa ser registrada. A paleta oficial (`IDENTIDADE_VISUAL.md`) é escura. Ciano 500 como texto sobre canvas claro falha WCAG 2.2 AA — daí `fg.accent`. Alto contraste do SO não deve depender do ciano da marca: o sistema de cores do OS garante 1.4.11.
