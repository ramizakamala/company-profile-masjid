import { useEffect, useState } from 'react';
import './PrayerTimes.css';

export default function PrayerTimes({ times }) {
  const [activePrayer, setActivePrayer] = useState('');

  useEffect(() => {
    const checkActivePrayer = () => {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      for (const p of times) {
        const [h, m] = p.time.split(':').map(Number);
        const pMinutes = h * 60 + m;
        if (pMinutes > currentMinutes) {
          setActivePrayer(p.name);
          return;
        }
      }
      setActivePrayer(times[0]?.name || '');
    };

    checkActivePrayer();
    const interval = setInterval(checkActivePrayer, 60000);
    return () => clearInterval(interval);
  }, [times]);

  const handlePrintSchedule = () => {
    window.print();
  };

  return (
    <section className="prayer">
      <div className="container prayer__inner">
        <div className="prayer__header">
          <span className="prayer__icon">🕌</span>
          <div>
            <p className="prayer__label">Jadwal Sholat Hari Ini</p>
            <p className="prayer__location">Sumpiuh, Kab. Banyumas (WIB)</p>
          </div>
        </div>

        <ul className="prayer__list">
          {times.map((t) => {
            const isNext = t.name === activePrayer;
            return (
              <li
                key={t.name}
                className={`prayer__item ${isNext ? 'prayer__item--active' : ''}`}
              >
                {isNext && <span className="prayer__active-badge">Selanjutnya</span>}
                <span className="prayer__name">{t.name}</span>
                <span className="prayer__time">{t.time}</span>
              </li>
            );
          })}
        </ul>

        <button
          className="prayer__download-btn"
          onClick={handlePrintSchedule}
          title="Cetak atau simpan jadwal sholat"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-4 11H9v-5h6v5zm4-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2-9H7v4h10V3z" />
          </svg>
          Cetak / PDF
        </button>
      </div>
    </section>
  );
}
