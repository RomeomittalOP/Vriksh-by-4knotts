export function GridLines({ columns = 12 }: { columns?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 flex"
      aria-hidden
    >
      <div className="container-x relative flex w-full">
        {new Array(columns).fill(0).map((_, i) => (
          <div
            key={i}
            className="h-full flex-1 border-l border-forest-700/[0.04] first:border-l-0"
          />
        ))}
      </div>
    </div>
  );
}
