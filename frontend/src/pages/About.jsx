import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Star, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Genuine Hospitality",
    description: "We treat every guest like family, ensuring your stay feels like a home away from home."
  },
  {
    icon: Shield,
    title: "Cleanliness & Safety",
    description: "Your health and safety are our top priorities with enhanced cleaning protocols throughout."
  },
  {
    icon: Star,
    title: "Quality Service",
    description: "Our dedicated staff goes above and beyond to make your stay exceptional."
  },
  {
    icon: Users,
    title: "Family Focused",
    description: "We create a welcoming environment for families, couples, and solo travelers alike."
  }
];

export default function About() {
  return (
    <div data-testid="about-page">
      <Helmet>
        <title>About Us | Destine Inn & Suites - Destin, FL</title>
        <meta name="description" content="Learn about Destine Inn & Suites - your family-owned hotel near the beautiful beaches of Destin, Florida. Over 20 years of hospitality." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden" data-testid="about-hero">
        <img
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="font-accent text-2xl text-accent mb-2">Get to Know Us</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold">About Us</h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-accent text-xl text-accent mb-3">Our Story</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Welcome to Destine Inn & Suites
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nestled in the heart of Destin, Florida, Destine Inn & Suites has been welcoming guests to the beautiful Emerald Coast for over two decades. Our family-owned property combines the warmth of Southern hospitality with modern comfort and convenience.
                </p>
                <p>
                  Located just minutes from the world-famous white sand beaches that make Destin a premier vacation destination, we offer the perfect base for your Florida getaway. Whether you're here for a family beach vacation, a romantic escape, or a business trip, we're committed to making your stay memorable.
                </p>
                <p>
                  Our dedicated team takes pride in maintaining clean, comfortable rooms and providing friendly, attentive service. We believe that the little touches make a big difference, from our complimentary amenities to our local recommendations that help you experience the best of Destin.
                </p>
                <p>
                  Destin Inn & Suites is a comfortable, affordable, newly upgraded hotel with 50″ inch flat screen TV’s and modern furniture, located in the heart of Destin. Destin Inn & Suites has convenient access to local business, restaurants, and leisure activities; spacious rooms with your choice of 1 king or 2 queen beds, off-street parking available for cars, RVs, boat trailers and trucks.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2833394/pexels-photo-2833394.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beach Family"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 hidden md:block">
                <div className="text-4xl font-heading font-bold text-primary">20+</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-accent text-xl text-accent mb-3">What We Stand For</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                data-testid={`value-${index}`}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
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
            <div className="order-1 lg:order-2">
              <p className="font-accent text-xl text-accent mb-3">Prime Location</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                The Perfect Location
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Our location in Destin puts you right where you want to be – close to the beach, shopping, dining, and entertainment. We're just off the main highway, making it easy to explore everything the Emerald Coast has to offer.
                </p>
                <p>
                  Within minutes, you can be sinking your toes into the powdery white sand of Henderson Beach State Park, browsing the shops at Destin Commons, or enjoying fresh Gulf seafood at one of the area's renowned restaurants.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="https://www.google.com/maps/place/Destin+Inn+%26+Suites/@30.3878584,-86.4825567,3577m/data=!3m1!1e3!4m20!1m10!3m9!1s0x889143f7760a9dbd:0xfc54140efd026d79!2sDestin+Inn+%26+Suites!5m2!4m1!1i2!8m2!3d30.3919493!4d-86.4884793!16s%2Fg%2F1tf611l4!3m8!1s0x889143f7760a9dbd:0xfc54140efd026d79!5m2!4m1!1i2!8m2!3d30.3919493!4d-86.4884793!16s%2Fg%2F1tf611l4?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D" data-testid="explore-area-btn">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-3">
                    Explore the Area
                  </Button>
                </Link>
                <Link to="https://www.google.com/maps/dir//Destin+Inn+%26+Suites,+713+Harbor+Blvd,+Destin,+FL+32541/@30.3878584,-86.4825567,3577m/data=!3m1!1e3!4m20!1m10!3m9!1s0x889143f7760a9dbd:0xfc54140efd026d79!2sDestin+Inn+%26+Suites!5m2!4m1!1i2!8m2!3d30.3919493!4d-86.4884793!16s%2Fg%2F1tf611l4!4m8!1m0!1m5!1m1!1s0x889143f7760a9dbd:0xfc54140efd026d79!2m2!1d-86.4884793!2d30.3919493!3e0?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D" data-testid="get-directions-btn">
                  <Button variant="outline" className="border-primary text-primary rounded-full px-6 py-3">
                    Get Directions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Destine Inn?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Book your stay today and discover why guests keep coming back
          </p>
          <Link to="/booking" data-testid="about-book-now">
            <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-medium shadow-lg">
              Book Your Stay
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
