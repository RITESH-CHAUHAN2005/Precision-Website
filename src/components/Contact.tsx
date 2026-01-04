import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import facilityImg from "@/assets/facility.jpg";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@precisions.co.in", "admin@precisions.co.in"],
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98125 09301", "+91 97281 59301"],
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["IMT Bawal, Rewari", "Haryana - 123501"],
      color: "bg-red-500/10 text-red-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      color: "bg-purple-500/10 text-purple-600",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-5">
        <img src={facilityImg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Get In Touch
          </p>
          <h2
            className={`font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-foreground transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Let's Build <span className="text-accent">Together</span>
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-6 border border-border shadow-lg card-lift transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg ${info.color} flex items-center justify-center mb-4`}>
                <info.icon className="w-6 h-6" />
              </div>
              <h4 className="font-montserrat font-semibold text-lg text-foreground mb-3">
                {info.title}
              </h4>
              {info.details.map((detail, idx) => (
                <p key={idx} className="font-montserrat text-sm text-muted-foreground mb-1">
                  {detail}
                </p>
              ))}
            </div>
          ))}
          
          {/* Additional Info Card */}
          <div
            className={`bg-gradient-to-br from-accent to-accent/80 rounded-xl p-6 text-white shadow-lg card-lift transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h4 className="font-montserrat font-semibold text-lg mb-3">
              Global Reach
            </h4>
            <p className="font-montserrat text-sm text-white/90 mb-2">
              Serving clients worldwide
            </p>
            <p className="font-montserrat text-sm text-white/90">
              Export quality standards
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 shadow-2xl border border-border">
            <h3 className="font-montserrat font-bold text-2xl text-foreground mb-6">
              Request a Quote
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
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

            <div className="grid md:grid-cols-2 gap-6 mb-6">
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

            <div className="mb-6">
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

            <button
              type="submit"
              className="w-full md:w-auto btn-primary flex items-center justify-center gap-2 min-w-[200px]"
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
