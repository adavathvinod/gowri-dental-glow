import { Clock, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday", time: "9:00 AM - 9:00 PM", isOpen: true },
  { day: "Tuesday", time: "9:00 AM - 9:00 PM", isOpen: true },
  { day: "Wednesday", time: "9:00 AM - 9:00 PM", isOpen: true },
  { day: "Thursday", time: "9:00 AM - 9:00 PM", isOpen: true },
  { day: "Friday", time: "9:00 AM - 9:00 PM", isOpen: true },
  { day: "Saturday", time: "9:00 AM - 9:00 PM", isOpen: true },
  { day: "Sunday", time: "10:00 AM - 1:00 PM", isOpen: true, special: "Sunday Specialist Hours" },
];

const BusinessHours = () => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section className="dental-section bg-foreground text-background">
      <div className="dental-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hours */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Business Hours</h2>
                <p className="text-background/70 text-sm">We're here when you need us</p>
              </div>
            </div>

            <div className="space-y-3">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center py-3 px-4 rounded-lg ${
                    item.day === today
                      ? "bg-primary/20 border border-primary/30"
                      : "bg-background/5"
                  }`}
                >
                  <div>
                    <span className={`font-medium ${item.day === today ? "text-primary" : ""}`}>
                      {item.day}
                    </span>
                    {item.day === today && (
                      <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                        Today
                      </span>
                    )}
                    {item.special && (
                      <p className="text-xs text-primary mt-0.5">{item.special}</p>
                    )}
                  </div>
                  <span className="text-sm">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
              Need a Dental Checkup?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Book your appointment today and experience the best dental care in Hayathnagar.
            </p>

            <div className="space-y-4 mb-6">
              <a
                href="tel:+917981765567"
                className="flex items-center gap-3 text-primary-foreground hover:underline"
              >
                <Phone className="w-5 h-5" />
                +91 79817 65567
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Kuntloor Rd, opposite Substation, Hayathnagar, Telangana</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="whatsapp"
                size="lg"
                className="flex-1"
                asChild
              >
                <a
                  href={`https://wa.me/917981765567?text=${encodeURIComponent("Hello! I would like to book an appointment.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp Us
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="tel:+917981765567">📞 Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
