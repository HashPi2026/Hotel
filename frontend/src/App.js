import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";

// Pages
import Home from "@/pages/Home";
import Rooms from "@/pages/Rooms";
import Booking from "@/pages/Booking";
import Gallery from "@/pages/Gallery";
import About from "@/pages/About";
import Amenities from "@/pages/Amenities";
import Contact from "@/pages/Contact";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      <div className="App min-h-screen flex flex-col">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/amenities" element={<Amenities />} />
              
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
