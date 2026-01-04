import { useEffect, useRef, useState } from "react";
import { Award, Users, Zap, Globe, Shield, TrendingUp } from "lucide-react";
import teamImg from "@/assets/team.jpg";
import facilityImg from "@/assets/facility.jpg";


const WhyChooseUs = () => {
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


  const reasons = [
    {
      icon: Award,
      title: "18+ Years Experience",
      description: "Proven track record since 2007 in precision manufacturing",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled workforce committed to quality excellence",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "ISO certified processes meeting international norms",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "100% inspection and testing of every component",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "Latest technology and manufacturing techniques",
    },
  ];


  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3">
              Why Choose Us
            </p>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Your Trusted <span className="text-accent">Manufacturing Partner</span>
            </h2>
            <p className="font-montserrat text-lg text-muted-foreground leading-relaxed mb-8">
              With over 18 years of experience, state-of-the-art facilities, and a commitment 
              to excellence, we deliver manufacturing solutions that exceed expectations.
            </p>


            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-foreground mb-1">
                        {reason.title}
                      </h3>
                      <p className="font-montserrat text-sm text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Images Side */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={facilityImg} 
                  alt="Manufacturing Facility" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>


              {/* Secondary Image - Overlapped */}
              <div className="absolute -bottom-8 -left-8 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                <img 
                  src={teamImg} 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>


              {/* Stats Badge */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default WhyChooseUs;
