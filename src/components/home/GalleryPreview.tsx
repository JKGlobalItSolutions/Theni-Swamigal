import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ashram.jpg";
import meditationImage from "@/assets/meditation.jpg";
import satsangImage from "@/assets/satsang.jpg";
import annadhanamImage from "@/assets/annadhanam.jpg";

const images = [
  { src: heroImage, alt: "Ashram Campus" },
  { src: meditationImage, alt: "Meditation Session" },
  { src: satsangImage, alt: "Satsang Gathering" },
  { src: annadhanamImage, alt: "Annadhanam Service" },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-4">
            🖼️ Photo Gallery
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Glimpses of the Ashram
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            View Ashram photos, satsang moments, pooja events, and spiritual gatherings
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <span className="text-primary-foreground font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View Gallery
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
