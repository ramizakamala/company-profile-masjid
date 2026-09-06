import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container not-found">
      <p className="eyebrow">404</p>
      <h1>We couldn\u2019t find that page.</h1>
      <p style={{ margin: '1rem auto 2rem', color: 'var(--color-ink-soft)' }}>
        The page you\u2019re looking for may have moved or no longer exists.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
