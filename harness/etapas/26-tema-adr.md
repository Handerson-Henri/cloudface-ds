# Etapa 26 — ADR e tokens do tema claro

Data: 2026-11-08

## Implementado

- ADR [002-tema.md](../decisoes/002-tema.md): claro opt-in via `data-theme="light"`; `forced-colors` e `prefers-color-scheme` adiados
- `color.fg.accent` / `accent-hover` nos mapas dark e light
- `[data-theme='light']` em `variables.css` + `color-scheme`
- Primitivos `amber.600/700` e `rose.600/700` (proposta, mix sRGB)
- Light `fg.accent` = `cyan.800` (700 falha 4.5:1 no canvas claro)
- Testes de contraste dark+light; [contraste.md](../contraste.md); seção em [tokens.md](../tokens.md)
- Plano: [plano-tema-claro.md](../plano-tema-claro.md)

## Decisões

- Escuro continua `:root`. Sem seguir o SO.
- Fill do Button fica `action.primary.bg`. Texto de acento usa `fg.accent`.
- Mapa light é proposta; nenhum HEX light oficial.

## Pendente

- Onda 27: CSS da UI e vitrines
