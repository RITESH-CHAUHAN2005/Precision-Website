import { useEffect, useRef, useState } from "react";
import dharmvirChokenImage from "@/assets/dharmvirchoken.jpeg";
import ajayChokenImage from "@/assets/ajaychoken.jpeg";
import jayKishanChokenImage from "@/assets/jaykishanchoken.jpeg";
import ankitChokenImage from "@/assets/ankitchoken.jpg";

const Leadership = () => {
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

  const leaders = [
    {
      name: "Mr. Dharmvir Choken",
      role: "Director",
      image: dharmvirChokenImage,
      description:
        "With over 25 years of experience in precision engineering and manufacturing, Mr. Dharmvir Choken leads Precision Group with a vision for excellence and innovation.",
    },
    {
      name: "Mr. Jai Kishan Choken",
      role: "Managing Director",
      image: jayKishanChokenImage,
      description:
        "A B.Tech graduate with Indian Air Force and sales leadership experience, Mr. Jai Kishan Choken brings strategic vision and operational excellence to our organization.",
    },
    {
      name: "Mr. Ajay Choken",
      role: "Admin Finance",
      image: ajayChokenImage,
      description:
        "Mr. Ajay Choken brings dynamic energy and expertise to our financial and administrative operations. His focus on building strong processes ensures organizational efficiency.",
    },
    {
      name: "Mr. Ankit Bhamla",
      role: "Production Head",
      image: ankitChokenImage,
      description:
        "Holding a B.Tech in Mechanical Engineering, Mr. Ankit Bhamla leverages his technical expertise to optimize procurement processes and ensure quality delivery.",
    },
  ];

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="section-padding bg-secondary"
    >
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <p
            className={`text-accent font-poppins font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            Our Leadership
          </p>
          <h2
            className={`font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground transition-all duration-500 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Meet the <span className="text-accent">Visionaries</span>
          </h2>
          <p
            className={`font-inter text-muted-foreground mt-4 max-w-2xl mx-auto transition-all duration-500 delay-200 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            Driven by passion and expertise, our leadership team guides Precision Group
            towards excellence in every endeavor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`bg-background rounded-xl overflow-hidden shadow-lg card-lift border border-border transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                  <h3 className="font-poppins font-bold text-lg text-white">
                    {leader.name}
                  </h3>
                  <p className="font-inter text-accent font-semibold text-sm">
                    {leader.role}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
