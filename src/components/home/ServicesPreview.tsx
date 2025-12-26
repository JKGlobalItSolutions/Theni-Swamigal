import { Link } from "react-router-dom";
import { Users, Brain, Utensils, Sparkles, HandHeart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Satsang & Spiritual Talks",
    description: "Regular discourses and Q&A sessions based on Swamigal's teachings.",
  },
  {
    icon: Brain,
    title: "Daily Meditation Sessions",
    description: "Daily meditation practices in a peaceful environment.",
  },
  {
    icon: Utensils,
    title: "Annadhanam",
    description: "Free meals served on special days and festival occasions.",
  },
  {
    icon: Sparkles,
    title: "Pooja & Ritual Services",
    description: "Traditional poojas conducted for peace and wellbeing.",
  },
  {
    icon: HandHeart,
    title: "Spiritual Counselling",
    description: "Personal counselling and blessings from the Ashram team.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-4">
            🕉️ Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Spiritual & Community Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the spiritual and community services of Theni Swamigal Ashram
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-xl border border-border/50 transition-all duration-300 hover:shadow-card hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
