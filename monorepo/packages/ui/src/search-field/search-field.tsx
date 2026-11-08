import type { ReactNode } from 'react';
import { Field } from '../field/field';
import { Input, type InputProps } from '../input/input';
import { IconSearch } from '../shared/icons';
import './search-field.css';

export type SearchFieldProps = Omit<InputProps, 'type' | 'id'> & {
  id: string;
  label: ReactNode;
  hint?: string;
  optional?: boolean;
};

function SearchControl(props: InputProps) {
  return (
    <span className="cf-search">
      <IconSearch />
      <Input type="search" className="cf-search__input" {...props} />
    </span>
  );
}

export function SearchField({
  id,
  label,
  hint,
  optional,
  error,
  ...props
}: SearchFieldProps) {
  return (
    <Field id={id} label={label} hint={hint} optional={optional} error={error}>
      <SearchControl {...props} />
    </Field>
  );
}
