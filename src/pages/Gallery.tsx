import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// Import gallery images
import whiteningBeforeAfter from "@/assets/gallery/whitening-before-after.jpg";
import bracesBeforeAfter from "@/assets/gallery/braces-before-after.jpg";
import implantResult from "@/assets/gallery/implant-result.jpg";
import happyPatient1 from "@/assets/gallery/happy-patient-1.jpg";
import veneerBeforeAfter from "@/assets/gallery/veneer-before-after.jpg";
import clinicInterior from "@/assets/gallery/clinic-interior.jpg";
import beforeAfter from "@/assets/before-after.png";
import clinicChair from "@/assets/clinic-chair.png";
import clinicWaiting from "@/assets/clinic-waiting.png";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: "before-after" | "clinic" | "patients";
  description: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: whiteningBeforeAfter,
    title: "Teeth Whitening Transformation",
    category: "before-after",
    description: "Professional teeth whitening - from stained to bright white smile",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    src: clinicInterior,
    title: "Modern Treatment Room",
    category: "clinic",
    description: "State-of-the-art dental equipment for your comfort",
    aspectRatio: "landscape",
  },
  {
    id: 3,
    src: bracesBeforeAfter,
    title: "Braces Treatment Results",
    category: "before-after",
    description: "Orthodontic treatment - straightening teeth with modern braces",
    aspectRatio: "portrait",
  },
  {
    id: 4,
    src: happyPatient1,
    title: "Happy Patient",
    category: "patients",
    description: "Another confident smile after dental treatment",
    aspectRatio: "landscape",
  },
  {
    id: 5,
    src: veneerBeforeAfter,
    title: "Dental Veneer Makeover",
    category: "before-after",
    description: "Porcelain veneers - transforming damaged teeth to perfection",
    aspectRatio: "portrait",
  },
  {
    id: 6,
    src: clinicChair,
    title: "Dental Chairs",
    category: "clinic",
    description: "Comfortable dental chairs for a relaxing experience",
    aspectRatio: "portrait",
  },
  {
    id: 7,
    src: beforeAfter,
    title: "Maryland Bridge Treatment",
    category: "before-after",
    description: "Natural-looking tooth replacement with Maryland Bridge",
    aspectRatio: "portrait",
  },
  {
    id: 8,
    src: clinicWaiting,
    title: "Comfortable Waiting Area",
    category: "clinic",
    description: "Spacious and comfortable waiting area for patients",
    aspectRatio: "portrait",
  },
  {
    id: 9,
    src: implantResult,
    title: "Dental Implant",
    category: "before-after",
    description: "Permanent tooth replacement with titanium implant",
    aspectRatio: "portrait",
  },
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "before-after", label: "Before & After" },
  { id: "clinic", label: "Our Clinic" },
  { id: "patients", label: "Happy Patients" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="dental-gradient-bg py-20">
        <div className="dental-container text-center">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Photo Gallery
          </span>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Smile <span className="dental-text-gradient">Transformations</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the amazing results from our treatments and take a virtual tour of our modern clinic
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="dental-container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="dental-section">
        <div className="dental-container">
          <div className="columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-xl bg-secondary">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-primary-foreground font-bold text-lg mb-1">
                        {image.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-sm">
                        {image.description}
                      </p>
                    </div>
                    
                    {/* Zoom icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                      {image.category === "before-after"
                        ? "Before & After"
                        : image.category === "clinic"
                        ? "Clinic"
                        : "Patient"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="dental-section bg-primary text-primary-foreground">
        <div className="dental-container text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of happy patients who have transformed their smiles at Sri Gowri Dental Care.
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
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-primary-foreground" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-primary-foreground" />
          </button>

          {/* Image container */}
          <div
            className="max-w-4xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-primary-foreground font-bold text-xl mb-1">
                {filteredImages[currentImageIndex]?.title}
              </h3>
              <p className="text-primary-foreground/70">
                {filteredImages[currentImageIndex]?.description}
              </p>
              <p className="text-primary-foreground/50 text-sm mt-2">
                {currentImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;