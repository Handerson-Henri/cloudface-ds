import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from '../src/badge/badge';
import { Button } from '../src/button/button';
import { Card, CardContent, CardFooter, CardHeader } from '../src/card/card';
import { Input } from '../src/input/input';
import { Label } from '../src/label/label';

describe('Button', () => {
  const variants = [
    'primary',
    'secondary',
    'outline',
    'ghost',
    'destructive',
  ] as const;
  const sizes = ['sm', 'md', 'lg'] as const;

  it.each(variants)('renderiza variante %s', (variant) => {
    render(<Button variant={variant}>Ação</Button>);
    expect(screen.getByRole('button', { name: 'Ação' })).toHaveClass(
      `cf-button--${variant}`,
    );
  });

  it.each(sizes)('renderiza tamanho %s', (size) => {
    render(<Button size={size}>Ação</Button>);
    expect(screen.getByRole('button', { name: 'Ação' })).toHaveClass(
      `cf-button--${size}`,
    );
  });

  it('fica desabilitado com cores semânticas, sem opacidade genérica', () => {
    render(<Button disabled>Off</Button>);
    expect(screen.getByRole('button', { name: 'Off' })).toBeDisabled();
  });
});

describe('Input', () => {
  it('estado padrão', () => {
    render(<Input aria-label="campo" />);
    expect(screen.getByRole('textbox', { name: 'campo' })).toHaveClass(
      'cf-input',
    );
  });

  it('estado error', () => {
    render(<Input id="email" aria-label="email" error="E-mail inválido" />);
    expect(screen.getByRole('textbox')).toHaveClass('cf-input--error');
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('estado disabled', () => {
    render(<Input aria-label="campo" disabled />);
    expect(screen.getByRole('textbox', { name: 'campo' })).toBeDisabled();
  });

  it('aceita id para o estado focus no DOM', () => {
    render(<Input id="nome" aria-label="nome" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'nome');
  });
});

describe('Card', () => {
  it('compõe header, content e footer', () => {
    render(
      <Card>
        <CardHeader>Servidor principal</CardHeader>
        <CardContent>Latência média de 12 ms.</CardContent>
        <CardFooter>
          <Button size="sm">Ver logs</Button>
        </CardFooter>
      </Card>,
    );
    expect(screen.getByText('Servidor principal')).toHaveClass(
      'cf-card__header',
    );
    expect(screen.getByText('Latência média de 12 ms.')).toHaveClass(
      'cf-card__content',
    );
    expect(screen.getByRole('button', { name: 'Ver logs' })).toBeInTheDocument();
  });
});

describe('Badge', () => {
  const variants = ['default', 'info', 'success', 'warning', 'error'] as const;

  it.each(variants)('renderiza variante %s', (variant) => {
    render(<Badge variant={variant}>{variant}</Badge>);
    expect(screen.getByText(variant)).toHaveClass(`cf-badge--${variant}`);
  });
});

describe('Label', () => {
  it('liga ao campo via htmlFor', () => {
    render(
      <>
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" />
      </>,
    );
    expect(screen.getByText('Nome')).toHaveAttribute('for', 'nome');
  });

  it('marca obrigatório com asterisco em primary', () => {
    render(
      <Label htmlFor="nome" required>
        Nome
      </Label>,
    );
    expect(screen.getByText('*')).toHaveClass('cf-label__req');
  });
});
