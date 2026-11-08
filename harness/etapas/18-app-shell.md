# Etapa 18 — App shell

Data: 2026-11-08

## Implementado

- **SkipLink** → `#conteudo`
- **Sidebar** `collapsed` + `icon` no item (nome acessível extraído do children)
- **PageHeader:** título Sora + Breadcrumbs + ações
- **Toast / ToastProvider / useToast:** fila, `aria-live`, dismiss (Toast deixa de ser alias puro)
- **ConfirmDialog:** Modal com cancelar + confirmar (destructive opcional), Esc/backdrop
- **Stat:** valor em `font.display` (Barlow), label muted
- **Table:** Head/Body/Row/Cell/Caption; empty via EmptyState no tbody

## Decisões

- ConfirmDialog esconde o “Fechar” genérico do Modal (`hideClose`).
- Popover, Menu, Heading/Text/Code, Banner e tema claro ficam fora (canvas: próxima leva).
- Focus trap completo em Modal/Drawer continua pendente.

## Pendente

- Focus trap e restauração de foco
- Popover / Menu
- Tema claro (ADR 002)
- Cloudface-ID-Visual, publicação
