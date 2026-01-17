import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote, ThumbsUp, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Hemanth Sai Chinni",
    rating: 5,
    date: "2 months ago",
    text: "Phenomenal treatment for my daughter! Dr. Sri Gowri is incredibly patient and gentle with children. The entire staff made us feel comfortable. Highly recommend for families!",
    source: "Google Review",
    verified: true,
    highlight: true,
  },
  {
    name: "9 TODAY NEWS LIVE",
    rating: 5,
    date: "1 month ago",
    text: "Excellent dental clinic with state-of-the-art facilities. The doctor is very experienced and explains everything clearly. Very affordable pricing compared to other clinics in the area.",
    source: "Google Review",
    verified: true,
    highlight: true,
  },
  {
    name: "Priya Sharma",
    rating: 5,
    date: "3 weeks ago",
    text: "Got my root canal done here. Was really scared initially but Dr. Gowri made it completely painless. The clinic is very clean and hygienic. Thank you for the wonderful experience!",
    source: "Google Review",
    verified: true,
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    date: "1 month ago",
    text: "Best dental clinic in Hayathnagar! Got my dental implant done here. The results are amazing - looks and feels like my natural tooth. Dr. Sri Gowri is an expert in her field.",
    source: "Google Review",
    verified: true,
  },
  {
    name: "Lakshmi Devi",
    rating: 5,
    date: "2 weeks ago",
    text: "Very happy with my braces treatment. The doctor is very skilled and the staff is very helpful. The clinic timings are convenient - open even on Sundays!",
    source: "Google Review",
    verified: true,
  },
  {
    name: "Mohammed Aziz",
    rating: 5,
    date: "3 months ago",
    text: "Brought my elderly mother for dentures. The doctor was very patient and understanding. The dentures fit perfectly. Reasonable prices and excellent service.",
    source: "Google Review",
    verified: true,
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    date: "1 month ago",
    text: "Got teeth whitening done for my wedding. The results exceeded my expectations! The procedure was quick and the staff was so friendly. Definitely coming back for regular checkups.",
    source: "Google Review",
    verified: true,
  },
  {
    name: "Venkat Rao",
    rating: 5,
    date: "2 months ago",
    text: "Finally found a dentist who understands dental anxiety! Dr. Gowri is so calm and reassuring. The laser treatment was completely painless. Highly recommended!",
    source: "Google Review",
    verified: true,
  },
];

const Reviews = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="dental-gradient-bg py-20">
        <div className="dental-container text-center">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Patient Reviews
          </span>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            What Our Patients
            <span className="block dental-text-gradient">Say About Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Don't just take our word for it - hear from our happy patients
          </p>

          {/* Rating Summary */}
          <div className="inline-flex items-center gap-6 bg-background p-6 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-4xl font-bold text-foreground">5.0</span>
                <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="flex gap-0.5 justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Based on 35+ reviews</p>
            </div>
            <div className="h-16 w-px bg-border"></div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Google Reviews</p>
              <p className="text-sm text-muted-foreground">Verified patients</p>
              <a
                href="https://www.google.com/search?q=Sri+Gowri+Dental+Care+Hayathnagar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 mt-1"
              >
                View on Google <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="dental-section">
        <div className="dental-container">
          <div className="grid grid-cols-2 gap-6 mb-12">
            {reviews
              .filter((r) => r.highlight)
              .map((review, index) => (
                <div
                  key={review.name}
                  className="bg-primary/5 border-2 border-primary/20 p-6 rounded-2xl relative"
                >
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{review.name}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground leading-relaxed mb-4">"{review.text}"</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{review.source}</span>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                        <ThumbsUp className="w-3 h-3" /> Verified
                      </span>
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* All Reviews */}
          <div className="grid grid-cols-3 gap-6">
            {reviews
              .filter((r) => !r.highlight)
              .map((review, index) => (
                <div key={review.name} className="dental-card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{review.name}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    "{review.text}"
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{review.date}</span>
                    {review.verified && (
                      <span className="text-primary">✓ Verified</span>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dental-section bg-secondary/30">
        <div className="dental-container text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Join Our Happy Patients
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Experience the difference at Sri Gowri Dental Care. Book your appointment today!
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a
                href={`https://wa.me/917981765567?text=${encodeURIComponent("Hello! I saw your reviews and would like to book an appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Message on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;