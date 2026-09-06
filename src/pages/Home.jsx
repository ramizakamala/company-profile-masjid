import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import PrayerTimes from '../components/PrayerTimes/PrayerTimes';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import ProgramCard from '../components/ProgramCard/ProgramCard';
import EventCard from '../components/EventCard/EventCard';
import StatBlock from '../components/StatBlock/StatBlock';
import DonationCTA from '../components/DonationCTA/DonationCTA';
import LocationSection from '../components/LocationSection/LocationSection';
import { programs, events, stats, prayerTimes, galleryItems } from '../data/mockData';

export default function Home() {
  const featuredPrograms = programs.slice(0, 4);
  const upcomingEvents = events.slice(0, 3);
  const previewImages = galleryItems.slice(0, 6);

  return (
    <>
      <Hero />
      <PrayerTimes times={prayerTimes} />

      <section className="section container">
        <div className="about-preview">
          <div className="about-preview__text">
            <p className="eyebrow">About AL-Manshur</p>
            <h2 className="about-preview__title">
              Founded in 2014, built by and for our neighbors.
            </h2>
            <p>
              AL-Manshur began as a handful of families praying together in a rented
              room. Today it is a home for worship, learning, and mutual support for
              families across the city — guided by faith, and open to anyone who
              wants to take part.
            </p>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
          <div className="about-preview__fact">
            <p className="about-preview__year">2014</p>
            <p>Year founded</p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow="What We Offer"
            title="Programs for every stage of life"
            description="Education, community, youth, and social programs run by volunteers and staff throughout the week."
            ctaLabel="Explore Programs"
            ctaTo="/programs"
          />
          <div className="grid-4">
            {featuredPrograms.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What's Coming Up"
            title="Upcoming events"
            ctaLabel="View All Events"
            ctaTo="/events"
          />
          <div className="grid-3">
            {upcomingEvents.map((e) => (
              <EventCard key={e.id} event={e} linkTo={`/events/${e.id}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <p className="eyebrow">Our Impact</p>
          <h2 className="impact__title">A community, growing together.</h2>
          <StatBlock stats={stats} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Documentation"
            title="From our community"
            ctaLabel="View Gallery"
            ctaTo="/gallery"
          />
          <div className="home-gallery">
            {previewImages.map((item, idx) => (
              <Link
                to="/gallery"
                key={item.id}
                className={`home-gallery__item home-gallery__item--${idx}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DonationCTA />

      <section className="section">
        <LocationSection />
      </section>
    </>
  );
}
