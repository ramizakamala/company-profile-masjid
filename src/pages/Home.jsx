import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import DonationCTA from '../components/DonationCTA/DonationCTA';
import LocationSection from '../components/LocationSection/LocationSection';
import { programs, events, stats, testimonials } from '../data/mockData';
import './Home.css';

const featuredIds = ['quran-tafsir-circle', 'neighbors-food-pantry', 'youth-leadership-lab'];

const visionStages = [
  {
    n: '01',
    title: 'Edukasi',
    desc: 'Menanamkan ilmu sejak dini — TPA & tahfidz, kajian rutin, sekolah Arab akhir pekan, dan pengajian untuk semua usia.',
  },
  {
    n: '02',
    title: 'Ibadah',
    desc: 'Menghidupkan masjid — sholat berjamaah lima waktu, tarawih, serta peringatan hari besar Islam yang melibatkan warga.',
  },
  {
    n: '03',
    title: 'Pemberdayaan',
    desc: 'Menebar manfaat nyata — lumbung pangan, santunan, penyaluran zakat-infak-sedekah, dan pendampingan warga sekitar.',
  },
];

const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

function dayMonth(isoDate) {
  const [, m, d] = isoDate.split('-');
  return { day: d, month: bulan[Number(m) - 1] };
}

export default function Home() {
  const featured = featuredIds
    .map((id) => programs.find((p) => p.id === id))
    .filter(Boolean);
  const upcoming = events.slice(0, 3);
  const featuredTesti = testimonials[0];
  const sideTesti = testimonials.slice(1);

  return (
    <>
      <Hero />

      {/* Statement */}
      <section className="section section--deep hm-state">
        <p className="hm-state__year" aria-hidden="true">
          2025
        </p>
        <div className="container hm-state__inner">
          <p className="eyebrow">Berdiri 2025</p>
          <h2 className="hm-state__big">
            Kami percaya masjid adalah <em>rumah kedua</em> — tempat anak-anak belajar mengaji,
            tetangga berbagi rezeki, dan setiap orang punya tempat pulang.
          </h2>
          <div className="hm-state__foot">
            <p>
              Berawal dari pengajian kecil di rumah warga, Al-Manshur resmi berdiri tahun 2025
              — dan terus tumbuh bersama warga Sumpiuh dan sekitarnya.
            </p>
            <Link to="/about" className="btn btn-outline">
              Kenal Lebih Dekat
            </Link>
          </div>
        </div>
      </section>

      {/* Visi */}
      <section className="section section--alt">
        <div className="container">
          <div className="hm-head">
            <div>
              <p className="eyebrow">Cara Kami Melayani</p>
              <h2 className="hm-head__title">Satu masjid, tiga pijakan.</h2>
            </div>
            <p className="hm-head__desc">
              Setiap program Al-Manshur berpijak pada salah satu dari tiga peran ini — ilmu,
              ibadah, dan manfaat bagi sesama.
            </p>
          </div>

          <div className="hm-vision">
            {visionStages.map((s) => (
              <article className="hm-vision__item" key={s.n}>
                <span className="hm-vision__num" aria-hidden="true">
                  {s.n}
                </span>
                <div>
                  <h3 className="hm-vision__title">{s.title}</h3>
                  <p className="hm-vision__desc">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Program unggulan — kartu overlap */}
      <section className="section">
        <div className="container">
          <div className="hm-head hm-head--row">
            <div>
              <p className="eyebrow">Program Unggulan</p>
              <h2 className="hm-head__title">Ada sesuatu untuk setiap usia.</h2>
            </div>
            <Link to="/programs" className="hm-head__link">
              Lihat Semua Program
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="hm-progs">
            {featured.map((p) => (
              <Link to="/programs" key={p.id} className="hm-prog">
                <div className="hm-prog__media">
                  <img src={p.image} alt="" loading="lazy" />
                </div>
                <div className="hm-prog__body">
                  <span className="hm-prog__cat">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p>{p.schedule}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik jamaah */}
      <section className="section section--deep hm-stats">
        <div className="container">
          <div className="hm-head hm-stats__head">
            <div>
              <p className="eyebrow">Dampak Nyata</p>
              <h2 className="hm-head__title">Berkembang bersama, angka demi angka.</h2>
            </div>
          </div>

          <div className="hm-stats__cards">
            {stats.map((s) => (
              <div className="hm-stat" key={s.label}>
                <span className="hm-stat__value">{s.value}</span>
                <span className="hm-stat__label">{s.label}</span>
                {s.note && <span className="hm-stat__note">{s.note}</span>}
              </div>
            ))}
          </div>
          <p className="hm-stats__foot">
            * Angka pembaruan berkala dari laporan pengurus — data akhir menunggu verifikasi riil.
          </p>
        </div>
      </section>

      {/* Kegiatan terdekat */}
      <section className="section">
        <div className="container">
          <div className="hm-head hm-head--row">
            <div>
              <p className="eyebrow">Kegiatan Terdekat</p>
              <h2 className="hm-head__title">Apa yang berlangsung akhir-akhir ini.</h2>
            </div>
            <Link to="/events" className="hm-head__link">
              Semua Kegiatan
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="hm-events">
            {upcoming.map((e) => {
              const { day, month } = dayMonth(e.date);
              return (
                <Link to={`/events/${e.id}`} className="hm-event" key={e.id}>
                  <div className="hm-event__date">
                    <span className="hm-event__day">{day}</span>
                    <span className="hm-event__month">{month}</span>
                  </div>
                  <div className="hm-event__body">
                    <h3>{e.title}</h3>
                    <p>
                      {e.displayDate} · {e.time} WIB · {e.location}
                    </p>
                  </div>
                  <span className="hm-event__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="section section--alt hm-testi">
        <div className="container">
          <div className="hm-head">
            <p className="eyebrow">Kata Jamaah</p>
            <h2 className="hm-head__title">Mereka yang merasakan langsung.</h2>
          </div>

          <div className="hm-testi__grid">
            <figure className="hm-quote hm-quote--lead">
              <span className="hm-quote__mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>{featuredTesti.quote}</blockquote>
              <figcaption>
                <strong>{featuredTesti.name}</strong>
                <span>{featuredTesti.role}</span>
              </figcaption>
            </figure>

            <div className="hm-testi__side">
              {sideTesti.map((t) => (
                <figure className="hm-quote hm-quote--side" key={t.name}>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DonationCTA />

      <section className="section">
        <LocationSection />
      </section>
    </>
  );
}
