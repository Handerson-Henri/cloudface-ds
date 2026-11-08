# Plano — tema claro (ponto 2)

Segundo mapa semântico no Cloudface DS. Escuro continua o padrão. Publish e `forced-colors` ficam fora.

O [plano-implementacao.md](./plano-implementacao.md) (etapas 0–7) **não** se reescreve. Diário: [etapas/26-tema-adr.md](./etapas/26-tema-adr.md) em diante. ADR: [002-tema.md](./decisoes/002-tema.md).

## Fora desta execução

- Publicação de registry (ponto 3)
- `forced-colors` e `prefers-color-scheme` automático
- HEX light inventado; CultBR; Tailwind
- Validação da marca dos tokens proposta

## Regras

- Última Active LTS / dist-tag `latest` estável
- CSS só com `--cf-*`
- `:root` = dark (`color-scheme: dark`). Claro só com `data-theme="light"` no `html`
- Mapa light usa primitivos já gerados, marcado **proposta**
- Fill do Button continua `action.primary.bg`. Texto de acento (Link, current, outline/ghost) usa `color.fg.accent`

## Ondas

| Onda | Etapa | Entrega |
|---|---|---|
| 26 ADR + tokens | [26-tema-adr.md](./etapas/26-tema-adr.md) | ADR, `fg.accent`, `[data-theme=light]`, contraste |
| 27 Vitrines | [27-tema-vitrines.md](./etapas/27-tema-vitrines.md) | CSS accent, toggle docs, logo-dark, Storybook |
| 28 Auditoria | [28-tema-auditoria.md](./etapas/28-tema-auditoria.md) | Percurso light, regressões, dark intacto |

## Critério por onda

1. Código + CSS `--cf-*`
2. Teste da pasta tocada
3. Registro Implementado / Decisões / Pendente
4. Vitrine 5173 e Storybook 6006 no fim da 28
