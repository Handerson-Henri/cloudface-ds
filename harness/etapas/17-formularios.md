# Etapa 17 — Formulário de verdade

Data: 2026-11-08

## Implementado

- **Field / Label:** `optional` (“opcional”), distinto de `required`
- **CheckboxGroup / RadioGroup:** `fieldset` + `legend`; RadioGroup injeta `name`; `error` com texto+ícone
- **SearchField:** Input `type="search"` + Field + ícone
- **Combobox:** input + listbox APG (setas, Home/End, Enter, Esc, `aria-expanded` / `activedescendant`), single select
- Select nativo permanece

## Decisões

- Combobox não substitui Select: Select para listas curtas e estáticas; Combobox para busca.
- Sem Multiselect, DateField, Slider.

## Pendente

- Combobox controlado ponta a ponta em testes de teclado manuais
- Checkbox indeterminate
