import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: "🦷",
    title: "Root Canal Treatment (RCT)",
    subtitle: "Save Your Natural Teeth",
    description: "Advanced root canal therapy that preserves your natural tooth while eliminating pain and infection. Our gentle approach ensures minimal discomfort.",
    benefits: ["Painless procedure", "Single-sitting options", "High success rate", "Preserves natural tooth"],
    price: "Starting from ₹3,000",
  },
  {
    icon: "😁",
    title: "Braces & Orthodontics",
    subtitle: "Straighten Your Teeth with Modern Braces",
    description: "Transform your smile with our comprehensive orthodontic solutions. From traditional metal braces to invisible aligners, we have options for every age.",
    benefits: ["Metal & ceramic braces", "Invisible aligners available", "Suitable for all ages", "EMI options available"],
    price: "Starting from ₹25,000",
  },
  {
    icon: "🔩",
    title: "Dental Implants",
    subtitle: "Permanent Tooth Replacement",
    description: "Replace missing teeth with titanium implants that look, feel, and function like natural teeth. A lifetime solution for tooth loss.",
    benefits: ["Lifetime durability", "Natural appearance", "No damage to adjacent teeth", "Improved chewing ability"],
    price: "Starting from ₹20,000",
  },
  {
    icon: "✨",
    title: "Laser Dentistry",
    subtitle: "Advanced Pain-Free Treatments",
    description: "Experience the future of dentistry with our laser treatments. Minimal bleeding, faster healing, and reduced discomfort.",
    benefits: ["Minimally invasive", "Faster healing time", "Reduced bleeding", "No stitches needed"],
    price: "Consultation required",
  },
  {
    icon: "👶",
    title: "Pediatric Dental Care",
    subtitle: "Gentle Care for Little Smiles",
    description: "Child-friendly dental care in a fun, comfortable environment. We make dental visits enjoyable for your children.",
    benefits: ["Child-friendly environment", "Preventive treatments", "Cavity fillings", "Dental sealants"],
    price: "Starting from ₹500",
  },
  {
    icon: "🌟",
    title: "Teeth Whitening",
    subtitle: "Brighten Your Smile",
    description: "Professional teeth whitening that delivers dramatic results safely. Get a brighter, more confident smile in just one visit.",
    benefits: ["Instant results", "Safe procedure", "Long-lasting effect", "Custom trays available"],
    price: "Starting from ₹5,000",
  },
  {
    icon: "🩹",
    title: "Gum Treatment",
    subtitle: "Healthy Gums, Healthy Smile",
    description: "Comprehensive periodontal care to treat and prevent gum disease. Protect your teeth and overall health.",
    benefits: ["Deep cleaning", "Laser gum therapy", "Gum reshaping", "Periodontal surgery"],
    price: "Starting from ₹1,500",
  },
  {
    icon: "👑",
    title: "Crowns & Bridges",
    subtitle: "Restore Damaged Teeth",
    description: "High-quality dental crowns and bridges that restore function and aesthetics. Made with premium materials for durability.",
    benefits: ["Natural appearance", "Durable materials", "Perfect fit", "Same-day options"],
    price: "Starting from ₹4,000",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="dental-gradient-bg py-20">
        <div className="dental-container text-center">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Comprehensive <span className="dental-text-gradient">Dental Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine checkups to advanced cosmetic procedures, we provide complete dental care under one roof
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="dental-section">
        <div className="dental-container">
          <div className="grid grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="dental-card group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{service.title}</h3>
                      <p className="text-primary font-medium text-sm">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/contact">
                          Book Now
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dental-section bg-primary text-primary-foreground">
        <div className="dental-container text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Book your consultation today and take the first step towards a healthier, more beautiful smile.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="xl"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+917981765567">📞 +91 79817 65567</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;