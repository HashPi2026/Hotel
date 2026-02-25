import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { name: "Rooms & Rates", path: "/rooms" },
  { name: "Amenities", path: "/amenities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Book Now", path: "/booking" },
];

const exploreLinks = [
  { name: "About Us", path: "/about" },
  { name: "Nearby Attractions", path: "/nearby" },
  { name: "Restaurants", path: "/restaurants" },
  { name: "Contact Us", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" data-testid="footer">
      {/* Beach divider */}
      <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-heading text-xl font-bold">DI</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold">Destine Inn</h3>
                <p className="text-xs text-gray-400 tracking-wide">& Suites</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Comfortable, affordable accommodations in the heart of Destin, Florida, featuring newly upgraded rooms, modern amenities, free Wi-Fi, spacious outdoor pool, and convenient access to local dining, shopping, and attractions. Whether you’re here for business or leisure, enjoy a relaxing stay just minutes from the beach.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors" data-testid="social-facebook" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors" data-testid="social-instagram" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors" data-testid="social-twitter" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link hover:text-accent transition-colors" data-testid={`footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link hover:text-accent transition-colors" data-testid={`footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+18505551234" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors" data-testid="footer-phone">
                  <Phone className="w-5 h-5 mt-0.5 text-accent" />
                  <span>(850) 650-2236, (877) 650-2233</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@destininn.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors" data-testid="footer-email">
                  <Mail className="w-5 h-5 mt-0.5 text-accent" />
                  <span>destininn@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/YtofEfCiwr3eVtxt7" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors" data-testid="footer-address">
                  <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span>713 Harbor Blvd, Destin, FL 32541</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Destine Inn & Suites. All rights reserved.
          </p>
          <div>
              <p className="text-gray-500 text-sm">
                Website by Hash Pi
              </p>
          </div>
          <div className="flex gap-6 text-sm">
            
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
