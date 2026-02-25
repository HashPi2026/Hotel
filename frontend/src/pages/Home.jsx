import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import image1 from "../photo/MOTEL SIGN.jpg";
import image2 from "../photo/MOTEL EXTERIOR 2.jpg";
import image3 from "../photo/POOL 1.jpg"
import { ChevronLeft, ChevronRight, MapPin, Star, Users, Ban, Waves, Car, Wifi, Coffee, Shield, ArrowRight } from "lucide-react";

const heroSlides = [
  {
    image: image1,
    title: "Relax & Stay Near the White Sands of Destin",
    subtitle: "Your perfect Florida beach getaway awaits"
  },
  {
    image: image2,
    title: "Experience the Emerald Coast",
    subtitle: "Crystal clear waters just minutes away"
  },
  {
    image: image3,
    title: "Unwind by the Pool",
    subtitle: "Relax and refresh at our outdoor pool"
  }
];

const highlights = [
  { icon: MapPin, title: "Prime Location", desc: "Minutes from Destin's famous white sand beaches" },
  { icon: Star, title: "Top Rated", desc: "Consistently rated excellent by our guests" },
  { icon: Users, title: "Family Friendly", desc: "Perfect for families and couples alike" },
  { icon: Shield, title: "Clean & Safe", desc: "Enhanced cleaning protocols for your safety" }
];

const amenities = [
  { icon: Ban, name: "Non-Smoking Rooms"},
  { icon: Waves, name: "Outdoor Pool" },
  { icon: Wifi, name: "Free WiFi" },
  { icon: Car, name: "Free Parking" },
  { icon: Coffee, name: "Breakfast" }
];

const rooms = [
  {
    id: "king",
    name: "Non Smoking King",
    image: "https://images.unsplash.com/photo-1759264244726-adde4e4318fc?crop=entropy&cs=srgb&fm=jpg&w=600"
  },
  {
    id: "queens",
    name: "Non Smoking 2 Queens",
    image: "https://images.unsplash.com/photo-1763419161907-1e00b2f883c5?crop=entropy&cs=srgb&fm=jpg&w=600"
  },
  {
    id: "ada",
    name: "Non Smoking King - ADA",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?crop=entropy&cs=srgb&fm=jpg&w=600"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div data-testid="home-page">
      <Helmet>
        <title>Destine Inn & Suites - Beach Hotel in Destin, FL</title>
        <meta name="description" content="Welcome to Destine Inn & Suites, your gateway to the white sand beaches of Destin, Florida. Book your beach getaway today!" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section relative h-[90vh] overflow-hidden" data-testid="hero-section">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="hero-overlay absolute inset-0"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 text-center text-white">
            <p className="font-accent text-2xl md:text-3xl text-accent mb-4 animate-fade-in-up">Welcome to</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto animate-fade-in-up">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link to="/booking" data-testid="hero-book-now">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Book Now
                </Button>
              </Link>
              <Link to="/rooms" data-testid="hero-view-rooms">
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary rounded-full px-10 py-6 text-lg font-medium transition-all duration-300">
                  View Rooms
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300"
          data-testid="hero-prev"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300"
          data-testid="hero-next"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              data-testid={`hero-dot-${index}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Amenities Bar */}
      <section className="bg-secondary py-6 border-b border-gray-100" data-testid="amenities-bar">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3">
                <amenity.icon className="w-6 h-6 text-primary" />
                <span className="text-gray-700 font-medium">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 md:py-24 bg-white" data-testid="home-rooms-section">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              ROOMS
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                data-testid={`home-room-${room.id}`}
              >
                {/* Room Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500"></div>
                </div>

                {/* Room Content */}
                <div className="p-6 text-center bg-white">
                  {/* Room Name */}
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-5">
                    {room.name}
                  </h3>

                  {/* Action Buttons */}
                  <div className="flex gap-3 justify-center">
                    <Link 
                      to="/rooms"
                      data-testid={`home-read-more-${room.id}`}
                    >
                      <Button 
                        variant="outline" 
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-md px-6 py-2.5 font-medium transition-all duration-300"
                      >
                        Read More
                      </Button>
                    </Link>
                    <Link 
                      to={`/booking?room=${room.id}`}
                      data-testid={`home-book-${room.id}`}
                    >
                      <Button className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-2.5 font-medium shadow-md hover:shadow-lg transition-all duration-300">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Link to="/rooms" data-testid="home-view-more-rooms">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-md px-10 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                View More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 md:py-28" data-testid="highlights-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-accent text-xl text-accent mb-3">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-gray-900">
              Your Home Away From Home
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-secondary/50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
                data-testid={`highlight-${index}`}
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beach Divider */}
      {/* <section className="relative h-64 md:h-80 overflow-hidden" data-testid="beach-divider">
        <img
          src="https://images.pexels.com/photos/2833394/pexels-photo-2833394.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Destin Beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white drop-shadow-lg">
            <p className="font-accent text-2xl md:text-3xl mb-2">Experience</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">The Emerald Coast</h2>
          </div>
        </div>
      </section> */}

      {/* Location Section */}
      <section className="py-20 md:py-28 bg-white" data-testid="location-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-accent text-xl text-accent mb-3">Our Location</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Steps Away from Paradise
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Steps Away from Destin’s Best Beaches & Attractions Located in the heart of Destin, Florida, Destin Inn & Suites offers a convenient and comfortable stay just minutes from the area’s famous white sand beaches along the Emerald Coast. Our central location makes it easy to explore Destin’s top attractions while enjoying a quiet, relaxing place to unwind.Whether you’re visiting for a beach getaway, shopping, or dining, you’ll appreciate being close to everything Destin has to offer — without the stress of long drives or crowded resort areas.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-gray-700">5 minutes to Henderson Beach State Park</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-gray-700">10 minutes to Destin Commons Shopping</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-gray-700">Walking distance to restaurants</span>
                </li>
              </ul>
              
            </div>

            {/* Map Preview */}
            <div className="rounded-2xl overflow-hidden shadow-xl" data-testid="map-preview">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.5!2d-86.48861883619288!3d30.391743265658718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIzJzMwLjMiTiA4NsKwMjknMTkuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Destine Inn Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 md:py-28 bg-secondary" data-testid="trust-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-accent text-xl text-accent mb-3">Guest Reviews</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              What Our Guests Say
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "Perfect location for our family beach vacation! Clean rooms, friendly staff, and just minutes from the beautiful white sand beaches. We'll definitely be back!"
              </blockquote>
              <p className="font-medium text-gray-900">— Sarah M., Texas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-white" data-testid="cta-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Ready for Your Beach Getaway?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Book your stay today and experience the best of Destin, Florida
          </p>
          <Link to="/booking" data-testid="cta-book-now">
            <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-12 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Book Your Stay
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
