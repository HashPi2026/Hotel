import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import king from "../photo/KING 4.jpg";
import queen from "../photo/QUEEN 2.jpg";
import suite from "../photo/SUITE 5.jpg";
import { Users, Bed, Check, Maximize } from "lucide-react";

const rooms = [
  {
    id: "king",
    name: "Non-Smoking King",
    image: king,
    description: "Spacious room featuring one king-size bed, perfect for couples seeking comfort and relaxation.",
    price: 99,
    capacity: 2,
    beds: "1 King Bed",
    size: "320 sq ft",
    amenities: ["Free WiFi", "Flat-screen TV", "Mini Fridge", "Coffee Maker", "Microwave", "Air Conditioning"]
  },
  {
    id: "queens",
    name: "Non-Smoking 2 Queens",
    image: queen,
    description: "Ideal for families or groups, this room offers two comfortable queen-size beds.",
    price: 119,
    capacity: 4,
    beds: "2 Queen Beds",
    size: "380 sq ft",
    amenities: ["Free WiFi", "Flat-screen TV", "Mini Fridge", "Coffee Maker", "Microwave", "Air Conditioning"]
  },
  {
    id: "ada",
    name: "ADA Accessible Room",
    image: suite,
    description: "Fully accessible room with mobility features, roll-in shower, and grab bars for guest comfort.",
    price: 109,
    capacity: 2,
    beds: "1 King Bed",
    size: "340 sq ft",
    amenities: ["ADA Accessible", "Roll-in Shower", "Grab Bars", "Free WiFi", "Flat-screen TV", "Mini Fridge"]
  }
];

export default function Rooms() {
  return (
    <div data-testid="rooms-page">
      <Helmet>
        <title>Rooms & Suites | Destine Inn & Suites - Destin, FL</title>
        <meta name="description" content="Browse our comfortable rooms at Destine Inn & Suites. Choose from King rooms, Double Queens, and ADA accessible options starting at $99/night." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden" data-testid="rooms-hero">
        <img
          src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Hotel Rooms"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="font-accent text-2xl text-accent mb-2">Our Accommodations</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold">Rooms & Suites</h1>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 md:py-28" data-testid="rooms-list">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Choose Your Perfect Room
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each of our rooms is designed with your comfort in mind, featuring modern amenities and coastal-inspired decor.
            </p>
          </div>

          <div className="space-y-12">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                data-testid={`room-card-${room.id}`}
              >
                {/* Image */}
                <div className={`img-zoom rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>

                {/* Details */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      From ${room.price}/night
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">{room.description}</p>

                  {/* Room Info */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users className="w-5 h-5 text-primary" />
                      <span>Up to {room.capacity} guests</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Bed className="w-5 h-5 text-primary" />
                      <span>{room.beds}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Maximize className="w-5 h-5 text-primary" />
                      <span>{room.size}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-accent" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/booking?room=${room.id}`}
                    data-testid={`book-${room.id}-btn`}
                  >
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 font-medium shadow-md hover:shadow-lg transition-all duration-300">
                      Book This Room
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary" data-testid="rooms-info">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-heading text-xl font-semibold text-gray-900 mb-2">Check-in Time</h4>
              <p className="text-gray-600">3:00 PM</p>
            </div>
            <div>
              <h4 className="font-heading text-xl font-semibold text-gray-900 mb-2">Check-out Time</h4>
              <p className="text-gray-600">11:00 AM</p>
            </div>
            <div>
              <h4 className="font-heading text-xl font-semibold text-gray-900 mb-2">Questions?</h4>
              <p className="text-gray-600">Call (850) 650-2236</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
