import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import castingImg from "@/assets/products-1.jpg";
import machiningImg from "@/assets/products-2.jpg";
import fabricationImg from "@/assets/products-3.jpg";
import assemblyImg from "@/assets/products-2.jpg"; // Replace with actual assembly image


const Capabilities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );


    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);


  const capabilities = [
    {
      image: castingImg,
      title: "Casting",
      capacity: "Services",
      description: "Advanced foundry capabilities with precision casting for complex geometries and various alloys including steel, iron, and specialized metals.",
      features: ["Sand Casting", "Investment Casting", "Die Casting", "Quality Testing"],
      link: "/products/thickener-drive-components"
    },
    {
      image: machiningImg,
      title: "Machining",
      capacity: "CNC Precision",
      description: "State-of-the-art CNC machining centers delivering tight tolerances and superior surface finishes for critical components.",
      features: ["CNC Turning", "CNC Milling", "Grinding", "Threading"],
      link: "/facilities"
    },
    {
      image: fabricationImg,
      title: "Fabrication",
      capacity: "Custom Solutions",
      description: "Expert metal fabrication services with advanced welding techniques and surface treatments for durable, high-quality structural components.",
      features: ["MIG/TIG/Arc Welding", "Sheet Metal Work", "Heat Treatment", "Surface Coating"],
      link: "/products/custom-fabrication"
    },
    {
      image: assemblyImg,
      title: "Assembly",
      capacity: "Full Integration",
      description: "Complete assembly solutions for complex machinery and industrial equipment with rigorous quality control and testing protocols.",
      features: ["Component Assembly", "Sub-Assembly", "Final Testing", "Quality Inspection"],
      link: "/products/material-handling-equipment"
    },
  ];


  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Our Expertise
          </p>
          <h2
            className={`font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-foreground transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Manufacturing <span className="text-accent">Capabilities</span>
          </h2>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <Link
              key={index}
              to={cap.link}
              className={`group bg-card rounded-2xl overflow-hidden shadow-lg border border-border card-lift transition-all duration-500 block ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cap.image} 
                  alt={cap.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-montserrat font-bold text-xl text-white mb-1">
                    {cap.title}
                  </h3>
                  <p className="font-montserrat font-semibold text-accent text-sm">
                    {cap.capacity}
                  </p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <p className="font-montserrat text-muted-foreground text-sm leading-relaxed mb-5">
                  {cap.description}
                </p>
                
                <ul className="space-y-2">
                  {cap.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="font-montserrat text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Capabilities;
