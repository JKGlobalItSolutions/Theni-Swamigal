import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, Heart, QrCode, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Donation state
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [donorPhone, setDonorPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We will get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDonationOpen(true);
  };

  const handleDonateAmount = (amount: number) => {
    setSelectedAmount(amount);
    setIsPaymentOpen(true);
  };

  const handlePaymentComplete = () => {
    setIsPaymentOpen(false);
    setIsPaymentComplete(true);
    toast({
      title: "Payment Successful",
      description: "Thank you for your donation! Details sent to WhatsApp.",
    });
    // Send to WhatsApp (this would need actual integration)
    console.log("Sending to WhatsApp:", {
      name: donorName,
      phone: donorPhone,
      amount: selectedAmount,
    });
  };

  const handlePaymentCancel = () => {
    setIsPaymentOpen(false);
    setSelectedAmount(0);
  };

  const handlePaymentClose = () => {
    setIsPaymentComplete(false);
    setSelectedAmount(0);
    setDonorName("");
    setDonorPhone("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary text-secondary-foreground">
          <div className="container-custom text-center">
            <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-4">
              📞 Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
              We welcome all seekers. Reach out to us for any inquiries or to plan your visit.
            </p>
          </div>
        </section>

        {/* Donation Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm border border-border/50 p-8">
                <div className="flex items-center gap-4">
                  <Heart className="w-8 h-8 text-primary" />
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                      Support Our Cause
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Your generous donations help us continue our spiritual services and community support.
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleDonationSubmit}
                  className="mt-6 w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                  Ashram Details
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                        Address
                      </h3>
                      <p className="text-muted-foreground">
                        Theni Swamigal Ashram<br />
                        Marikundu, Theni District<br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">+91 9487829171<br/> +91 7806994952</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <p className="text-muted-foreground">info@theniswamigal.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                        Visiting Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Daily: 7:00 AM – 6:00 PM<br />
                        Open for all seekers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Message subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 w-full justify-center"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Amount Selection */}
        {isDonationOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                Select Donation Amount
              </h3>
              <div className="space-y-4">
                {[
                  { amount: 100, label: "₹100" },
                  { amount: 500, label: "₹500" },
                  { amount: 1000, label: "₹1000" },
                  { amount: 2000, label: "₹2000" },
                  { amount: 5000, label: "₹5000" },
                  { amount: 10000, label: "₹10000" },
                ].map((item) => (
                  <button
                    key={item.amount}
                    onClick={() => handleDonateAmount(item.amount)}
                    className="w-full flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:bg-primary/10 transition-all"
                  >
                    <span className="font-semibold text-foreground">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-primary" />
                      <span className="text-primary font-semibold">Donate</span>
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsDonationOpen(false)}
                className="mt-6 w-full bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Payment Section */}
        {isPaymentOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                Complete Payment
              </h3>
              <div className="text-center mb-6">
                <QrCode className="w-24 h-24 mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">
                  Scan QR Code to pay ₹{selectedAmount}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  (UPI / Google Pay / PhonePe / Paytm)
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handlePaymentCancel}
                  className="flex-1 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePaymentComplete}
                  className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Payment Complete */}
        {isPaymentComplete && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Thank You!
              </h3>
              <p className="text-muted-foreground mb-6">
                Your donation of ₹{selectedAmount} has been received. We will send a confirmation to your WhatsApp.
              </p>
              <button
                onClick={handlePaymentClose}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
