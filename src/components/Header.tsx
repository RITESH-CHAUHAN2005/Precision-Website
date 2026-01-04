import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-new.png";
import FullScreenNav from "./FullScreenNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when nav is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Product Inspection", href: "/product-inspection" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container-custom mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Precision Group Logo" 
              className="h-14 md:h-16 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {quickLinks.map((link) => (
              link.href.startsWith("#") || link.href.includes("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-montserrat font-medium text-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-montserrat font-medium text-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919812509301"
              className="hidden md:flex items-center gap-2 font-montserrat text-foreground"
            >
              <Phone className="w-4 h-4" />
              +91 98125 09301
            </a>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsNavOpen(true)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors duration-300"
              aria-label="Open menu"
            >
              <Menu className="text-foreground" size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Navigation */}
      <FullScreenNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </>
  );
};

export default Header;
