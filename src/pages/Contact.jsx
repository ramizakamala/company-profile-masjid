import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="page-hero__title">We\u2019d love to hear from you.</h1>
          <p className="page-hero__desc">
            Questions about programs, visiting, or getting involved \u2014 reach out
            any time.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="contact-grid">
          <div className="contact-info">
            <dl>
              <div>
                <dt>Address</dt>
                <dd>99Q4+8H8, Gampingan, Kebokura, Kec. Sumpiuh, Kabupaten Banyumas, Jawa Tengah 53195, Indonesia</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd><a href="tel:+6281234567890">+62 812 3456 7890</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:hello@almanshurcenter.org">hello@almanshurcenter.org</a></dd>
              </div>
              <div>
                <dt>Social</dt>
                <dd>Instagram &middot; YouTube &middot; Facebook</dd>
              </div>
            </dl>

            <div className="contact-map">
              <iframe
                title="AL-Manshur Islamic Center location map"
                src="https://www.google.com/maps?q=99Q4%2B8H8+Kebokura+Sumpiuh+Banyumas&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <p className="contact-form__success">
                Thank you \u2014 your message has been sent. We\u2019ll be in touch soon.
              </p>
            ) : (
              <>
                <div className="contact-form__field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" required />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
