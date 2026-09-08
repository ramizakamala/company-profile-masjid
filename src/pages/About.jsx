import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import { leadership, timeline } from '../data/mockData';

const values = [
  { name: 'Ikhlas', text: 'Setiap program dimulai dari niat tulus dan berpegang pada nilai-nilai Islam.' },
  { name: 'Ukhuwah', text: 'Kami membangun hubungan lintas usia dan latar belakang — masjid ini milik semua warga.' },
  { name: 'Ilmu', text: 'Belajar adalah perjalanan seumur hidup, terbuka bagi pemula sampai yang sudah mendalam.' },
  { name: 'Khidmat', text: 'Kami mengukur keberhasilan dari seberapa baik melayani tetangga, bukan sekadar jumlah anggota.' },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Profil</p>
          <h1 className="page-hero__title">Masjid yang lahir dari kebersamaan warga.</h1>
          <p className="page-hero__desc">
            Masjid Al-Manshur hadir sebagai tempat ibadah, belajar, dan saling menguatkan —
            terbuka untuk siapa saja di lingkungan Taman Kota Sumpiuh dan sekitarnya.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="about-story">
          <div className="about-story__media">
            <img
              src="/images/mosque_exterior.jpg"
              alt="Halaman dan bangunan Masjid Al-Manshur"
            />
          </div>
          <div className="about-story__text">
            <p className="eyebrow">Cerita Kami</p>
            <h2>Dari pengajian kecil, menjadi masjid milik warga.</h2>
            <p>
              Al-Manshur berawal dari sekelompok warga yang rutin mengaji dan sholat berjamaah
              di rumah salah satu keluarga. Makin banyak yang bergabung, makin kuat keinginan
              untuk memiliki masjid sendiri.
            </p>
            <p>
              Lewat gotong royong dan donasi warga, Masjid Al-Manshur resmi berdiri pada 2025 —
              dan terus bertumbuh menjadi pusat sholat berjamaah, pendidikan Al-Qur&rsquo;an,
              dan kepedulian sosial untuk lingkungan sekitar.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="about-mission">
            <div className="about-mission__card">
              <p className="eyebrow">Visi</p>
              <p className="about-mission__text">
                Menjadi masjid yang hidup: ibadah yang nyaman, ilmu yang berkembang, dan warga
                yang saling peduli — untuk siapa pun, dari latar belakang apa pun.
              </p>
            </div>
            <div className="about-mission__card">
              <p className="eyebrow">Misi</p>
              <p className="about-mission__text">
                Menghadirkan rumah ibadah dan belajar yang terbuka, mendampingi warga melalui
                pendidikan, serta menyalurkan bantuan secara amanah dan transparan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeader eyebrow="Yang Kami Pegang" title="Nilai-nilai Al-Manshur." />
        <div className="grid-4 about-values">
          {values.map((v) => (
            <div key={v.name} className="about-values__item">
              <h3>{v.name}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow="Pengurus & Relawan" title="Yang mengurus di balik layar." />
          <div className="grid-4">
            {leadership.map((person) => (
              <div key={person.name} className="leader-card">
                <div className="leader-card__media">
                  <img src={person.image} alt={`Potret ${person.name}`} />
                </div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeader eyebrow="Perjalanan Kami" title="Dari niat warga sampai berdiri." />
        <ol className="timeline">
          {timeline.map((item) => (
            <li key={item.year} className="timeline__item">
              <span className="timeline__year">{item.year}</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--deep about-cta">
        <div className="container about-cta__inner">
          <h2>Masjid ini milik kita bersama.</h2>
          <p>Sholat berjamaah dan program kami terbuka — silakan mampir kapan pun.</p>
          <Link to="/contact" className="btn btn-gold">Rencanakan Kunjungan</Link>
        </div>
      </section>
    </>
  );
}
