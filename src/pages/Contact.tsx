import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Facebook, MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    issue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const name = formData.name.trim().slice(0, 100);
    const phone = formData.phone.trim().slice(0, 15);
    const date = formData.date;
    const issue = formData.issue.trim().slice(0, 500);

    if (!name || !phone) {
      return;
    }

    // Compose WhatsApp message
    const message = `Hello! I would like to book an appointment.

Name: ${name}
Phone: ${phone}
${date ? `Preferred Date: ${date}` : ""}
${issue ? `Issue/Reason: ${issue}` : ""}

Please confirm my appointment. Thank you!`;

    const whatsappUrl = `https://wa.me/917981765567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="dental-gradient-bg py-16 md:py-20">
        <div className="dental-container text-center">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your
            <span className="block dental-text-gradient">Appointment</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Need a checkup? Message us on WhatsApp for a quick slot!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="dental-section">
        <div className="dental-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Book via WhatsApp
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill in your details and we'll respond within minutes!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={15}
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1">
                      Preferred Date
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="h-12"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div>
                    <label htmlFor="issue" className="block text-sm font-medium text-foreground mb-1">
                      Dental Issue / Reason for Visit
                    </label>
                    <Textarea
                      id="issue"
                      name="issue"
                      placeholder="Briefly describe your dental issue..."
                      value={formData.issue}
                      onChange={handleChange}
                      maxLength={500}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book on WhatsApp
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Or contact us directly:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="call" className="flex-1" asChild>
                      <a href="tel:+917981765567">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a
                        href="https://www.facebook.com/SriGowriDentalCare"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="w-4 h-4 mr-2" />
                        Facebook
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:+917981765567"
                  className="dental-card flex items-start gap-4 hover:border-primary"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-primary font-medium">+91 79817 65567</p>
                    <p className="text-sm text-muted-foreground">Tap to call</p>
                  </div>
                </a>

                <div className="dental-card flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Hours</h3>
                    <p className="text-sm text-muted-foreground">Mon-Sat: 9AM-9PM</p>
                    <p className="text-sm text-primary font-medium">Sun: 10AM-1PM</p>
                  </div>
                </div>
              </div>

              <div className="dental-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      Kuntloor Rd, opposite Substation,<br />
                      Hayathnagar, Telangana
                    </p>
                  </div>
                </div>

                {/* Google Map */}
                <div className="aspect-video rounded-xl overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.612871727759!2d78.61017517493346!3d17.334217883543943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1096ad7e5dd%3A0xcffd43948e84871b!2sSri%20gowri%20dental%20care!5e0!3m2!1sen!2sin!4v1768655096204!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sri Gowri Dental Care Location"
                  />
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sri+Gowri+Dental+Care+Kuntloor+Rd+Hayathnagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>

              {/* Sunday Special */}
              <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  Sunday Specialist Hours
                </h3>
                <p className="text-muted-foreground mb-2">
                  We understand weekdays can be busy. Visit us on Sundays from 10 AM to 1 PM for consultations and non-emergency treatments.
                </p>
                <p className="text-sm text-primary font-medium">
                  Advance booking recommended for Sundays
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-destructive/10 py-8">
        <div className="dental-container text-center">
          <h3 className="text-xl font-bold text-destructive mb-2">
            🚨 Dental Emergency?
          </h3>
          <p className="text-muted-foreground mb-4">
            Call us immediately for emergency dental care
          </p>
          <Button variant="default" size="lg" className="bg-destructive hover:bg-destructive/90" asChild>
            <a href="tel:+917981765567">
              <Phone className="w-5 h-5 mr-2" />
              Emergency: +91 79817 65567
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
