# Etapa 6 — `apps/docs`

Data: 2026-11-08

Vitrine Vite (princípios ao vivo). A prosa do DS está no harness, não neste app.

## Implementado

- App Vite `docs` em `apps/docs`
- Páginas: princípios, tokens (oficial vs proposta), identidade (sem logo inventado), Button, Input, Card, Badge, Label, Sidebar
- Navegação da própria docs é o Sidebar composto
- `pnpm --filter docs build` passou (Vite 8.3.6)
- `pnpm --filter docs dev` em `http://localhost:5173/`

Verificação no browser:

- Princípios carrega no tema escuro (`bg` / `surface`)
- Tokens: swatches oficiais e proposta
- Button: uma ação `Conectar` primary; click funciona; disabled presente
- Input: digitação em `voce@cloudface.com`; estado error e disabled visíveis
- Sidebar: item atual com `aria-current`; demo composto (Servidores + Badge 3) ao vivo

## Decisões

| Item | Canal | Versão resolvida | Data |
|---|---|---|---|
| vite | `latest` estável | 8.3.6 | 2026-11-08 |
| react / react-dom | mesma da etapa 4 | 19.3.1 | 2026-11-08 |
| @vitejs/plugin-react | `latest` estável | 6.2.1 | 2026-11-08 |

- Sem router: estado React + `SidebarItem` `onClick`.
- Na página Button, tamanhos usam `outline` para não haver várias actions `primary` no mesmo contexto.
- Identidade lista arquivos como **aguardando**, sem PNG/SVG falsos.

## Pendente

- Deploy da docs
- Busca, i18n, versão publicada
- Mark da marca no `SidebarHeader` quando `Cloudface-ID-Visual` chegar

Próximo passo: etapa 7 — verificação.
