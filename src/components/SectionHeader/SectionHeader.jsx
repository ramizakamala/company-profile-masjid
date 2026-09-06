import { Link } from 'react-router-dom';
import './SectionHeader.css';

export default function SectionHeader({ eyebrow, title, description, ctaLabel, ctaTo, align = 'left' }) {
  return (
    <div className={`section-header section-header--${align}`}>
      <div className="section-header__text">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-header__title">{title}</h2>
        {description && <p className="section-header__desc">{description}</p>}
      </div>
      {ctaLabel && ctaTo && (
        <Link to={ctaTo} className="btn btn-outline section-header__cta">
          {ctaLabel}
        </Link>
      )}
    </div>
  );
}
