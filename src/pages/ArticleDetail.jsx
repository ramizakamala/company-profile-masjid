import { Link, useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import { articles } from '../data/mockData';
import NotFound from './NotFound';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) return <NotFound />;

  const date = new Date(article.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <>
      <div className="detail-hero">
        <img src={article.image} alt="" />
      </div>
      <section className="section container">
        <div className="detail-content">
          <Link to="/articles" className="back-link">&larr; Back to Articles</Link>
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="article-detail__byline">By {article.author} \u00b7 {date}</p>

          {article.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <p className="eyebrow">Related Articles</p>
            <h2 className="article-detail__related-title">Keep reading</h2>
            <div className="grid-3">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
