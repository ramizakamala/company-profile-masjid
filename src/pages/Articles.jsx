import ArticleCard from '../components/ArticleCard/ArticleCard';
import { articles } from '../data/mockData';

export default function Articles() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Articles & News</p>
          <h1 className="page-hero__title">Stories from the community.</h1>
          <p className="page-hero__desc">
            Updates on programs, reflections on faith, and news from around the Center.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="grid-3">
          {articles.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </section>
    </>
  );
}
