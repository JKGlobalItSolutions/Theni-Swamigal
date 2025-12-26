import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, BookOpen } from "lucide-react";
import banner3 from "@/assets/theni-banner-3.png";

const books = [
  {
    title: "Theni Swamigal Vazhkai Oru Vilakkam",
    description: "A comprehensive guide to the life and teachings of Theni Swamigal, exploring his spiritual journey and wisdom.",
    language: "Tamil",
  },
  {
    title: "Meditation Path & Mind Silence",
    description: "Learn the art of meditation and discover techniques to achieve inner silence and mental clarity.",
    language: "English",
  },
  {
    title: "Swamigal Spiritual Messages",
    description: "A collection of powerful spiritual messages and discourses that inspire and guide seekers.",
    language: "Tamil & English",
  },
  {
    title: "Inner Awakening – A Guidebook",
    description: "A practical guide to awakening your inner consciousness and experiencing true self-realization.",
    language: "English",
  },
];

const Books = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Banner Section */}
        <section className="relative overflow-hidden">
          <img
            src={banner3}
            alt="Theni Swamigal Books Banner"
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Books Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {books.map((book, index) => (
                <div
                  key={index}
                  className="group p-8 bg-card rounded-2xl border border-border/50 transition-all duration-300 hover:shadow-card hover:border-primary/30"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <BookOpen className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-heading text-xl font-semibold text-foreground mb-1">
                          {book.title}
                        </h2>
                        <span className="text-sm text-primary font-medium">
                          {book.language}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {book.description}
                    </p>
                    <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 w-fit">
                      <Download size={18} />
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="section-padding bg-muted">
          <div className="container-custom text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Spread the Wisdom
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These books are offered free of charge as a service to all spiritual seekers. 
              Feel free to share them with friends and family who may benefit from these teachings.
            </p>
            <p className="text-sm text-muted-foreground/70">
              For printed copies, please contact the Ashram directly.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Books;
