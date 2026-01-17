import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="dental-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Sri Gowri Dental Care" className="h-12 w-auto brightness-0 invert" />
              <div>
                <h3 className="font-bold text-lg">Sri Gowri Dental Care</h3>
                <p className="text-sm opacity-80">Your Smile, Our Priority</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Providing affordable and quality dental care with 12+ years of healthcare excellence. 
              Led by Dr. N. Sri Gowri, BDS, MDS - Prosthodontist & Implantologist.
            </p>
            <div className="flex items-center gap-2 bg-primary/20 px-3 py-2 rounded-lg w-fit">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="text-sm font-semibold">5.0 Google Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Reviews", href: "/reviews" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Root Canal Treatment",
                "Braces & Orthodontics",
                "Dental Implants",
                "Laser Dentistry",
                "Pediatric Care",
                "Teeth Whitening",
              ].map((service) => (
                <li key={service} className="text-sm opacity-80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+917981765567"
                className="flex items-start gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                +91 79817 65567
              </a>
              <div className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Kuntloor Rd, opposite Substation, Hayathnagar, Telangana</span>
              </div>
              <div className="flex items-start gap-3 text-sm opacity-80">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon-Sat: 9:00 AM - 9:00 PM</p>
                  <p className="text-primary">Sun: 10:00 AM - 1:00 PM</p>
                </div>
              </div>
              <a
                href="https://www.facebook.com/SriGowriDentalCare"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Facebook className="w-4 h-4" />
                Sri Gowri Dental Care
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© {currentYear} Sri Gowri Dental Care. All rights reserved.</p>
          <p>Dr. N. Sri Gowri, BDS, MDS | Regd. No. A-825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
