import { useEffect, useRef, useState } from "react";
import { Hammer, Settings, Package, Truck, ClipboardCheck, Users } from "lucide-react";
import assemblyImg from "@/assets/assembly.jpg";

const Services = () => {
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

  const services = [
    {
      icon: Hammer,
      title: "Manufacturing",
      description: "End-to-end manufacturing solutions from concept to delivery",
    },
    {
      icon: Settings,
      title: "Engineering Support",
      description: "Technical consultation and design optimization services",
    },
    {
      icon: Package,
      title: "Custom Solutions",
      description: "Tailored manufacturing solutions for unique requirements",
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Timely delivery and supply chain management",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Testing",
      description: "Comprehensive testing and certification services",
    },
    {
      icon: Users,
      title: "After-Sales Support",
      description: "Ongoing support and maintenance services",
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={assemblyImg} alt="" className="w-full h-full object-cover opacity-5" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            What We Offer
          </p>
          <h2
            className={`font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-foreground transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Comprehensive <span className="text-accent">Services</span>
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            From initial concept to final delivery, we provide complete manufacturing solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-8 border border-border shadow-lg card-lift transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-montserrat text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
