import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🕉️</span>
              <h3 className="font-heading text-xl font-bold text-primary-foreground">
                Theni Swamigal
              </h3>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              A center of meditation, satsang, spiritual learning, and inner transformation 
              in Theni, Tamil Nadu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Services", "Books", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary-foreground">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/80">
                <MapPin size={18} className="shrink-0 mt-0.5 text-primary" />
                <span>Marikundu, Theni District, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Phone size={18} className="shrink-0 text-primary" />
                <span>81208 31076</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Mail size={18} className="shrink-0 text-primary" />
                <span>info@theniswamigal.org</span>
              </li>
            </ul>
          </div>

{/* Ashram Timings */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary-foreground">
              Ashram Timings
            </h4>
            <div className="space-y-3 text-sm text-secondary-foreground/80">
              <div className="flex items-start gap-3">
                <Clock size={18} className="shrink-0 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Opening Time</p>
                  <p>6:00 AM – 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="shrink-0 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Pooja Timings</p>
                  <p className="space-y-1">
                    <span className="font-medium"></span> 7:00 AM – 7:00 PM
                  </p>
                  {/* <p className="space-y-1">
                    <span className="font-medium">Evening:</span> 6:00 PM – 7:30 PM
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Theni Swamigal Ashram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
