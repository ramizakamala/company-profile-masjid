import { useMemo, useState } from 'react';
import ProgramCard from '../components/ProgramCard/ProgramCard';
import { programs } from '../data/mockData';

export default function Programs() {
  const categories = useMemo(
    () => ['Semua', ...Array.from(new Set(programs.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState('Semua');
  const [search, setSearch] = useState('');

  const filtered = programs.filter((p) => {
    const matchesCategory = active === 'Semua' || p.category === active;
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Program</p>
          <h1 className="page-hero__title">Program rutin untuk setiap usia.</h1>
          <p className="page-hero__desc">
            Dari pendidikan Al-Qur&rsquo;an sampai lumbung pangan warga — semua program dikelola
            bersama oleh pengurus dan relawan setiap minggunya.
          </p>
        </div>
      </section>

      <section className="section container">
        {/* Search & Category Filter Controls */}
        <div className="filter-bar">
          <div className="filter-search">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="filter-search__icon">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input
              type="text"
              placeholder="Cari nama program atau deskripsi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="filter-search__input"
            />
            {search && (
              <button className="filter-search__clear" onClick={() => setSearch('')}>
                &times;
              </button>
            )}
          </div>

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
        </div>

        {filtered.length > 0 ? (
          <div className="grid-3">
            {filtered.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
        ) : (
          <div className="filter-empty">
            <p>Tidak ada program yang sesuai dengan pencarian &quot;{search}&quot;.</p>
            <button className="btn btn-outline" onClick={() => { setSearch(''); setActive('Semua'); }}>
              Reset Filter
            </button>
          </div>
        )}
      </section>
    </>
  );
}
