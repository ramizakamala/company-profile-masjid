import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import { leadership, timeline } from '../data/mockData';

const values = [
  { name: 'Faith', text: 'Every program begins with sincerity of purpose and grounding in Islamic principle.' },
  { name: 'Community', text: 'We build relationships across generations, backgrounds, and walks of life.' },
  { name: 'Knowledge', text: 'We treat learning as a lifelong pursuit, open to beginners and scholars alike.' },
  { name: 'Service', text: 'We measure our success by how well we serve our neighbors, not just our members.' },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">A community built over a decade of service.</h1>
          <p className="page-hero__desc">
            AL-Manshur Islamic Center exists to serve as a place of worship, learning, and
            belonging — open to anyone in the community, regardless of background.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="about-story">
          <div className="about-story__media">
            <img
              src="/images/mosque_exterior.jpg"
              alt="Halaman dan bangunan AL-Manshur Islamic Center"
            />
          </div>
          <div className="about-story__text">
            <p className="eyebrow">Our Story</p>
            <h2>From a small home gathering to a mosque of our own.</h2>
            <p>
              AL-Manshur began as a small group of neighbors holding regular study circles
              and prayers in one family&rsquo;s home. As more residents joined, the dream of
              a dedicated mosque took shape.
            </p>
            <p>
              Through collective effort and community donations, Masjid Al-Manshur was
              officially established in 2025 &mdash; and is now growing into a center for
              daily prayer, Qur&rsquo;an education, and mutual support for the neighborhood.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="about-mission">
            <div className="about-mission__card">
              <p className="eyebrow">Vision</p>
              <p className="about-mission__text">
                A community where faith, knowledge, and mutual care are accessible
                to every neighbor, regardless of background or circumstance.
              </p>
            </div>
            <div className="about-mission__card">
              <p className="eyebrow">Mission</p>
              <p className="about-mission__text">
                To provide a welcoming home for worship and learning, and to serve
                our neighbors through education, mentorship, and direct support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeader eyebrow="What Guides Us" title="Our values" />
        <div className="grid-4 about-values">
          {values.map((v) => (
            <div key={v.name} className="about-values__item">
              <h3>{v.name}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow="Our People" title="Leadership" />
          <div className="grid-4">
            {leadership.map((person) => (
              <div key={person.name} className="leader-card">
                <div className="leader-card__media">
                  <img src={person.image} alt={`Portrait of ${person.name}`} />
                </div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeader eyebrow="Our Journey" title="A decade of milestones" />
        <ol className="timeline">
          {timeline.map((item) => (
            <li key={item.year} className="timeline__item">
              <span className="timeline__year">{item.year}</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--deep about-cta">
        <div className="container about-cta__inner">
          <h2>Come see it for yourself.</h2>
          <p>We welcome visitors at any of our daily prayers or weekly programs.</p>
          <Link to="/contact" className="btn btn-gold">Plan Your Visit</Link>
        </div>
      </section>
    </>
  );
}
