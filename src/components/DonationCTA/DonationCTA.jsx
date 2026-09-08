import { Link } from 'react-router-dom';
import './DonationCTA.css';

export default function DonationCTA() {
  return (
    <section className="donation-cta">
      <div className="container donation-cta__inner">
        <div>
          <p className="eyebrow">Dukung Kami</p>
          <h2 className="donation-cta__headline">Bantu kami menghadirkan lebih banyak kebaikan.</h2>
          <p className="donation-cta__support">
            Donasi Anda menggerakkan pendidikan, kegiatan sosial, dan kehidupan komunitas —
            dari kelas akhir pekan hingga lumbung pangan mingguan. Semua penyaluran dilaporkan
            secara terbuka.
          </p>
        </div>
        <Link to="/donation" className="btn btn-gold donation-cta__btn">
          Donasi Sekarang
        </Link>
      </div>
    </section>
  );
}
