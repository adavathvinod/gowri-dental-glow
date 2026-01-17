import { Link, useLocation } from "react-router-dom";
import { Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar - always visible */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="dental-container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+917981765567" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              +91 79817 65567
            </a>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Mon-Sat: 9AM-9PM | Sun: 10AM-1PM
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-primary-foreground/20 px-3 py-1 rounded-full text-xs font-semibold">
              ⭐ 5.0 Rating | 35+ Reviews
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="dental-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Sri Gowri Dental Care" 
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground leading-tight">
                Sri Gowri Dental Care
              </h1>
              <p className="text-xs text-muted-foreground">Your Smile, Our Priority</p>
            </div>
          </Link>

          {/* Desktop Navigation - always visible */}
          <nav className="flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - always visible */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+917981765567">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;