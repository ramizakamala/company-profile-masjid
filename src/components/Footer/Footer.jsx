import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="navbar__logo-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path
                  d="M12 2 L14.6 9.4 L22 12 L14.6 14.6 L12 22 L9.4 14.6 L2 12 L9.4 9.4 Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Al-Manshur Islamic Center
          </div>
          <p className="footer__desc">
            Tempat ibadah, belajar, dan tumbuh bersama — melayani warga sekitar melalui
            pendidikan, program sosial, dan sholat berjamaah setiap hari.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Jelajahi</h3>
          <Link to="/">Beranda</Link>
          <Link to="/about">Profil</Link>
          <Link to="/events">Kegiatan</Link>
          <Link to="/gallery">Galeri</Link>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Program</h3>
          <Link to="/programs">Pendidikan</Link>
          <Link to="/programs">Peribadatan</Link>
          <Link to="/programs">Remaja</Link>
          <Link to="/programs">Sosial</Link>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Kontak</h3>
          <p>
            99Q4+8H8, Gampingan, Kebokura
            <br />
            Kec. Sumpiuh, Kab. Banyumas
            <br />
            Jawa Tengah 53195, Indonesia
          </p>
          <a href="tel:+6281234567890">+62 812 3456 7890</a>
          <a href="mailto:halo@almanshur.org">halo@almanshur.org</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} Masjid Al-Manshur Islamic Center.</p>
        <div className="footer__social">
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
          <a href="#" aria-label="YouTube">
            YouTube
          </a>
          <a href="#" aria-label="Facebook">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
