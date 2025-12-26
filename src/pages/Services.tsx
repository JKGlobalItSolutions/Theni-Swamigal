import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Brain, Utensils, Sparkles, HandHeart } from "lucide-react";
import banner2 from "@/assets/theni-banner-2.png";

const services = [
  {
    icon: Users,
    title: "Spiritual Satsang",
    description: "Regular discourses and Q&A sessions based on Swamigal's teachings. Join seekers from all walks of life in meaningful discussions about spirituality, life's purpose, and inner transformation.",
    emoji: "🕯️",
  },
  {
    icon: Brain,
    title: "Meditation Sessions",
    description: "Daily meditation practices in a peaceful environment. Experience guided meditations that help calm the mind, reduce stress, and connect with your inner self.",
    emoji: "🧘",
  },
  {
    icon: Utensils,
    title: "Annadhanam (Food Offering)",
    description: "Free meals served on special days and festival occasions. The Ashram believes in the sacred tradition of feeding all visitors as a form of service and devotion.",
    emoji: "🍛",
  },
  {
    icon: Sparkles,
    title: "Rituals & Pooja Services",
    description: "Traditional poojas conducted for peace, wellbeing, and prosperity. Special ceremonies are performed during auspicious occasions and festivals.",
    emoji: "📿",
  },
  {
    icon: HandHeart,
    title: "Spiritual Guidance",
    description: "Personal counselling and blessings from the Ashram team. Receive guidance on life's challenges, spiritual practices, and finding your path to inner peace.",
    emoji: "🙏",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Banner Section */}
        <section className="relative overflow-hidden">
          <img
            src={banner2}
            alt="Theni Swamigal Services Banner"
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-8 bg-card rounded-2xl border border-border/50 transition-all duration-300 hover:shadow-card hover:border-primary/30"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <span className="text-3xl">{service.emoji}</span>
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
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
              Experience the Ashram
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              All services are offered with love and devotion. Visitors are welcome daily 
              from 7:00 AM to 6:00 PM.
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

export default Services;
