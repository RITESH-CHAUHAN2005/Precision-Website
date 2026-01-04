import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItem {
  title: string;
  href?: string;
  subItems?: { title: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    title: "Company",
    subItems: [
      { title: "About Us", href: "/about" },
      { title: "Our Presence (3 Units in Bawal)", href: "/facilities" },
      { title: "Vision & Mission", href: "/vision-mission" },
      { title: "Leadership Team", href: "/leadership" },
      { title: "Quality & Certifications (ISO 9001:2015)", href: "/quality-certifications" },
      // { title: "Business Performance", href: "/business-performance" },
    ],
  },
  {
    title: "Products & Services",
    subItems: [
      { title: "All Products", href: "/products" },
      { title: "Product Inspection", href: "/product-inspection" },
      { title: "Thickener Drive Components", href: "/products/thickener-drive-components" },
      { title: "Filter Press Systems", href: "/products/filter-press-systems" },
      { title: "Slurry Pump Solutions", href: "/products/slurry-pump-solutions" },
      { title: "Hydro Cyclones", href: "/products/hydro-cyclones" },
      { title: "Disc Filter Components", href: "/products/disc-filter-components" },
      { title: "Material Handling Equipment", href: "/products/material-handling-equipment" },
      { title: "Railway & Mining Equipment", href: "/products/railway-mining-equipment" },
      { title: "Custom Fabrication", href: "/products/custom-fabrication" },
    ],
  },
  // {
  //   title: "Industries",
  //   subItems: [
  //     { title: "All Industries", href: "/industries" },
  //     { title: "Mining & Mineral Processing", href: "/industries/mining-mineral-processing" },
  //     { title: "Material Handling", href: "/industries/material-handling" },
  //     { title: "Railways & Transportation", href: "/industries/railways-transportation" },
  //     { title: "Filtration Systems", href: "/industries/filtration-systems" },
  //   ],
  // },
  {
    title: "Facilities",
    subItems: [
      { title: "Our Facilities", href: "/facilities" },
      { title: "Unit 1: Machining & Fabrication", href: "/facilities/unit-1-machining-fabrication" },
      { title: "Unit 2: Casting Plant", href: "/facilities/unit-2-casting-plant" },
      { title: "Manufacturing Capabilities", href: "/capabilities" },
      { title: "Quality Assurance", href: "/quality-certifications" },
    ],
  },
  {
    title: "Our Clients",
    href: "/clients",
  },
  {
    title: "Sustainability",
    href: "/sustainability",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

interface FullScreenNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenNav = ({ isOpen, onClose }: FullScreenNavProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedItems([]);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-accent transition-colors duration-300 z-10"
        aria-label="Close menu"
      >
        <X size={40} strokeWidth={1.5} />
      </button>

      {/* Navigation Content */}
      <div className="h-full overflow-y-auto py-20 px-6 md:px-12">
        <nav className="max-w-4xl mx-auto">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.title} className="border-b border-white/10">
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleExpand(item.title)}
                      className="w-full flex items-center justify-between py-4 text-white text-2xl md:text-3xl font-montserrat font-light hover:text-accent transition-colors duration-300"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-6 h-6 transition-transform duration-300 ${
                          expandedItems.includes(item.title) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedItems.includes(item.title)
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="pl-6 pb-4 space-y-3">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.title}>
                            <Link
                              to={subItem.href}
                              onClick={handleLinkClick}
                              className="text-white/70 text-lg md:text-xl font-montserrat font-light hover:text-accent hover:pl-2 transition-all duration-300 block"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href || "/"}
                    onClick={handleLinkClick}
                    className="block py-4 text-white text-2xl md:text-3xl font-montserrat font-light hover:text-accent transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8 text-white/60 font-montserrat">
            <div>
              <p className="text-white text-lg mb-2">Get in Touch</p>
              <p className="text-sm">+91 98125 09301</p>
              <p className="text-sm">info@precisiongroup.in</p>
            </div>
            <div>
              <p className="text-white text-lg mb-2">Location</p>
              <p className="text-sm">IMT Bawal, Haryana, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
