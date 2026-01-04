import { useEffect, useRef, useState } from "react";
import isoCertificate from "@/assets/iso-certificate.jpg";
import facilityImg from "@/assets/facility.jpg";
import teamImg from "@/assets/team.jpg";
import productsImg from "@/assets/products-1.jpg";

const Quality = () => {
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

  const qualityFeatures = [
    {
      image: isoCertificate,
      title: "ISO 9001:2015 Certified",
      description:
        "Our internationally certified Quality Management System ensures consistent delivery of products that meet customer and regulatory requirements. We maintain rigorous documentation and process controls across all operations.",
      features: ["Certified Since 2015", "Annual Audits", "Global Standards Compliance"],
      imagePosition: "left",
    },
    {
      image: facilityImg,
      title: "100% Product Inspection",
      description:
        "Every component undergoes comprehensive testing and inspection at multiple stages of production. Our quality control team uses advanced measuring instruments to verify dimensional accuracy and material specifications.",
      features: ["In-Process Inspection", "Final Quality Check", "Material Testing"],
      imagePosition: "right",
    },
    {
      image: teamImg,
      title: "Skilled Quality Team",
      description:
        "Our dedicated quality assurance professionals bring years of expertise in precision engineering standards. Continuous training programs ensure our team stays updated with latest quality control methodologies and industry best practices.",
      features: ["Expert QA Personnel", "Regular Training", "Process Optimization"],
      imagePosition: "left",
    },
    {
      image: productsImg,
      title: "Complete Traceability",
      description:
        "From raw material procurement to final delivery, we maintain detailed documentation of every production step. Full traceability ensures accountability and enables quick resolution of any quality concerns.",
      features: ["Material Certificates", "Process Records", "Delivery Documentation"],
      imagePosition: "right",
    },
  ];

  return (
    <section id="quality" ref={sectionRef} className="section-padding bg-secondary relative overflow-hidden">
      <div className="container-custom mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Quality Assurance
          </p>
          <h2
            className={`font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-foreground transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Commitment to <span className="text-accent">Excellence</span>
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            At Precision Engineering Products, quality isn't just a department—it's our culture
          </p>
        </div>

        {/* Quality Features - Alternating Layout */}
        <div className="space-y-12 md:space-y-16">
          {qualityFeatures.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`bg-card rounded-2xl overflow-hidden shadow-xl border border-border grid grid-cols-1 md:grid-cols-2 gap-0 ${
                  feature.imagePosition === "right" ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative h-64 md:h-auto min-h-[300px] overflow-hidden ${
                    feature.imagePosition === "right" ? "md:col-start-2" : ""
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 ${
                      feature.imagePosition === "left"
                        ? "bg-gradient-to-r from-transparent to-card/30"
                        : "bg-gradient-to-l from-transparent to-card/30"
                    }`}
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-montserrat text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.features.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-montserrat font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
