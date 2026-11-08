import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../shared/cx';
import './accordion.css';

export type AccordionItem = {
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
};

export type AccordionProps = HTMLAttributes<HTMLDivElement> & {
  items: AccordionItem[];
};

export function Accordion({ items, className, ...props }: AccordionProps) {
  return (
    <div className={cx('cf-acc', className)} {...props}>
      {items.map((item) => (
        <details key={item.title} className="cf-acc__item" open={item.defaultOpen}>
          <summary className="cf-focus">{item.title}</summary>
          <div className="cf-acc__body">{item.content}</div>
        </details>
      ))}
    </div>
  );
}
