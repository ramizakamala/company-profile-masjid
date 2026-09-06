import { useState } from 'react';
import './Donation.css';

export default function Donation() {
  const [copied, setCopied] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState('100.000');
  const accountNumber = '7123456789';
  const displayAccount = '7123 456 789';

  const amounts = ['50.000', '100.000', '250.000', '500.000', '1.000.000'];

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Donation & Infaq</p>
          <h1 className="page-hero__title">Help us build a stronger community.</h1>
          <p className="page-hero__desc">
            Dukungan dan infaq Anda mendukung program pendidikan, dakwah,
            sosial kemasyarakatan, serta operasional AL-Manshur Islamic Center.
          </p>
        </div>
      </section>

      <section className="section container">
        {/* Donation Amount Selector */}
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
          {/* Bank Transfer Card */}
          <div className="donation-card donation-card--bank">
            <div className="donation-card__badge">Bank Transfer</div>
            <h3>Bank Syariah Indonesia (BSI)</h3>

            <dl className="donation-card__dl">
              <div>
                <dt>Nama Rekening</dt>
                <dd className="donation-card__acc-name">Yayasan AL-Manshur Islamic Center</dd>
              </div>
              <div>
                <dt>Nomor Rekening</dt>
                <dd className="donation-card__acc-num">
                  <span>{displayAccount}</span>
                  <button
                    onClick={handleCopy}
                    className={`donation-card__copy-btn ${copied ? 'copied' : ''}`}
                    title="Salin Nomor Rekening"
                  >
                    {copied ? (
                      <>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        Disalin!
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                        Salin Rekening
                      </>
                    )}
                  </button>
                </dd>
              </div>
              {selectedAmount && (
                <div className="donation-card__intent">
                  <dt>Nominal Terpilih</dt>
                  <dd><strong>Rp {selectedAmount}</strong></dd>
                </div>
              )}
            </dl>
          </div>

          {/* QRIS Card */}
          <div className="donation-card donation-card--qris">
            <div className="donation-card__badge donation-card__badge--qris">QRIS Instant</div>
            <h3>Pembayaran QRIS</h3>
            <p>Scan menggunakan Mobile Banking (BSI, BCA, Mandiri) atau E-Wallet (GoPay, OVO, ShopeePay, Dana).</p>

            <div className="donation-card__qris-box">
              <div className="qris-header">
                <span className="qris-logo">QRIS</span>
                <span className="qris-sub">GPN</span>
              </div>
              <div className="qris-code-container">
                <svg
                  viewBox="0 0 100 100"
                  className="qris-svg"
                  aria-label="Kode QRIS AL-Manshur Islamic Center"
                >
                  <rect width="100" height="100" fill="#FFFFFF" />
                  {/* Outer corner 1 */}
                  <rect x="5" y="5" width="26" height="26" fill="#1b4332" />
                  <rect x="9" y="9" width="18" height="18" fill="#FFFFFF" />
                  <rect x="13" y="13" width="10" height="10" fill="#1b4332" />

                  {/* Outer corner 2 */}
                  <rect x="69" y="5" width="26" height="26" fill="#1b4332" />
                  <rect x="73" y="9" width="18" height="18" fill="#FFFFFF" />
                  <rect x="77" y="13" width="10" height="10" fill="#1b4332" />

                  {/* Outer corner 3 */}
                  <rect x="5" y="69" width="26" height="26" fill="#1b4332" />
                  <rect x="9" y="73" width="18" height="18" fill="#FFFFFF" />
                  <rect x="13" y="77" width="10" height="10" fill="#1b4332" />

                  {/* Random QR Grid Dots */}
                  <rect x="36" y="5" width="6" height="6" fill="#1b4332" />
                  <rect x="46" y="11" width="12" height="6" fill="#1b4332" />
                  <rect x="36" y="21" width="6" height="10" fill="#1b4332" />
                  <rect x="48" y="21" width="10" height="6" fill="#1b4332" />

                  <rect x="10" y="36" width="6" height="12" fill="#1b4332" />
                  <rect x="20" y="42" width="12" height="6" fill="#1b4332" />
                  <rect x="36" y="36" width="14" height="14" fill="#1b4332" />
                  <rect x="54" y="36" width="8" height="8" fill="#1b4332" />

                  <rect x="68" y="36" width="12" height="6" fill="#1b4332" />
                  <rect x="84" y="42" width="10" height="12" fill="#1b4332" />
                  <rect x="68" y="52" width="6" height="12" fill="#1b4332" />

                  <rect x="36" y="68" width="8" height="16" fill="#1b4332" />
                  <rect x="48" y="76" width="14" height="8" fill="#1b4332" />
                  <rect x="68" y="68" width="16" height="8" fill="#1b4332" />
                  <rect x="76" y="80" width="18" height="14" fill="#1b4332" />

                  {/* Center Emblem */}
                  <rect x="42" y="42" width="16" height="16" fill="#d4a359" rx="3" />
                  <text x="50" y="53" fontSize="8" fill="#1b4332" textAnchor="middle" fontWeight="bold">🕌</text>
                </svg>
              </div>
              <p className="qris-merchant">NMK: YAYASAN AL MANSHUR</p>
            </div>
          </div>

          {/* Confirm Card */}
          <div className="donation-card donation-card--confirm">
            <div className="donation-card__badge">Konfirmasi</div>
            <h3>Konfirmasi Donasi</h3>
            <p>
              Setelah melakukan transfer/QRIS, Anda dapat mengirimkan bukti transfer
              agar tercatat dalam laporan pertanggungjawaban donasi.
            </p>
            <a
              href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                `Assalamu'alaikum, saya ingin konfirmasi donasi sebesar Rp ${selectedAmount} untuk AL-Manshur Islamic Center.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary donation-confirm-btn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              Konfirmasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <p className="eyebrow">Penggunaan Infaq</p>
          <h2 className="donation-campaigns__title">Program Alokasi Infaq</h2>
          <div className="grid-3">
            <div className="campaign-card">
              <span className="campaign-badge">Pendidikan</span>
              <h3>Pengembangan Learning Center</h3>
              <p>Pengadaan sarana belajar, kitab, dan operasional Sekolah Arabic & Tahfidz anak-anak.</p>
            </div>
            <div className="campaign-card">
              <span className="campaign-badge">Sosial</span>
              <h3>Lumbung Pangan Jamaah</h3>
              <p>Bantuan paket sembako bulanan untuk keluarga prasejahtera di sekitar Sumpiuh.</p>
            </div>
            <div className="campaign-card">
              <span className="campaign-badge">Operasional</span>
              <h3>Pemeliharaan Sarana Masjid</h3>
              <p>Perawatan karpet, kebersihan, pendingin ruangan, dan utilitas listrik harian masjid.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
