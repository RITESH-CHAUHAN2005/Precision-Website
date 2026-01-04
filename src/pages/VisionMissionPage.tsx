import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Handshake, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import TypewriterText from "@/components/TypewriterText";
import AnimatedCounter from "@/components/AnimatedCounter";
import facilityImg from "@/assets/facility.jpg";

const VisionMissionPage = () => {
  const coreValues = [
    {
      icon: Handshake,
      title: "Cooperation",
      description: "Working together with our partners and stakeholders to achieve mutual success and growth.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong relationships through teamwork, open communication, and shared goals.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Putting our customers at the center of everything we do, understanding their needs deeply.",
    },
    {
      icon: Shield,
      title: "Professional Ethics & Integrity",
      description: "Maintaining the highest standards of ethics, transparency, and integrity in all business dealings.",
    },
  ];

  const missionPillars = [
    { title: "Quality", description: "Delivering products that exceed customer expectations" },
    { title: "Cost", description: "Competitive pricing without compromising on quality" },
    { title: "On-Time Delivery", description: "Meeting deadlines consistently and reliably" },
    { title: "Safety", description: "Ensuring safe working conditions for all stakeholders" },
  ];

  return (
    <PageTransition>
      <SEO
        title="Our Vision & Mission | Quality Manufacturing Excellence | Precision Engineering Products"
        description="Our vision: Long-term trusted business partner delivering quality products. Core values: Cooperation, Collaboration, Customer Focus, Professional Ethics."
        keywords="manufacturing vision, quality mission, engineering values, sustainable manufacturing"
        canonical="/vision-mission"
      />
      <main className="overflow-x-hidden">
        <Header />
        
        {/* Vision Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <img src={facilityImg} alt="Facility" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
            >
              <Eye className="w-6 h-6 text-accent" />
              <span className="font-montserrat font-semibold tracking-widest">OUR VISION</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-8"
            >
              <TypewriterText 
                text='"Develop as a long-term trusted business partner delivering quality products"'
                speed={40}
                delay={500}
              />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl font-montserrat font-light opacity-90 max-w-3xl mx-auto"
            >
              We aspire to be the most trusted name in precision engineering, known for 
              excellence, reliability, and innovation across the globe.
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeLeft">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6"
                >
                  <Target className="w-6 h-6 text-primary" />
                  <span className="font-montserrat font-semibold text-primary tracking-widest">OUR MISSION</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                  Committed to Excellence in Every Component
                </h2>
                <p className="text-muted-foreground font-montserrat leading-relaxed mb-8 text-lg">
                  Our mission is to deliver precision-engineered products that meet the highest 
                  quality standards while ensuring competitive pricing, on-time delivery, and 
                  unwavering commitment to safety. We strive to create value for our customers, 
                  employees, and community through sustainable business practices.
                </p>
              </AnimatedSection>
              <StaggerContainer className="grid grid-cols-2 gap-4">
                {missionPillars.map((pillar, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary"
                    >
                      <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground font-montserrat text-sm">
                        {pillar.description}
                      </p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-montserrat font-semibold mb-2 tracking-widest">
                WHAT DRIVES US
              </p>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground">
                Our Core Values
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl p-8 text-center shadow-lg group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300"
                    >
                      <value.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <h3 className="text-xl font-montserrat font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-montserrat text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Commitment Statement */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Our Commitment to You
              </h2>
              <p className="text-xl font-montserrat font-light opacity-90 leading-relaxed mb-8">
                At Precision Engineering Products, we understand that our success is measured 
                by the success of our customers. Every component we manufacture carries our 
                promise of quality, precision, and reliability.
              </p>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { value: 100, suffix: "%", label: "Quality Assurance" },
                { value: 24, suffix: "/7", label: "Customer Support" },
                { value: 17, suffix: "+", label: "Years of Trust" },
              ].map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
                  >
                    <p className="text-4xl font-montserrat font-bold text-accent mb-2">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="font-montserrat">{stat.label}</p>
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

export default VisionMissionPage;