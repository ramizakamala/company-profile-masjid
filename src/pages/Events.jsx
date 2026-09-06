import { useMemo, useState } from 'react';
import EventCard from '../components/EventCard/EventCard';
import { events } from '../data/mockData';

export default function Events() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(events.map((e) => e.category)))],
    []
  );
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = events.filter((e) => {
    const matchesCategory = active === 'All' || e.category === active;
    const matchesQuery = e.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Events</p>
          <h1 className="page-hero__title">What\u2019s happening at the Center.</h1>
          <p className="page-hero__desc">
            Study circles, community meetings, youth activities, and seasonal
            gatherings \u2014 all in one place.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="events-toolbar">
          <div className="gallery-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter__btn ${active === cat ? 'gallery-filter__btn--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <label className="events-search">
            <span className="visually-hidden">Search events</span>
            <input
              type="search"
              placeholder="Search events\u2026"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        {filtered.length === 0 ? (
          <p className="events-empty">No events match your search just yet.</p>
        ) : (
          <div className="grid-3">
            {filtered.map((e) => (
              <EventCard key={e.id} event={e} linkTo={`/events/${e.id}`} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
