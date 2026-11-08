import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import './card.css';

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export type CardVariant = 'default' | 'raised' | 'interactive';

type CardDivProps = HTMLAttributes<HTMLDivElement> & {
  variant?: Exclude<CardVariant, 'interactive'>;
  href?: never;
};

type CardLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: 'interactive';
  href: string;
};

export type CardProps = CardDivProps | CardLinkProps;

export function Card(props: CardProps) {
  const { className, variant = 'default', ...rest } = props;
  const classes = cx('cf-card', `cf-card--${variant}`, 'cf-focus', className);

  if (variant === 'interactive') {
    const { href, ...anchor } = rest as CardLinkProps;
    return <a className={classes} href={href} {...anchor} />;
  }

  return <div className={classes} {...(rest as CardDivProps)} />;
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('cf-card__header', className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('cf-card__content', className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('cf-card__footer', className)} {...props} />;
}
