import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, Shield, Users, Star, CheckCircle } from "lucide-react";
import clinicChair from "@/assets/clinic-chair.png";
import clinicWaiting from "@/assets/clinic-waiting.png";
import beforeAfter from "@/assets/before-after.png";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="dental-gradient-bg py-20">
        <div className="dental-container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                About Us
              </span>
              <h1 className="text-5xl font-bold text-foreground mb-4">
                Affordable & Quality
                <span className="block dental-text-gradient">Dental Care</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                With 12+ years of healthcare excellence, Sri Gowri Dental Care has been 
                serving the Hayathnagar community with compassionate, affordable, and 
                world-class dental treatments.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">12+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-3xl font-bold text-primary">5.0</span>
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="text-sm text-muted-foreground">Google Rating</div>
                </div>
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book Your Visit</Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={clinicWaiting}
                alt="Sri Gowri Dental Care Waiting Area"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Dr. N. Sri Gowri</p>
                    <p className="text-sm text-muted-foreground">BDS, MDS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="dental-section">
        <div className="dental-container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={clinicChair}
                alt="Modern Dental Equipment"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Meet Our <span className="dental-text-gradient">Expert</span>
              </h2>

              <div className="bg-secondary/50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Dr. N. Sri Gowri, BDS, MDS
                </h3>
                <p className="text-primary font-medium mb-2">
                  Prosthodontist & Implantologist
                </p>
                <p className="text-sm text-muted-foreground">Regd. No. A-825</p>
              </div>

              <p className="text-muted-foreground mb-6">
                Dr. Sri Gowri is a highly skilled prosthodontist and implantologist with 
                extensive experience in complex dental restorations. Her gentle approach 
                and attention to detail have made her a trusted name in Hayathnagar.
              </p>

              <div className="space-y-3">
                {[
                  "Specialized in Dental Implants",
                  "Expert in Full Mouth Rehabilitation",
                  "Advanced Training in Prosthodontics",
                  "Committed to Painless Dentistry",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="dental-section bg-secondary/30">
        <div className="dental-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our <span className="dental-text-gradient">Core Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What drives us every day to provide exceptional dental care
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Patient First",
                description: "Your comfort and well-being are our top priorities",
              },
              {
                icon: Shield,
                title: "Safety & Hygiene",
                description: "Highest standards of sterilization and safety protocols",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to delivering outstanding results",
              },
              {
                icon: Users,
                title: "Affordability",
                description: "Quality dental care accessible to everyone",
              },
            ].map((value, index) => (
              <div key={value.title} className="dental-card text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="dental-section">
        <div className="dental-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Smile <span className="dental-text-gradient">Transformations</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from our happy patients
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <img
              src={beforeAfter}
              alt="Before and After Dental Treatment"
              className="rounded-2xl shadow-xl w-full"
            />
            <p className="text-center mt-4 text-muted-foreground">
              Maryland Bridge Treatment - Restoring confidence with natural-looking results
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;