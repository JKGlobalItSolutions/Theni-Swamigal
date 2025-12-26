import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuotesSection from "@/components/home/Quotes";
import ServicesPreview from "@/components/home/ServicesPreview";
import BooksPreview from "@/components/home/BooksPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactPreview from "@/components/home/ContactPreview";
import banner1 from "@/assets/theni-banner-1.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Banner Section */}
        <section className="relative overflow-hidden">
          <img
            src={banner1}
            alt="Theni Swamigal Banner"
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        <ServicesPreview />
        <QuotesSection />
        <BooksPreview />
        <GalleryPreview />
        <ContactPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
