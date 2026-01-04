import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Linkedin, MessageCircle, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  const locations = [
    {
      unit: "Unit 1",
      address: "Plot No. 192-G, Sector-4, Phase-1, IMT Bawal, Rewari - 123501, Haryana",
      specialty: "Machining & Fabrication",
    },
    {
      unit: "Unit 2",
      address: "Plot No. 123, Sec-3, Phase-1, IMT Bawal, Rewari - 123501, Haryana",
      specialty: "Casting Plant",
    },
    {
      unit: "Unit 3",
      address: "Plot No. 5-C, Sector-15, Phase-2, IMT Bawal, Rewari - 123501, Haryana",
      specialty: "Assembly & Testing",
    },
  ];

  const subjects = [
    "General Inquiry",
    "Request Quote",
    "Career Opportunity",
    "Supplier/Vendor Inquiry",
    "Technical Support",
    "Partnership",
  ];

  const contactCards = [
    { icon: Mail, title: "Email Us", details: ["info@precisions.co.in", "admin@precisions.co.in"], color: "bg-blue-500/10 text-blue-600" },
    { icon: Phone, title: "Call Us", details: ["+91 98125 09301", "+91 97281 59301"], color: "bg-green-500/10 text-green-600" },
    { icon: MessageCircle, title: "WhatsApp", details: ["+91 97281 59301", "Quick Response"], color: "bg-emerald-500/10 text-emerald-600" },
    { icon: Clock, title: "Working Hours", details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"], color: "bg-purple-500/10 text-purple-600" },
  ];

  return (
    <PageTransition>
      <SEO
        title="Contact Us | Get Quote | 3 Units in Bawal, Haryana | +91 98125 09301"
        description="Contact Precision Engineering Products. 3 manufacturing units in IMT Bawal, Haryana. Email: info@precisions.co.in | Phone: +91 98125 09301 | WhatsApp available."
        keywords="contact precision engineering, get quote manufacturing, Bawal factory contact, engineering inquiry"
        canonical="/contact"
      />
      <main className="overflow-x-hidden">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary to-navy-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
          <div className="container-custom mx-auto relative z-10">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Contact Us", href: "/contact" },
              ]}
            />
            <div className="text-center mt-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              >
                Get In <span className="text-accent">Touch</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-montserrat text-lg text-white/80 max-w-3xl mx-auto"
              >
                Have a project in mind? We'd love to hear from you. Reach out and let's build something great together.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-8 bg-background relative -mt-8 z-20">
          <div className="container-custom mx-auto">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactCards.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-montserrat font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="font-montserrat text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection animation="fadeLeft">
                <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-montserrat"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-montserrat"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-montserrat"
                        placeholder="+91 98XXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-montserrat"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-montserrat"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-montserrat resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex items-center justify-center gap-2 w-full md:w-auto min-w-[200px]"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              </AnimatedSection>

              {/* Location Cards */}
              <AnimatedSection animation="fadeRight" delay={0.2}>
                <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-foreground mb-6">
                  Our Locations
                </h2>
                <div className="space-y-4 mb-8">
                  {locations.map((location, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-card rounded-xl p-6 border border-border shadow-lg hover:border-accent/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-montserrat font-bold text-lg text-foreground">{location.unit}</h3>
                            <span className="px-2 py-0.5 bg-accent/10 text-accent rounded text-xs font-montserrat">
                              {location.specialty}
                            </span>
                          </div>
                          <p className="font-montserrat text-sm text-muted-foreground flex items-start gap-2">
                            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                            {location.address}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-primary to-navy-dark rounded-xl p-6"
                >
                  <h3 className="font-montserrat font-bold text-lg text-white mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, href: "https://linkedin.com/company/precision-group", hoverColor: "hover:bg-accent" },
                      { icon: MessageCircle, href: "https://wa.me/919728159301", hoverColor: "hover:bg-green-500" },
                      { icon: Mail, href: "mailto:info@precisions.co.in", hoverColor: "hover:bg-accent" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center ${social.hoverColor} transition-all duration-300`}
                      >
                        <social.icon className="w-5 h-5 text-white" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <AnimatedSection animation="fadeUp">
          <section className="section-padding bg-secondary">
            <div className="container-custom mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-foreground">
                  Find Us on <span className="text-accent">Map</span>
                </h2>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.1234567890123!2d76.5876543!3d28.0987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA1JzU1LjYiTiA3NsKwMzUnMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Precision Engineering Products Location"
                  className="w-full"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        <Footer />
        <WhatsAppButton />
      </main>
    </PageTransition>
  );
};

export default ContactPage;