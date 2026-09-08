import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { prayerTimes, programs } from '../../data/mockData';
import './Hero.css';

export default function Hero() {
  const [next, setNext] = useState({ name: 'Subuh', time: '04:42', mins: null });

  useEffect(() => {
    const updateNextPrayer = () => {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      for (const p of prayerTimes) {
        const [h, m] = p.time.split(':').map(Number);
        const pMinutes = h * 60 + m;
        if (pMinutes > currentMinutes) {
          setNext({ name: p.name, time: p.time, mins: pMinutes - currentMinutes });
          return;
        }
      }
      // sudah lewat Isya -> Subuh besok
      const [h, m] = prayerTimes[0].time.split(':').map(Number);
      const tomorrow = 24 * 60 - currentMinutes + h * 60 + m;
      setNext({ name: prayerTimes[0].name, time: prayerTimes[0].time, mins: tomorrow });
    };

    updateNextPrayer();
    const interval = setInterval(updateNextPrayer, 30000);
    return () => clearInterval(interval);
  }, []);

  const featured = programs[0];
  const inMinutes = next.mins != null && next.mins > 0 && next.mins <= 90 ? ` · dalam ${next.mins} menit` : '';

  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <svg className="hero__star" viewBox="0 0 100 100" aria-hidden="true">
          <path
            d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__next">
            <span className="hero__next-dot" aria-hidden="true" />
            Menuju sholat <strong>{next.name}</strong> · {next.time} WIB
            {inMinutes && <span className="hero__next-in">{inMinutes}</span>}
          </p>

          <h1 className="hero__headline">
            Masjid kecil yang menjadi <span className="hero__hl">rumah besar</span> bagi umatnya.
          </h1>
          <p className="hero__support">
            Al-Manshur hadir untuk warga Sumpiuh dan sekitarnya — sholat berjamaah,
            pendidikan Al-Qur&rsquo;an, dan program sosial yang digerakkan relawan.
            Terbuka untuk siapa saja yang ingin ikut serta.
          </p>
          <div className="hero__actions">
            <Link to="/programs" className="btn btn-primary">
              Jelajahi Program
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Jadwal &amp; Lokasi
            </Link>
          </div>
          <p className="hero__meta">Sejak 2014 · Sumpiuh, Banyumas · Terbuka untuk umum</p>
        </div>

        <div className="hero__stage">
          <Link to="/programs" className="hf hf--prog">
            <img src={featured.image} alt="" className="hf--prog__img" loading="eager" />
            <div className="hf--prog__body">
              <span className="hf--prog__cat">{featured.category}</span>
              <h3>{featured.name}</h3>
              <p>{featured.schedule}</p>
            </div>
          </Link>

          <div className="hf hf--prayer">
            <div className="hf--prayer__head">
              <span className="hf--prayer__dot" aria-hidden="true" />
              <strong>Jadwal Sholat</strong>
              <span className="hf--prayer__today">hari ini</span>
            </div>
            <ul className="hf--prayer__list">
              {prayerTimes.map((p) => (
                <li
                  key={p.name}
                  className={p.name === nextPrayer.name ? 'hf--prayer__row hf--prayer__row--next' : 'hf--prayer__row'}
                >
                  <span>{p.name}</span>
                  <span className="hf--prayer__time">{p.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hf hf--chip">
            <span className="hf--chip__mark" aria-hidden="true" />
            1.200+ jamaah &amp; warga binaan
          </div>
        </div>
      </div>
    </section>
  );
}
