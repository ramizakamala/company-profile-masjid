import './ProgramCard.css';

export default function ProgramCard({ program }) {
  return (
    <article className="program-card">
      <div className="program-card__media">
        <img src={program.image} alt="" />
      </div>
      <p className="program-card__category">{program.category}</p>
      <h3 className="program-card__name">{program.name}</h3>
      <p className="program-card__desc">{program.description}</p>
      <dl className="program-card__meta">
        <div>
          <dt>Schedule</dt>
          <dd>{program.schedule}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{program.location}</dd>
        </div>
      </dl>
    </article>
  );
}
