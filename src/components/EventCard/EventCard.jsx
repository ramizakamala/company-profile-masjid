import { Link } from 'react-router-dom';
import './EventCard.css';

function splitDate(displayDate) {
  // "Saturday, 12 September" -> { weekday: 'Saturday', rest: '12 September' }
  const [weekday, rest] = displayDate.split(', ');
  return { weekday, rest };
}

export default function EventCard({ event, linkTo }) {
  const { weekday, rest } = splitDate(event.displayDate);
  const content = (
    <>
      <div className="event-card__media">
        <img src={event.image} alt="" />
        <div className="event-card__date">
          <span>{rest.split(' ')[0]}</span>
          <span>{rest.split(' ')[1]}</span>
        </div>
      </div>
      <div className="event-card__body">
        <p className="event-card__meta">{weekday} \u00b7 {event.time} \u00b7 {event.location}</p>
        <h3 className="event-card__title">{event.title}</h3>
        <p className="event-card__desc">{event.description}</p>
      </div>
    </>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="event-card event-card--link">
        {content}
      </Link>
    );
  }

  return <article className="event-card">{content}</article>;
}
