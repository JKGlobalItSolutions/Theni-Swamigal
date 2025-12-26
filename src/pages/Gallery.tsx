import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-ashram.jpg";
import meditationImage from "@/assets/meditation.jpg";
import satsangImage from "@/assets/satsang.jpg";
import annadhanamImage from "@/assets/annadhanam.jpg";

const galleryCategories = [
  {
    title: "Swamigal Photos",
    images: [meditationImage],
  },
  {
    title: "Ashram Campus",
    images: [heroImage],
  },
  {
    title: "Satsang Events",
    images: [satsangImage],
  },
  {
    title: "Annadhanam",
    images: [annadhanamImage],
  },
];

const allImages = [
  { src: heroImage, alt: "Ashram Campus View" },
  { src: meditationImage, alt: "Meditation Session" },
  { src: satsangImage, alt: "Satsang Gathering" },
  { src: annadhanamImage, alt: "Annadhanam Service" },
  { src: heroImage, alt: "Temple Gardens" },
  { src: satsangImage, alt: "Festival Celebration" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary text-secondary-foreground">
          <div className="container-custom text-center">
            <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-4">
              🖼️ Photo Gallery
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ashram Gallery
            </h1>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
              Glimpses of spiritual moments, sacred rituals, and peaceful gatherings
            </p>
          </div>
        </section>

        {/* Category Tags */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              {galleryCategories.map((category, index) => (
                <button
                  key={index}
                  className="px-6 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full font-body font-medium text-sm transition-all duration-300"
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-primary-foreground font-heading text-lg font-semibold">
                        {image.alt}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted">
          <div className="container-custom text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Capture Your Own Memories
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Visit the Ashram and experience these sacred moments in person. 
              Create your own spiritual memories.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Plan Your Visit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
