import './LocationSection.css';

export default function LocationSection() {
  return (
    <section className="location">
      <div className="container location__inner">
        <div className="location__info">
          <p className="eyebrow">Visit Us</p>
          <h2 className="location__title">Find your way here.</h2>

          <dl className="location__list">
            <div>
              <dt>Address</dt>
              <dd>99Q4+8H8, Gampingan, Kebokura, Kec. Sumpiuh, Kabupaten Banyumas, Jawa Tengah 53195, Indonesia</dd>
            </div>
            <div>
              <dt>Daily Activity</dt>
              <dd>Open daily, 04:30 – 21:30 for the five prayers and programs</dd>
            </div>
            <div>
              <dt>Contact</dt>
              <dd>+62 812 3456 7890<br />hello@almanshurcenter.org</dd>
            </div>
            <div>
              <dt>Social</dt>
              <dd>Instagram &middot; YouTube &middot; Facebook</dd>
            </div>
          </dl>

          <a
            className="btn btn-primary location__cta"
            href="https://maps.google.com/?q=99Q4%2B8H8,+Gampingan,+Kebokura,+Kec.+Sumpiuh,+Kabupaten+Banyumas,+Jawa+Tengah+53195"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </div>

        <div className="location__map">
          <iframe
            title="AL-Manshur Islamic Center location map"
            src="https://www.google.com/maps?q=99Q4%2B8H8+Kebokura+Sumpiuh+Banyumas&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
