import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Factory, TrendingUp, Award, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import TypewriterText from "@/components/TypewriterText";
import Leadership from "@/components/Leadership";
import facilityImg from "@/assets/facility.jpg";
import factoryImg from "@/assets/factory.jpg";
import machiningImg from "@/assets/machining.jpg";
import teamImg from "@/assets/team.jpg";


const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true);
  }, []);


  const milestones = [
    { period: "2008-10", revenue: "3 Cr" },
    { period: "2010-13", revenue: "10 Cr" },
    { period: "2013-16", revenue: "25 Cr" },
    { period: "2016-19", revenue: "46 Cr" },
    { period: "2019-21", revenue: "52 Cr" },
    { period: "2021-25", revenue: "62 Cr" },
  ];


  const units = [
    {
      name: "Unit 1: Casting unit",
      image: machiningImg,
      features: ["CNC Machining", "Heavy Fabrication", "Assembly"],
    },
    {
      name: "Unit 2: Machining unit",
      image: factoryImg,
      features: ["Ferrous Casting", "Non-Ferrous Casting", "Heat Treatment"],
    },
    {
      name: "Unit 3: Fabrication Unit",
      image: facilityImg,
      features: ["NDT Testing", "CMM Inspection", "Material Testing"],
    },
  ];


  return (
    <PageTransition>
      <SEO
        title="About Precision Engineering Products | Manufacturing Facility | Established 2007"
        description="Discover Precision Engineering Products - Established 2007 in Bawal, Haryana. 3 manufacturing units, skilled professionals. Revenue growth from 3 Cr to 62 Cr."
        keywords="precision engineering about, manufacturing company Bawal, engineering products India, ISO certified facility"
        canonical="/about"
      />
      <main className="overflow-x-hidden">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <img src={teamImg} alt="Team" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-accent font-montserrat font-semibold mb-4 tracking-widest"
            >
              ESTABLISHED 2007
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl font-montserrat font-bold mb-6"
            >
              <TypewriterText 
                text="Manufacturing Excellence" 
                speed={50}
                delay={500}
              />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl font-montserrat font-light opacity-90"
            >
              Skilled Professionals committed to manufacturing excellence
            </motion.p>
          </div>
        </section>


        {/* Stats Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, label: "Skilled Professionals" },
                { icon: Factory, label: "Facility Area" },
                { icon: MapPin, label: "Manufacturing Units" },
                { icon: TrendingUp, label: "Production Capacity" },
              ].map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-6 text-center shadow-lg"
                  >
                    <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground font-montserrat text-sm mt-2">{stat.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>


        {/* Leadership Section */}
        <Leadership />


        {/* Company Overview */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeLeft">
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                  Engineering Excellence Since 2007
                </h2>
                <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                  Precision Engineering Products has established itself as a leading manufacturer 
                  of precision-engineered components for mining, mineral processing, and material 
                  handling industries. With state-of-the-art facilities in IMT Bawal, Haryana, we 
                  deliver quality products that meet international standards.
                </p>
                <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                  Our production capacity continues to expand, enabling us to serve our growing 
                  customer base with even greater efficiency and reliability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full"
                  >
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-montserrat text-sm">ISO 9001:2015</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full"
                  >
                    <Factory className="w-5 h-5 text-primary" />
                    <span className="font-montserrat text-sm">Multiple Manufacturing Units</span>
                  </motion.div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeRight" delay={0.2}>
                <div className="relative">
                  <motion.img 
                    src={facilityImg} 
                    alt="Manufacturing Facility" 
                    className="rounded-xl shadow-2xl"
                    loading="lazy"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl"
                  >
                    <p className="text-4xl font-montserrat font-bold">17+</p>
                    <p className="font-montserrat text-sm opacity-90">Years of Excellence</p>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>


        {/* Our Presence */}
        <section id="presence" className="section-padding bg-background">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-montserrat font-semibold mb-2 tracking-widest">
                OUR PRESENCE
              </p>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground">
                Manufacturing Units in IMT Bawal
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {units.map((unit, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img 
                        src={unit.image} 
                        alt={unit.name} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-primary/40" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-montserrat font-bold text-foreground mb-4">
                        {unit.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {unit.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-secondary text-primary text-xs font-montserrat px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>


        <Footer />
      </main>
    </PageTransition>
  );
};


export default AboutPage;
