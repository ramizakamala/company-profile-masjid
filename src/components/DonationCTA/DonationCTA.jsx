import { Link } from 'react-router-dom';
import './DonationCTA.css';

export default function DonationCTA() {
  return (
    <section className="donation-cta">
      <div className="container donation-cta__inner">
        <div>
          <p className="eyebrow">Support the Center</p>
          <h2 className="donation-cta__headline">Help us build a stronger community.</h2>
          <p className="donation-cta__support">
            Your support helps run our education, social, and community programs \u2014
            from weekend classes to the weekly food pantry.
          </p>
        </div>
        <Link to="/donation" className="btn btn-gold donation-cta__btn">
          Support Our Mission
        </Link>
      </div>
    </section>
  );
}
