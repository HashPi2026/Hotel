import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "Amenities", path: "/amenities" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+18505551234" className="flex items-center gap-2 hover:text-accent transition-colors" data-testid="phone-link">
              <Phone className="w-4 h-4" />
              <span>(850) 650-2236</span>
            </a>
            <a href="https://maps.app.goo.gl/YtofEfCiwr3eVtxt7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors" data-testid="location-link">
              <MapPin className="w-4 h-4" />
              <span>Destin, Florida</span>
            </a>
          </div>
          <div className="text-accent font-medium">
            Best Rates Guaranteed
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
        data-testid="main-navbar"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-heading text-xl font-bold">DI</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-xl font-semibold text-gray-900 leading-tight">Destine Inn</h1>
                <p className="text-xs text-gray-500 tracking-wide">& Suites</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-sm font-medium ${
                    location.pathname === link.path ? "text-primary" : ""
                  }`}
                  data-testid={`nav-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Book Now Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link to="/booking" data-testid="book-now-btn">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2 font-medium shadow-md hover:shadow-lg transition-all duration-300 hidden sm:flex">
                  Book Now
                </Button>
              </Link>
              
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                data-testid="mobile-menu-toggle"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transform transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          data-testid="mobile-menu"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium py-2 border-b border-gray-100 ${
                    location.pathname === link.path ? "text-primary" : "text-gray-700"
                  }`}
                  data-testid={`mobile-nav-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/booking" className="mt-4" data-testid="mobile-book-now-btn">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-3 font-medium">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
