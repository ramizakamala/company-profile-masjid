import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="navbar__logo-mark" aria-hidden="true" />
            AL-Manshur Islamic Center
          </div>
          <p className="footer__desc">
            A place to worship, learn, and grow together — serving the local community
            through education, social programs, and daily prayer.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Navigate</h3>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Programs</h3>
          <Link to="/programs">Education</Link>
          <Link to="/programs">Community</Link>
          <Link to="/programs">Youth</Link>
          <Link to="/programs">Social</Link>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact</h3>
          <p>
            99Q4+8H8, Gampingan, Kebokura<br />
            Kec. Sumpiuh, Kab. Banyumas<br />
            Jawa Tengah 53195, Indonesia
          </p>
          <a href="tel:+6281234567890">+62 812 3456 7890</a>
          <a href="mailto:hello@almanshurcenter.org">hello@almanshurcenter.org</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} AL-Manshur Islamic Center. All rights reserved.</p>
        <div className="footer__social">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="YouTube">YouTube</a>
          <a href="#" aria-label="Facebook">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
