import { Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-new.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Facilities", href: "/facilities" },
    { name: "Contact", href: "/contact" },
  ];

  const productLinks = [
    { name: "Thickener Components", href: "/products/thickener-drive-components" },
    { name: "Filter Press Systems", href: "/products/filter-press-systems" },
    { name: "Slurry Pump Solutions", href: "/products/slurry-pump-solutions" },
    { name: "Material Handling", href: "/products/material-handling-equipment" },
  ];

  const services = [
    "Casting Services",
    "CNC Machining",
    "Fabrication",
    "Assembly",
    "Quality Testing",
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-navy-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Precision Group" className="h-16 w-auto mb-6 brightness-0 invert" />
            <p className="font-montserrat text-white/80 leading-relaxed mb-6">
              ISO 9001:2015 certified manufacturer of heavy machinery and automotive parts. 
              Quality, Precision, Reliability since 2007.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-montserrat text-white/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="font-montserrat text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-montserrat text-white/80 text-sm">info@precisions.co.in</p>
                  <p className="font-montserrat text-white/80 text-sm">admin@precisions.co.in</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-montserrat text-white/80 text-sm">+91 98125 09301</p>
                  <p className="font-montserrat text-white/80 text-sm">+91 97281 59301</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <p className="font-montserrat text-white/80 text-sm">
                  IMT Bawal, Rewari<br />
                  Haryana - 123501
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action Banner
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                Ready to Start Your Project?
              </h3>
              <p className="font-montserrat text-white/80">
                Get in touch with us today for a free consultation
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary whitespace-nowrap bg-accent hover:bg-accent/90"
            >
              Get a Quote
            </a>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-montserrat text-white/60 text-sm text-center md:text-left">
              © {currentYear} Precision Engineering Products. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-montserrat text-white/60 text-sm hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-montserrat text-white/60 text-sm hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
