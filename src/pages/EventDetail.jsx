import { Link, useParams } from 'react-router-dom';
import { events } from '../data/mockData';
import NotFound from './NotFound';

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) return <NotFound />;

  return (
    <>
      <div className="detail-hero">
        <img src={event.image} alt="" />
      </div>
      <section className="section container">
        <div className="detail-content">
          <Link to="/events" className="back-link">&larr; Back to Events</Link>
          <p className="eyebrow">{event.category}</p>
          <h1>{event.title}</h1>
        </div>

        <dl className="detail-meta">
          <div>
            <dt>Date</dt>
            <dd>{event.displayDate}</dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>{event.time}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{event.location}</dd>
          </div>
          <div>
            <dt>Speaker</dt>
            <dd>{event.speaker}</dd>
          </div>
        </dl>

        <div className="detail-content">
          <p>{event.description}</p>
          <div className="detail-content__cta">
            <a href="mailto:hello@almanshurcenter.org" className="btn btn-primary">
              Register Your Interest
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
