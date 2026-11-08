import { Button } from '../button/button';
import './pagination.css';

function tokens(page: number, pages: number): (number | 'ellipsis')[] {
  if (pages <= 7) return Array.from({ length: pages }, (_, i) => i + 1);
  const set = new Set([1, pages, page, page - 1, page + 1]);
  const nums = [...set].filter((n) => n >= 1 && n <= pages).sort((a, b) => a - b);
  const out: (number | 'ellipsis')[] = [];
  for (let i = 0; i < nums.length; i += 1) {
    const curr = nums[i];
    const prev = nums[i - 1];
    if (curr == null) continue;
    if (i && prev != null && curr - prev > 1) out.push('ellipsis');
    out.push(curr);
  }
  return out;
}

export function Pagination({
  page,
  pages,
  onChange,
  className,
}: {
  page: number;
  pages: number;
  onChange: (p: number) => void;
  className?: string;
}) {
  return (
    <nav aria-label="Paginação" className={['cf-pager', className].filter(Boolean).join(' ')}>
      <Button variant="ghost" size="sm" disabled={page <= 1} onClick={() => onChange(page - 1)}>
        Anterior
      </Button>
      {tokens(page, pages).map((item, i) =>
        item === 'ellipsis' ? (
          <span key={`e${i}`} className="cf-pager__ellipsis">
            …
          </span>
        ) : (
          <Button
            key={item}
            variant={item === page ? 'primary' : 'ghost'}
            size="sm"
            aria-current={item === page ? 'page' : undefined}
            onClick={() => onChange(item)}
          >
            {item}
          </Button>
        ),
      )}
      <Button variant="ghost" size="sm" disabled={page >= pages} onClick={() => onChange(page + 1)}>
        Próxima
      </Button>
    </nav>
  );
}
