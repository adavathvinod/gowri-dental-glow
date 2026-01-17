import { Shield, Award, Clock, Heart, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "5.0 Google Rating",
    description: "35+ verified reviews from happy patients",
  },
  {
    icon: Shield,
    title: "12+ Years Experience",
    description: "Trusted healthcare excellence since 2012",
  },
  {
    icon: Heart,
    title: "Gentle Care",
    description: "Pain-free treatments with modern techniques",
  },
  {
    icon: Sparkles,
    title: "Latest Technology",
    description: "State-of-the-art dental equipment",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    description: "Open 6 days a week including Sundays",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Specialized care for all ages",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="dental-section bg-background">
      <div className="dental-container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="dental-text-gradient">Thousands</span> of Patients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our patient-centered approach to dental care
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="dental-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
