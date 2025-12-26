import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";

const books = [
  "Life Teachings of Theni Swamigal",
  "Meditation & Mindfulness",
  "Inner Peace Handbook",
  "Self-Realization Guide",
];

const BooksPreview = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-4">
              📚 Free Downloads
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Spiritual Books & Teachings
            </h2>
            <p className="text-secondary-foreground/80 mb-8 leading-relaxed">
              Download spiritual books and teachings by Theni Swamigal. These resources
              are provided free of charge to all seekers on the path of self-realization.
            </p>
            <Link
              to="/books"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Explore Books
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {books.map((book, index) => (
              <div
                key={index}
                className="p-6 bg-secondary-foreground/10 backdrop-blur-sm rounded-xl border border-secondary-foreground/20 transition-all hover:bg-secondary-foreground/15"
              >
                <BookOpen className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading text-lg font-semibold text-secondary-foreground">
                  {book}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksPreview;
