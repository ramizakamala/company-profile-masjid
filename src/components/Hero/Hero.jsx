import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { prayerTimes } from '../../data/mockData';
import './Hero.css';

export default function Hero() {
  const [nextPrayer, setNextPrayer] = useState({ name: 'Maghrib', time: '18:02' });

  useEffect(() => {
    const updateNextPrayer = () => {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      for (const p of prayerTimes) {
        const [h, m] = p.time.split(':').map(Number);
        const pMinutes = h * 60 + m;
        if (pMinutes > currentMinutes) {
          setNextPrayer(p);
          return;
        }
      }
      setNextPrayer(prayerTimes[0]); // fallback to Fajr
    };

    updateNextPrayer();
    const interval = setInterval(updateNextPrayer, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero__bg-pattern" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="heroGlow" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#2d6a4f" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1b4332" stopOpacity="0" />
            </radialGradient>
            <pattern id="islamicPattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.06" />
              <circle cx="30" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGlow)" />
          <rect width="100%" height="100%" fill="url(#islamicPattern)" />
        </svg>
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>Sholat Selanjutnya: <strong>{nextPrayer.name} ({nextPrayer.time} WIB)</strong></span>
          </div>

          <h1 className="hero__headline">
            A place to worship, learn, and grow together.
          </h1>
          <p className="hero__support">
            AL-Manshur is a space for prayer, education, and community life —
            open to worshippers, neighbors, and anyone looking to learn more.
          </p>
          <div className="hero__actions">
            <Link to="/programs" className="btn btn-primary hero__btn-glow">Explore Our Programs</Link>
            <Link to="/contact" className="btn btn-outline">Visit Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
