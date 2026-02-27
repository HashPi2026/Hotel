import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import exterior1 from "../photo/MOTEL SIGN.jpg";
import exterior2 from "../photo/MOTEL EXTERIOR 1.jpg";
import exterior3 from "../photo/MOTEL EXTERIOR 2.jpg";
import exterior4 from "../photo/FRONT OFFICE.jpg";
import exterior5 from "../photo/FRONT OFFICE INTERIOR 1.jpg";
import exterior6 from "../photo/FRONT OFFICE INTERIOR 2.jpg";
import exterior7 from "../photo/2ND FLOOR LOBBY.jpg";
import king1 from "../photo/KING 1.jpg";
import king2 from "../photo/KING 2.jpg";
import king3 from "../photo/KING 3.jpg";
import king4 from "../photo/KING 4.jpg";
import king5 from "../photo/KING 5.jpg";
import queen1 from "../photo/QUEEN 1.jpg";
import queen2 from "../photo/QUEEN 2.jpg";
import suite1 from "../photo/SUITE 1.jpg";
import suite2 from "../photo/SUITE 2.jpg";
import suite3 from "../photo/SUITE 3.jpg";
import suite4 from "../photo/SUITE 4.jpg";
import suite5 from "../photo/SUITE 5.jpg";
import Interior1 from "../photo/SINK MIRROR.jpg";
import Interior2 from "../photo/COFFEE.jpg";
import Interior3 from "../photo/SHOWER.jpg";
import pool1 from "../photo/POOL 1.jpg";
import pool2 from "../photo/POOL 2.jpg";
import pool3 from "../photo/POOL 3.jpg";
import pool4 from "../photo/POOL 4.jpg";
import parking1 from "../photo/PARKING ROOM VIEW.jpg";
import parking2 from "../photo/POOL & PARKING VIEW.jpg";
import dryer from "../photo/ICE, WASHING & DRYER.jpg";
const galleryImages = [
    {
    src: exterior1,
    alt: "Destine Inn & Suites",
    category: "Exterior"
  },
  {
    src: exterior2,
    alt: "Destine Inn & Suites",
    category: "Exterior"
  },
  {
    src: exterior3,
    alt: "Destine Inn & Suites",
    category: "Exterior"
  },
    {
    src: exterior4,
    alt: "Destine Inn & Suites Office",
    category: "Exterior"
  },
      {
    src: exterior5,
    alt: "Destine Inn & Suites Office",
    category: "Exterior"
  },
  {
    src: exterior6,
    alt: "Destine Inn & Suites Office",
    category: "Exterior"
  },
  {
    src: exterior7,
    alt: "Destine Inn & Suites Lobby",
    category: "Exterior"
  },
  {
    src: king1,
    alt: "King Room",
    category: "Rooms"
  },
    {
    src: king2,
    alt: "King Room",
    category: "Rooms"
  },
    {
    src: king3,
    alt: "King Room Interior",
    category: "Rooms"
  },
    {
    src: king4,
    alt: "King Room",
    category: "Rooms"
  },
    {
    src: king5,
    alt: "King Room",
    category: "Rooms"
  },
  {
    src: queen1,
    alt: "Double Queen Room",
    category: "Rooms"
  },
  {
    src: queen2,
    alt: "Double Queen Room",
    category: "Rooms"
  },
  {
    src: suite5,
    alt: "Suite",
    category: "Rooms"
  },
  {
    src: suite4,
    alt: "Suite",
    category: "Rooms"
  },
  {
    src: suite3,
    alt: "Suite Interior",
    category: "Rooms"
  },
  {
    src: suite2,
    alt: "Suite Interior",
    category: "Rooms"
  },
  {
    src: Interior2,
    alt: "Room Interior",
    category: "Rooms"
  },
  {
    src: suite1,
    alt: "Suite",
    category: "Rooms"
  },
  {
    src: Interior1,
    alt: "Room Interior",
    category: "Rooms"
  },
    {
    src: Interior3,
    alt: "Room Interior",
    category: "Rooms"
  },
  {
    src: dryer,
    alt: "Washing & dryer",
    category: "Rooms"
  },
  {
    src: pool1,
    alt: "Pool Area",
    category: "Pool"
  },

  {
    src: pool2,
    alt: "Pool Area",
    category: "Pool"
  },
  {
    src: pool3,
    alt: "Pool Area",
    category: "Pool"
  },
  {
    src: pool4,
    alt: "Pool Area",
    category: "Pool"
  },
    {
    src: parking1,
    alt: "Parking Area",
    category: "Parking"
  },
  {
    src: parking2,
    alt: "parking Area",
    category: "Parking"
  }

];

const categories = ["All", "Rooms", "Pool","Parking","Exterior"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div data-testid="gallery-page">
      <Helmet>
        <title>Photo Gallery | Destine Inn & Suites - Destin, FL</title>
        <meta name="description" content="View photos of Destine Inn & Suites - our rooms, pool, beach views, and hotel exterior. See why guests love our Destin, Florida hotel." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden" data-testid="gallery-hero">
        <img
          src={exterior3}
          alt="Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="font-accent text-2xl text-accent mb-2">Explore</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold">Our Gallery</h1>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" data-testid="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-secondary text-gray-700 hover:bg-gray-200"
                }`}
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid" data-testid="gallery-grid">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="img-zoom rounded-xl overflow-hidden shadow-md cursor-pointer group"
                onClick={() => openLightbox(index)}
                data-testid={`gallery-image-${index}`}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          data-testid="lightbox"
        >
          <button
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
            data-testid="lightbox-close"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            data-testid="lightbox-prev"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            data-testid="lightbox-next"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl max-h-[80vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {filteredImages[lightboxIndex].alt}
            </p>
            <p className="text-white/60 text-center text-sm mt-1">
              {lightboxIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
