import { Link } from 'react-router-dom';
import './ArticleCard.css';

export default function ArticleCard({ article }) {
  const date = new Date(article.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link to={`/articles/${article.id}`} className="article-card">
      <div className="article-card__media">
        <img src={article.image} alt="" />
      </div>
      <p className="article-card__meta">{article.category} · {date}</p>
      <h3 className="article-card__title">{article.title}</h3>
      <p className="article-card__excerpt">{article.excerpt}</p>
    </Link>
  );
}
