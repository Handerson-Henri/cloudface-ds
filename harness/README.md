# Cloudface Design System

Design system oficial da **Cloudface**, construído a partir do pacote de identidade visual (`Cloudface-ID-Visual`).

> Infraestrutura de rede, precisão técnica e movimento contínuo.

**Toda a documentação em prosa vive aqui.** O [monorepo](../monorepo/README.md) é só código. `apps/docs` e `apps/storybook` são vitrines ao vivo, não a fonte.

## Princípios

1. **Escuro por padrão.** A interface nasce sobre azul-marinho quase preto e superfícies grafite.
2. **Ciano é sinal.** O ciano Cloudface indica conexão, ação e foco. Use com moderação.
3. **Menta é positivo.** O verde menta é reservado para estados de sucesso e confirmação.
4. **Precisão.** Espaçamentos consistentes, alinhamento rigoroso e tipografia limpa.
5. **Movimento contínuo.** O símbolo Möbius e as transições reforçam a ideia de fluxo.

## Índice

### Spec

| Arquivo | Conteúdo |
|---|---|
| [tokens.md](./tokens.md) | Paleta, tipografia, espaçamento, raios (oficial × proposta) |
| [validacao-marca.md](./validacao-marca.md) | Conferência das âncoras e do mapa light vs ID-Visual |
| [componentes.md](./componentes.md) | Spec original das bases e do Sidebar |
| [ui/](./ui/README.md) | Um arquivo por componente (modelo §6) |
| [identidade.md](./identidade.md) | Direção visual, logos, guidelines |
| [assets.md](./assets.md) | Inventário de logos, fontes e Möbius (aguardando o pacote) |
| [estrutura.md](./estrutura.md) | Árvore do monorepo e instalação |

### Análise e plano

| Arquivo | Conteúdo |
|---|---|
| [plano-implementacao.md](./plano-implementacao.md) | Etapas 0–7 da implementação do código |
| [analise-lacunas.md](./analise-lacunas.md) | Lacunas vs referências (08/11, escrita antes do código) |
| [analise-componentes.md](./analise-componentes.md) | Reanálise do código: cascas, variantes, vitrine |
| [analise-visual.md](./analise-visual.md) | Auditoria visual/funcional/estrutural (vitrine + código, 08/11) |
| [plano-fechamento.md](./plano-fechamento.md) | Ondas 19–24: P0–P2, famílias novas, cascas baixas |
| [plano-tema-claro.md](./plano-tema-claro.md) | Ondas 26–28: tema claro opt-in |

### Registro de execução

| Arquivo | Conteúdo |
|---|---|
| [ESTADO.md](./ESTADO.md) | Versões, etapas feitas, pendências |
| [contraste.md](./contraste.md) | Pares WCAG 2.2 medidos |
| [decisoes/](./decisoes/000-pilha.md) | ADRs (pilha, a11y, tema) |
| [etapas/](./etapas/00-base.md) | Diário 00–36 (Implementado / Decisões / Pendente) |
| [validacao-marca.md](./validacao-marca.md) | Âncoras oficiais e derivação do mapa light |

## Paleta resumida

| Token | HEX |
|---|---|
| `bg` | `#080C10` |
| `surface` | `#0C141C` |
| `text` | `#EDF5FA` |
| `text-muted` | `#A2B3BF` |
| `primary` | `#00C2FF` |
| `primary-light` | `#69DCFF` |
| `success` | `#8DF1C4` |
| `brand-deep` | `#06279E` |

## Tipografia resumida

- **Sora** para títulos
- **Manrope** para interface e corpo de texto
- **DM Sans** para conteúdo
- **Barlow Condensed Bold** para destaques e números
