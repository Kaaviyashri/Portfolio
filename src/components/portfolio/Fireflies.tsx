export function Fireflies({ count = 24 }: { count?: number }) {
  const flies = Array.from({ length: count }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {flies.map((i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 6;
        const dur = 10 + Math.random() * 10;
        return (
          <span
            key={i}
            className="firefly"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s, ${delay}s`,
              animationDuration: `${dur}s, ${1.5 + Math.random() * 2}s`,
            }}
          />
        );
      })}
    </div>
  );
}
