import type {
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
} from 'react';
import './table.css';

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(' ');
}

export function Table({
  className,
  ...props
}: TableHTMLAttributes<HTMLTableElement>) {
  return <table className={cx('cf-table', className)} {...props} />;
}

export function TableHead({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cx('cf-table__head', className)} {...props} />;
}

export function TableBody({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cx('cf-table__body', className)} {...props} />;
}

export function TableRow({
  className,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cx('cf-table__row', className)} {...props} />;
}

export function TableCell({
  header = false,
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement> & { header?: boolean }) {
  const Tag = header ? 'th' : 'td';
  return <Tag className={cx('cf-table__cell', className)} {...props} />;
}

export function TableCaption({
  className,
  ...props
}: HTMLAttributes<HTMLTableCaptionElement>) {
  return <caption className={cx('cf-table__caption', className)} {...props} />;
}
