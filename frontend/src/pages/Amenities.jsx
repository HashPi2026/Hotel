import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { 
  Wifi, 
  Car, 
  Waves, 
  Users, 
  Wind, 
  Ban, 
  Tv, 
  Coffee,
  Snowflake,
  Phone,
  Shield,
  Clock
} from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    name: "Free WiFi",
    description: "High-speed wireless internet access throughout the property"
  },
  {
    icon: Car,
    name: "Free Parking",
    description: "Complimentary on-site parking for all registered guests"
  },
  {
    icon: Waves,
    name: "Outdoor Pool",
    description: "Refreshing seasonal pool for guests to enjoy"
  },
  {
    icon: Users,
    name: "Family Friendly",
    description: "Welcoming environment for families with children of all ages"
  },
  {
    icon: Snowflake,
    name: "Air Conditioning",
    description: "Individual climate control in every room"
  },
  {
    icon: Ban,
    name: "Non-Smoking Rooms",
    description: "All rooms are 100% smoke-free for your comfort"
  },
  {
    icon: Tv,
    name: "Flat-Screen TV",
    description: "Cable TV with premium channels in every room"
  },
  {
    icon: Coffee,
    name: "Coffee Maker",
    description: "In-room coffee maker with complimentary coffee and tea"
  },
  {
    icon: Wind,
    name: "Mini Fridge",
    description: "Compact refrigerator to keep your beverages cool"
  },
  {
    icon: Phone,
    name: "Direct Dial Phone",
    description: "Local and long-distance calling available"
  },
  {
    icon: Shield,
    name: "Safe & Secure",
    description: "24-hour security and electronic door locks"
  },
  {
    icon: Clock,
    name: "24/7 Front Desk",
    description: "Friendly staff available around the clock"
  }
];

export default function Amenities() {
  return (
    <div data-testid="amenities-page">
      <Helmet>
        <title>Amenities | Destine Inn & Suites - Destin, FL</title>
        <meta name="description" content="Discover amenities at Destine Inn & Suites - free WiFi, parking, outdoor pool, and more. Everything you need for a comfortable stay in Destin." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden" data-testid="amenities-hero">
        <img
          src="https://images.pexels.com/photos/9399911/pexels-photo-9399911.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Amenities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="font-accent text-2xl text-accent mb-2">What We Offer</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold">Our Amenities</h1>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We've thought of everything to make your stay comfortable and convenient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="amenity-card bg-secondary/50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                data-testid={`amenity-${index}`}
              >
                <div className="amenity-icon mb-4">
                  <amenity.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {amenity.name}
                </h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pool Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="img-zoom rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hotel Pool"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <p className="font-accent text-xl text-accent mb-3">Relax & Refresh</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Our Outdoor Pool
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Take a refreshing dip in our sparkling outdoor pool, the perfect place to cool off after a day at the beach. Our well-maintained pool area offers comfortable lounge chairs and a relaxing atmosphere.
                </p>
                <p>
                  The pool is open seasonally from spring through fall, giving you a great way to start your morning or unwind in the evening. It's a favorite spot for families and couples alike.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 inline-block">
                <p className="text-sm text-gray-600">
                  <strong>Pool Hours:</strong> 8:00 AM - 10:00 PM (Seasonal)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Features */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-accent text-xl text-accent mb-3">In Every Room</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900">
              Room Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1759264244726-adde4e4318fc?crop=entropy&cs=srgb&fm=jpg&w=600"
                alt="Comfortable Beds"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                  Comfortable Beds
                </h3>
                <p className="text-gray-600">
                  Premium mattresses and quality linens ensure a restful night's sleep
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Modern Amenities"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                  Modern Conveniences
                </h3>
                <p className="text-gray-600">
                  Microwave, mini-fridge, and coffee maker in every room
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Clean Spaces"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                  Spotless Cleanliness
                </h3>
                <p className="text-gray-600">
                  Enhanced cleaning protocols for your peace of mind
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Experience Our Hospitality
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Book your room and enjoy all our amenities
          </p>
          <Link to="/booking" data-testid="amenities-book-now">
            <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-medium shadow-lg">
              Book Your Stay
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
