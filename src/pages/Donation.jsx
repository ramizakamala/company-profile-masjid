import { useState } from 'react';
import { donationInfo } from '../data/mockData';
import './Donation.css';

// [DUMMY] nomor WhatsApp — ganti dengan nomor resmi pengurus
const WA_NUMBER = '6281234567890';

function groupDigits(num) {
  return num.replace(/(\d{4})(?=\d)/g, '$1 ');
}

export default function Donation() {
  const [copied, setCopied] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState('100.000');

  const amounts = ['50.000', '100.000', '250.000', '500.000', '1.000.000'];
  const { bank, qris } = donationInfo;

  const handleCopy = () => {
    if (!bank) return;
    navigator.clipboard.writeText(bank.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Donasi &amp; Infaq</p>
          <h1 className="page-hero__title">Mari menebar kebaikan dari Al-Manshur.</h1>
          <p className="page-hero__desc">
            Donasi dan infaq Anda mendukung pendidikan Al-Qur&rsquo;an, kegiatan ibadah,
            serta program sosial untuk warga sekitar masjid.
          </p>
        </div>
      </section>

      <section className="section container">
        {/* Pilih nominal */}
        <div className="donation-amount-section">
          <h2 className="donation-amount__title">Pilih Nominal Infaq / Sedekah</h2>
          <div className="donation-amount__grid">
            {amounts.map((amt) => (
              <button
                key={amt}
                className={`donation-amount__pill ${
                  selectedAmount === amt ? 'donation-amount__pill--active' : ''
                }`}
                onClick={() => setSelectedAmount(amt)}
              >
                Rp {amt}
              </button>
            ))}
          </div>
        </div>

        <div className="donation-grid">
          {/* Transfer Bank — muncul hanya jika data resmi sudah diisi */}
          <div className="donation-card donation-card--bank">
            <div className="donation-card__badge">Transfer Bank</div>
            {bank ? (
              <>
                <h3>{bank.name}</h3>
                <dl className="donation-card__dl">
                  <div>
                    <dt>Nama Rekening</dt>
                    <dd className="donation-card__acc-name">{bank.accountName}</dd>
                  </div>
                  <div>
                    <dt>Nomor Rekening</dt>
                    <dd className="donation-card__acc-num">
                      <span>{groupDigits(bank.accountNumber)}</span>
                      <button
                        onClick={handleCopy}
                        className={`donation-card__copy-btn ${copied ? 'copied' : ''}`}
                        title="Salin Nomor Rekening"
                      >
                        {copied ? 'Disalin!' : 'Salin'}
                      </button>
                    </dd>
                  </div>
                  <div>
                    <dt>Nominal</dt>
                    <dd>
                      <strong>Rp {selectedAmount}</strong>
                    </dd>
                  </div>
                </dl>
              </>
            ) : (
              <div className="donation-card__soon">
                <h3>Rekening resmi menyusul</h3>
                <p>
                  Nomor rekening masjid sedang disiapkan pengurus. Untuk donasi sekarang,
                  hubungi kami lewat WhatsApp — tim kami akan mengarahkan.
                </p>
              </div>
            )}
          </div>

          {/* QRIS — muncul hanya jika foto QRIS resmi tersedia */}
          <div className="donation-card donation-card--qris">
            <div className="donation-card__badge donation-card__badge--qris">QRIS</div>
            <h3>Pembayaran QRIS</h3>
            {qris ? (
              <>
                <p>
                  Scan menggunakan Mobile Banking atau E-Wallet (GoPay, OVO, ShopeePay, DANA).
                </p>
                <div className="donation-card__qris-box">
                  <img className="donation-card__qris-img" src={qris} alt="QRIS Al-Manshur" />
                  <p className="qris-merchant">Al-Manshur Islamic Center</p>
                </div>
              </>
            ) : (
              <div className="donation-card__soon">
                <h3>QRIS menyusul</h3>
                <p>
                  Foto QRIS resmi belum diterima dari pengurus. Setelah tersedia, pembayaran
                  bisa langsung scan di sini.
                </p>
              </div>
            )}
          </div>

          {/* Konfirmasi */}
          <div className="donation-card donation-card--confirm">
            <div className="donation-card__badge">Konfirmasi</div>
            <h3>Konfirmasi Donasi</h3>
            <p>
              Setelah transfer atau scan QRIS, kirim bukti pembayaran melalui WhatsApp agar
              tercatat dalam laporan pertanggungjawaban donasi.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                `Assalamu'alaikum, saya ingin konfirmasi donasi sebesar Rp ${selectedAmount} untuk Masjid Al-Manshur.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary donation-confirm-btn"
            >
              Konfirmasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <p className="eyebrow">Penggunaan Infaq</p>
          <h2 className="donation-campaigns__title">Kemana infaq Anda disalurkan</h2>
          <div className="grid-3">
            <div className="campaign-card">
              <span className="campaign-badge">Pendidikan</span>
              <h3>TPA, Tahfidz &amp; Kajian</h3>
              <p>Operasional pengajaran Al-Qur&rsquo;an anak-anak dan kajian rutin jamaah.</p>
            </div>
            <div className="campaign-card">
              <span className="campaign-badge">Sosial</span>
              <h3>Santunan &amp; Bantuan Warga</h3>
              <p>Santunan dan bantuan pangan untuk keluarga prasejahtera di sekitar masjid.</p>
            </div>
            <div className="campaign-card">
              <span className="campaign-badge">Operasional</span>
              <h3>Pemeliharaan Masjid</h3>
              <p>Perawatan bangunan, kebersihan, dan kebutuhan harian masjid.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
