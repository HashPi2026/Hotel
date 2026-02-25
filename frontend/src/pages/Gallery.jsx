import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/27890859/pexels-photo-27890859.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Destin Beach Aerial View",
    category: "Beach"
  },
  {
    src: "https://images.unsplash.com/photo-1759264244726-adde4e4318fc?crop=entropy&cs=srgb&fm=jpg&w=800",
    alt: "King Room",
    category: "Rooms"
  },
  {
    src: "https://images.unsplash.com/photo-1763419161907-1e00b2f883c5?crop=entropy&cs=srgb&fm=jpg&w=800",
    alt: "Double Queen Room",
    category: "Rooms"
  },
  {
    src: "https://images.pexels.com/photos/9399911/pexels-photo-9399911.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Hotel Pool",
    category: "Pool"
  },
  {
    src: "https://images.pexels.com/photos/2833394/pexels-photo-2833394.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Beach Family Fun",
    category: "Beach"
  },
  {
    src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Hotel Exterior",
    category: "Exterior"
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?crop=entropy&cs=srgb&fm=jpg&w=800",
    alt: "ADA Accessible Room",
    category: "Rooms"
  },
  {
    src: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Sunset at Beach",
    category: "Beach"
  },
  {
    src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Pool Area",
    category: "Pool"
  },
  {
    src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Room Interior",
    category: "Rooms"
  },
  {
    src: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Beach Coastline",
    category: "Beach"
  },
  {
    src: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Hotel Building",
    category: "Exterior"
  }
];

const categories = ["All", "Rooms", "Beach", "Pool", "Exterior"];

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
          src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
