import { useState } from 'react';

// [DUMMY] kontak — ganti dengan nomor/email resmi pengurus (lihat DATA_PENGURUS.md)
const PHONE = '+62 812 3456 7890';
const EMAIL = 'halo@almanshur.org';

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
          <p className="eyebrow">Kontak</p>
          <h1 className="page-hero__title">Ada yang ingin ditanyakan?</h1>
          <p className="page-hero__desc">
            Tanya soal program, jadwal, kunjungan, atau ingin ikut terlibat —
            hubungi kami kapan saja.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="contact-grid">
          <div className="contact-info">
            <dl>
              <div>
                <dt>Alamat</dt>
                <dd>99Q4+8H8, Gampingan, Kebokura, Kec. Sumpiuh, Kabupaten Banyumas, Jawa Tengah 53195, Indonesia</dd>
              </div>
              <div>
                <dt>Telepon / WhatsApp</dt>
                <dd>
                  <a href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`}>{PHONE}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </dd>
              </div>
              <div>
                <dt>Sosial Media</dt>
                <dd>Instagram &middot; YouTube &middot; Facebook</dd>
              </div>
            </dl>

            <div className="contact-map">
              <iframe
                title="Lokasi Masjid Al-Manshur"
                src="https://www.google.com/maps?q=99Q4%2B8H8+Kebokura+Sumpiuh+Banyumas&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <p className="contact-form__success">
                Terima kasih — pesanmu sudah terkirim. InsyaAllah kami balas secepatnya.
              </p>
            ) : (
              <>
                <div className="contact-form__field">
                  <label htmlFor="name">Nama Lengkap</label>
                  <input id="name" name="name" type="text" required />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="subject">Perihal</label>
                  <input id="subject" name="subject" type="text" required />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="message">Pesan</label>
                  <textarea id="message" name="message" rows="5" required />
                </div>
                <button type="submit" className="btn btn-primary">Kirim Pesan</button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
