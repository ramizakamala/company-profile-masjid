import GalleryGrid from '../components/GalleryGrid/GalleryGrid';
import { galleryItems } from '../data/mockData';

export default function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1 className="page-hero__title">Moments from our community.</h1>
          <p className="page-hero__desc">
            A running record of programs, events, and everyday life at the Center.
          </p>
        </div>
      </section>

      <section className="section container">
        <GalleryGrid items={galleryItems} showFilter />
      </section>
    </>
  );
}
