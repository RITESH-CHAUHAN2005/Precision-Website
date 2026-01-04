import { useEffect, useRef, useState } from "react";

// Temporary: Use existing images or placeholders
import cooperationImg from "@/assets/facility.jpg"; // Replace with actual cooperation.jpg
import collaborationImg from "@/assets/team.jpg"; // Replace with actual collaboration.jpg
import customerFocusImg from "@/assets/facility.jpg"; // Replace with actual customer-focus.jpg
import professionalEthicsImg from "@/assets/team.jpg"; // Replace with actual professional-ethics.jpg


const CoreValues = () => {
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


  const values = [
    {
      image: cooperationImg,
      title: "Co-operation",
      description: "Working together with clients and partners to achieve shared success through mutual support.",
    },
    {
      image: collaborationImg,
      title: "Collaboration",
      description: "Building strong partnerships with stakeholders to deliver innovative engineering solutions.",
    },
    {
      image: customerFocusImg,
      title: "Customer Focus",
      description: "Putting our clients first, understanding their needs, and exceeding their expectations.",
    },
    {
      image: professionalEthicsImg,
      title: "Professional Ethics",
      description: "Maintaining the highest standards of integrity, transparency, and ethical business practices.",
    },
  ];


  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-poppins font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our Foundation
          </p>
          <h2
            className={`font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Core <span className="text-accent">Values</span>
          </h2>
        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group bg-secondary rounded-2xl overflow-hidden card-lift border border-transparent hover:border-accent/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-poppins font-bold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default CoreValues;
