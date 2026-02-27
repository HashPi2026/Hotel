import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import image1 from "../photo/MOTEL EXTERIOR 1.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    // Simulate form submission
    setSubmitted(true);
    toast.success("Message sent successfully!");
  };

  return (
    <div data-testid="contact-page">
      <Helmet>
        <title>Contact Us | Destine Inn & Suites - Destin, FL</title>
        <meta name="description" content="Contact Destine Inn & Suites in Destin, Florida. Call (850) 555-1234 or email us. Find directions and get answers to your questions." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden" data-testid="contact-hero">
        <img
          src={image1}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="font-accent text-2xl text-accent mb-2">Get in Touch</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <p className="font-accent text-xl text-accent mb-3">We're Here to Help</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Have questions about your stay or need assistance with your reservation? Our friendly team is here to help. Reach out to us through any of the methods below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+18505551234" className="text-gray-600 hover:text-primary transition-colors" data-testid="contact-phone">
                      (850) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@destininn.com" className="text-gray-600 hover:text-primary transition-colors" data-testid="contact-email">
                      info@destininn.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <a 
                      href="https://maps.app.goo.gl/YtofEfCiwr3eVtxt7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                      data-testid="contact-address"
                    >
                      1234 Beach Highway<br />
                      Destin, FL 32541
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Front Desk Hours</h3>
                    <p className="text-gray-600">
                      24 Hours, 7 Days a Week
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8" data-testid="contact-form-container">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    variant="outline"
                    className="rounded-full"
                    data-testid="send-another-btn"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-6">
                    Send Us a Message
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <Label className="form-label">Your Name *</Label>
                      <Input
                        className="h-12"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="John Doe"
                        data-testid="contact-name-input"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <Label className="form-label">Email Address *</Label>
                        <Input
                          type="email"
                          className="h-12"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="john@example.com"
                          data-testid="contact-email-input"
                        />
                      </div>
                      <div>
                        <Label className="form-label">Phone Number</Label>
                        <Input
                          className="h-12"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                          data-testid="contact-phone-input"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="form-label">Subject</Label>
                      <Input
                        className="h-12"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        placeholder="How can we help you?"
                        data-testid="contact-subject-input"
                      />
                    </div>
                    <div>
                      <Label className="form-label">Message *</Label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[150px]"
                        data-testid="contact-message-input"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-3 font-medium"
                      data-testid="contact-submit-btn"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-gray-600">
              Located in the heart of Destin, Florida
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl" data-testid="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.5!2d-86.48861883619288!3d30.391743265658718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIzJzMwLjMiTiA4NsKwMjknMTkuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Destine Inn Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div>
              <p className="text-white/70 text-sm mb-1">Call Us</p>
              <a href="tel:+18505551234" className="text-xl font-semibold hover:text-accent transition-colors">
                (850) 555-1234
              </a>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20"></div>
            <div>
              <p className="text-white/70 text-sm mb-1">Email Us</p>
              <a href="mailto:info@destininn.com" className="text-xl font-semibold hover:text-accent transition-colors">
                info@destininn.com
              </a>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20"></div>
            <div>
              <p className="text-white/70 text-sm mb-1">Visit Us</p>
              <span className="text-xl font-semibold">Destin, FL 32541</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
