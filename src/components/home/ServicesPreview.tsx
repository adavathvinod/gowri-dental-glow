import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "🦷",
    title: "Root Canal Treatment",
    description: "Save your natural teeth with painless RCT procedures",
    benefit: "Pain-Free Procedure",
  },
  {
    icon: "😁",
    title: "Braces & Orthodontics",
    description: "Straighten your teeth with modern braces technology",
    benefit: "Confident Smile",
  },
  {
    icon: "🔩",
    title: "Dental Implants",
    description: "Permanent tooth replacement that looks natural",
    benefit: "Lifetime Solution",
  },
  {
    icon: "✨",
    title: "Laser Dentistry",
    description: "Advanced treatments with minimal discomfort",
    benefit: "Quick Recovery",
  },
];

const ServicesPreview = () => {
  return (
    <section className="dental-section bg-secondary/30">
      <div className="dental-container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive <span className="dental-text-gradient">Dental Care</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From routine checkups to advanced procedures, we offer complete dental solutions
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="dental-card text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {service.benefit}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;