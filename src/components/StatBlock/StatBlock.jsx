import './StatBlock.css';

export default function StatBlock({ stats }) {
  return (
    <div className="stat-block">
      {stats.map((s) => (
        <div key={s.label} className="stat-block__item">
          <p className="stat-block__value">{s.value}</p>
          <p className="stat-block__label">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
