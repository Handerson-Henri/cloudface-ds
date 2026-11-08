import './description-list.css';

export type DescriptionListProps = {
  items: { term: string; description: string }[];
  className?: string;
};

export function DescriptionList({ items, className }: DescriptionListProps) {
  return (
    <dl className={['cf-dl', className].filter(Boolean).join(' ')}>
      {items.map((item) => (
        <div key={item.term} className="cf-dl__row">
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}
