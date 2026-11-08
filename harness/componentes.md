# Componentes

Spec original desta leva (bases + Sidebar). A documentação viva de cada componente está em [ui/](./ui/README.md).

Todos os componentes usam os tokens de [tokens.md](./tokens.md) e são pensados para o tema escuro.

Há duas camadas:

| Camada | Papel | Nesta leva |
|---|---|---|
| **Base** | Átomos reutilizáveis, sem layout de produto | Button, Input, Card, Badge, Label |
| **Composto** | Layout montado só com bases + tokens. Não introduz cor, tipo ou raio novos | Sidebar (menu lateral) |

Um composto não duplica o átomo: item de menu usa `Button` `ghost`; contagem usa `Badge`; título de seção usa `Label`. Se faltar um átomo, ele nasce na camada base antes do composto.

---

## Base

## Button

**Variantes**

| Variante | Visual | Quando usar |
|---|---|---|
| `primary` | Fundo `primary`, texto `bg` | Ação principal da tela (uma por contexto) |
| `secondary` | Fundo `surface`, texto `text` | Ações secundárias |
| `outline` | Borda `primary`, fundo transparente | Ações alternativas |
| `ghost` | Sem fundo nem borda, texto `text-muted` | Ações discretas, barras de ferramentas |
| `destructive` | Fundo `error` | Excluir, remover, cancelar algo irreversível |

**Tamanhos:** `sm` (32px de altura), `md` (40px, padrão), `lg` (48px).

**Estados:** hover em `primary-light`, foco com anel de 2px em `primary`, desabilitado com 40% de opacidade.

```tsx
<Button variant="primary" size="md">Conectar</Button>
<Button variant="outline" size="sm">Detalhes</Button>
<Button variant="destructive">Excluir</Button>
```

## Input

| Estado | Visual |
|---|---|
| Padrão | Fundo `surface`, borda `border`, texto `text` |
| `focus` | Borda e anel em `primary` |
| `error` | Borda em `error`, mensagem de ajuda em `error` |
| `disabled` | 40% de opacidade, cursor `not-allowed` |

```tsx
<Label htmlFor="email">E-mail</Label>
<Input id="email" placeholder="voce@cloudface.com" />
<Input error="E-mail inválido" />
<Input disabled />
```

## Card

Composto por `Card`, `CardHeader`, `CardContent` e `CardFooter`. Fundo `surface`, borda `border`, raio `radius.lg`.

```tsx
<Card>
  <CardHeader>Servidor principal</CardHeader>
  <CardContent>Latência média de 12 ms.</CardContent>
  <CardFooter><Button size="sm">Ver logs</Button></CardFooter>
</Card>
```

## Badge

| Variante | Cor |
|---|---|
| `default` | `primary` |
| `success` | `success` |
| `warning` | `warning` |
| `error` | `error` |

Use fundo com 15% de opacidade da cor e texto na cor cheia.

```tsx
<Badge variant="success">Online</Badge>
<Badge variant="error">Offline</Badge>
```

## Label

Texto em Manrope, `text.sm`, peso 500, cor `text`. Em formulário, sempre ligado ao campo via `htmlFor`; para obrigatórios, adicione `*` em `primary`. Como título de grupo em composto (Sidebar), pode ser só visual, sem `htmlFor`.

```tsx
<Label htmlFor="nome">Nome *</Label>
```

---

## Compostos

### Sidebar

Menu lateral de navegação. Fundo `surface`, borda `border` no eixo interno, largura fixa em `space.12` × 5 (240px). Não usa ciano como fundo.

**Peças (todas reexportadas de `@cloudface/ui`)**

| Peça | Montada com | Papel |
|---|---|---|
| `Sidebar` | superfície `Card` (sem header/footer internos) | Casca `nav` |
| `SidebarHeader` | assets do símbolo + texto em `font.heading` | Marca no topo |
| `SidebarSection` | `Label` | Grupo (ex.: Infra, Conta) |
| `SidebarItem` | `Button` `ghost` `sm` + `Badge` opcional | Item; ativo = texto `primary` e `aria-current="page"`; uma ação ativa por contexto |
| `SidebarFooter` | `Badge` | Status (Online / Offline) |

```tsx
<Sidebar>
  <SidebarHeader>Cloudface</SidebarHeader>
  <SidebarSection>
    <Label>Infra</Label>
    <SidebarItem current>
      Servidores <Badge>3</Badge>
    </SidebarItem>
    <SidebarItem>Logs</SidebarItem>
  </SidebarSection>
  <SidebarFooter>
    <Badge variant="success">Online</Badge>
  </SidebarFooter>
</Sidebar>
```

**Estados do item:** padrão (`text-muted`), hover (`primary-light` no texto, sem preencher o fundo com ciano), atual (`primary` + `aria-current`), desabilitado (40% de opacidade). Badge no item usa `default` para contagem e `success` / `error` só para saúde.

**Acessibilidade extra:** `Sidebar` é um `nav` com rótulo acessível; itens são botões ou links, nunca `div` clicável; teclado percorre a lista na ordem visual.

Outros compostos (topbar, page header, empty state) seguem o mesmo padrão e ficam fora desta leva.

## Acessibilidade

- Contraste mínimo AA em todos os textos.
- Foco sempre visível.
- Componentes interativos acessíveis por teclado.
