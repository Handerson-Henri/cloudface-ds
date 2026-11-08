# Etapa 16 — Bases densas

Data: 2026-11-08

## Implementado

- **Button:** hover/active nas 5 variantes; `icon` leading; loading com `min-width: 8ch`
- **IconButton:** variantes primary/outline/ghost, tamanhos sm/md/lg, `aria-label` obrigatório, alvo ≥ 24×24, loading
- **Input:** `size` sm/md/lg (omitte o `size` nativo HTML)
- **Badge:** tom `info`; tamanhos sm/md
- **Link:** âncora de texto, ciano + sublinhado
- **Card:** `default` | `raised` | `interactive` (`interactive` só como `<a href>`)

## Decisões

- `Input size` substitui o atributo HTML `size` (largura em caracteres). Quem precisar do nativo usa style/CSS.
- Card interactive nunca é `div` clicável.

## Pendente

- fullWidth no Button
- prefixo/sufixo no Input
