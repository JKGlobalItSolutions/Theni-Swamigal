import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ContactPreview = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-4">
            📞 Get in Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Visit the Ashram
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-background rounded-xl border border-border/50">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Location
              </h3>
              <p className="text-muted-foreground text-sm">
                Marikundu, Theni District, Tamil Nadu, India
              </p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-border/50">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Phone
              </h3>
              <p className="text-muted-foreground text-sm">+91 ————</p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-border/50">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Email
              </h3>
              <p className="text-muted-foreground text-sm">info@theniswamigal.org</p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
