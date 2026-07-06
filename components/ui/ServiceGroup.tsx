interface ServiceSubgroup {
  label: string;
  items: string[];
}

interface ServiceGroupProps {
  number: string;
  title: string;
  subgroups: ServiceSubgroup[];
}

export function ServiceGroup({ number, title, subgroups }: ServiceGroupProps) {
  return (
    <div className="flex h-full flex-col rounded-sm border border-stone-dark bg-paper p-6 sm:p-8">
      <div className="mb-6 flex items-start gap-4">
        <span className="font-heading text-3xl font-bold text-brick">
          {number}
        </span>
        <h3 className="font-heading text-xl font-semibold tracking-tight text-ink uppercase sm:text-2xl">
          {title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col gap-6">
        {subgroups.map((group) => (
          <div key={group.label}>
            <h4 className="mb-2 font-heading text-sm font-semibold tracking-wide text-muted uppercase">
              {group.label}
            </h4>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-ink">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brick"
                  />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
