import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "Modern Dental Care",
    subtitle: "State-of-the-art equipment for your comfort",
  },
  {
    image: heroSlide2,
    title: "Confident Smiles",
    subtitle: "Transform your smile with expert care",
  },
  {
    image: heroSlide3,
    title: "Sterilized & Safe",
    subtitle: "Highest standards of hygiene and safety",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden dental-gradient-bg">
      <div className="dental-container py-16">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-left animate-slide-up">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-primary">5.0 Rating | 35+ Reviews</span>
            </div>

            <h1 className="text-6xl font-bold text-foreground mb-4 leading-tight">
              Your Perfect Smile
              <span className="block dental-text-gradient">Starts Here</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Experience affordable, quality dental care with 12+ years of excellence. 
              Led by Dr. N. Sri Gowri, BDS, MDS.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+917981765567">
                  📞 +91 79817 65567
                </a>
              </Button>
            </div>

            {/* Emergency Banner */}
            <div className="mt-8 p-4 bg-destructive/10 border border-destructive/20 rounded-xl">
              <p className="text-sm font-semibold text-destructive flex items-center gap-2">
                🚨 24/7 Emergency Care Available
              </p>
            </div>
          </div>

          {/* Slider */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
                    <h3 className="text-xl font-bold mb-1">{slide.title}</h3>
                    <p className="text-sm opacity-90">{slide.subtitle}</p>
                  </div>
                </div>
              ))}

              {/* Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-primary-foreground w-6"
                        : "bg-primary-foreground/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;