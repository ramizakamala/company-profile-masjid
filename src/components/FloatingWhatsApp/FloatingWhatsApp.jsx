import { useState } from 'react';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const phoneNumber = '6281234567890';
  const defaultMessage = encodeURIComponent(
    "Assalamu'alaikum Pengurus AL-Manshur Islamic Center, saya ingin bertanya info mengenai program / jadwal..."
  );

  return (
    <div className="whatsapp-widget">
      {open && (
        <div className="whatsapp-widget__popover">
          <div className="whatsapp-widget__header">
            <div className="whatsapp-widget__avatar">
              <span className="whatsapp-widget__online-dot" />
              🕌
            </div>
            <div>
              <p className="whatsapp-widget__title">Pengurus AL-Manshur</p>
              <p className="whatsapp-widget__status">Online • Siap Membantu</p>
            </div>
            <button
              className="whatsapp-widget__close"
              onClick={() => setOpen(false)}
              aria-label="Tutup chat"
            >
              &times;
            </button>
          </div>
          <div className="whatsapp-widget__body">
            <div className="whatsapp-widget__msg">
              Assalamu&apos;alaikum! 👋 Ada yang bisa kami bantu mengenai kegiatan,
              jadwal sholat, atau infaq di AL-Manshur Islamic Center?
            </div>
          </div>
          <div className="whatsapp-widget__footer">
            <a
              href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-widget__btn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.428 2.5 1.157 3.473l-.76 2.775 2.846-.747a5.737 5.737 0 002.525.592h.003c3.179 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.768-5.771-5.768zm0-2c4.285 0 7.768 3.483 7.768 7.768 0 4.286-3.483 7.768-7.768 7.768-1.391 0-2.693-.368-3.818-1.01l-4.213 1.106 1.127-4.116C4.42 14.544 4 13.176 4 11.94 4 7.655 7.483 4.172 11.768 4.172h.263z" />
              </svg>
              Mulai Chat via WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        className="whatsapp-widget__trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Tanya via WhatsApp"
        title="Hubungi Pengurus via WhatsApp"
      >
        <span className="whatsapp-widget__pulse" />
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      </button>
    </div>
  );
}
