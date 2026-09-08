import './LocationSection.css';

export default function LocationSection() {
  return (
    <section className="location">
      <div className="container location__inner">
        <div className="location__info">
          <p className="eyebrow">Kunjungi Kami</p>
          <h2 className="location__title">Datang dan rasakan sendiri.</h2>

          <dl className="location__list">
            <div>
              <dt>Alamat</dt>
              <dd>99Q4+8H8, Gampingan, Kebokura, Kec. Sumpiuh, Kabupaten Banyumas, Jawa Tengah 53195, Indonesia</dd>
            </div>
            <div>
              <dt>Aktivitas Harian</dt>
              <dd>Buka setiap hari 04.30 – 21.30 untuk sholat berjamaah dan kegiatan</dd>
            </div>
            <div>
              <dt>Kontak</dt>
              <dd>
                +62 812 3456 7890
                <br />
                halo@almanshur.org
              </dd>
            </div>
            <div>
              <dt>Sosial</dt>
              <dd>Instagram &middot; YouTube &middot; Facebook</dd>
            </div>
          </dl>

          <a
            className="btn btn-primary location__cta"
            href="https://maps.google.com/?q=99Q4%2B8H8,+Gampingan,+Kebokura,+Kec.+Sumpiuh,+Kabupaten+Banyumas,+Jawa+Tengah+53195"
            target="_blank"
            rel="noreferrer"
          >
            Buka di Google Maps
          </a>
        </div>

        <div className="location__map">
          <iframe
            title="Lokasi Masjid Al-Manshur"
            src="https://www.google.com/maps?q=99Q4%2B8H8+Kebokura+Sumpiuh+Banyumas&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
