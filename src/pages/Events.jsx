import { useMemo, useState } from 'react';
import EventCard from '../components/EventCard/EventCard';
import { events } from '../data/mockData';

export default function Events() {
  const categories = useMemo(
    () => ['Semua', ...Array.from(new Set(events.map((e) => e.category)))],
    []
  );
  const [active, setActive] = useState('Semua');
  const [query, setQuery] = useState('');

  const filtered = events.filter((e) => {
    const matchesCategory = active === 'Semua' || e.category === active;
    const matchesQuery = e.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Kegiatan</p>
          <h1 className="page-hero__title">Agenda &amp; kegiatan rutin masjid.</h1>
          <p className="page-hero__desc">
            Kajian, pertemuan komunitas, kegiatan remaja, sampai agenda musiman —
            semua bisa ditemukan di satu tempat.
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
            <span className="visually-hidden">Cari kegiatan</span>
            <input
              type="search"
              placeholder="Cari kegiatan…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        {filtered.length === 0 ? (
          <p className="events-empty">Belum ada kegiatan yang cocok dengan pencarianmu.</p>
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
