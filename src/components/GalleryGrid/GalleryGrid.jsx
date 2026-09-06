import { useMemo, useState, useEffect, useCallback } from 'react';
import './GalleryGrid.css';

export default function GalleryGrid({ items, showFilter = false }) {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  );
  const [active, setActive] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active);

  const activeItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
  }, [filtered.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
  }, [filtered.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <div>
      {showFilter && (
        <div className="gallery-filter" role="tablist" aria-label="Filter gallery by category">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`gallery-filter__btn ${active === cat ? 'gallery-filter__btn--active' : ''}`}
              onClick={() => {
                setActive(cat);
                setLightboxIndex(null);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="gallery-grid">
        {filtered.map((item, idx) => (
          <button
            key={item.id}
            className={`gallery-grid__item gallery-grid__item--${idx % 5}`}
            onClick={() => setLightboxIndex(idx)}
            aria-label={`View image: ${item.title}`}
          >
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="gallery-grid__overlay">
              <span className="gallery-grid__zoom-icon">🔍</span>
              <span className="gallery-grid__caption">{item.title}</span>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="lightbox__close"
            aria-label="Tutup"
            onClick={() => setLightboxIndex(null)}
          >
            &times;
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Foto sebelumnya"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            &#10094;
          </button>

          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={activeItem.image} alt={activeItem.title} />
            <figcaption>
              <span className="lightbox__counter">
                {lightboxIndex + 1} dari {filtered.length}
              </span>
              <span className="lightbox__category">{activeItem.category}</span>
              <h3>{activeItem.title}</h3>
            </figcaption>
          </figure>

          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Foto selanjutnya"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
