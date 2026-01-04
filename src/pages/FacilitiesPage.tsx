import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import TypewriterText from "@/components/TypewriterText";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ArrowRight, Building2, Factory, Flame, MapPin, Settings, Thermometer, Wrench } from "lucide-react";

const unit1Capabilities = [
  { icon: Settings, title: "CNC Machining Center", description: "State-of-the-art CNC machines for precision machining" },
  { icon: Wrench, title: "Fabrication Workshop", description: "Full-fledged fabrication facility with modern equipment" },
  { icon: Building2, title: "Assembly Bays", description: "Dedicated bays for TLM, DRW, Packer, FRW assemblies" },
  { icon: Thermometer, title: "Temperature-controlled Inspection", description: "Climate-controlled area for precise dimensional inspection" },
];

const unit2Capabilities = [
  { icon: Flame, title: "Inductotherm Furnace", description: "1000kg + 500kg capacity induction furnaces" },
  { icon: Factory, title: "Total Capacity: 1500kg", description: "Combined furnace capacity for large-scale production" },
  { icon: Settings, title: "Ductile Iron Casting", description: "Specialized in ductile iron and other alloy castings" },
];

const FacilitiesPage = () => {
  return (
    <PageTransition>
      <SEO
        title="Manufacturing Facilities | Machining, Fabrication, Casting Plant | 3 Units in Bawal"
        description="3 state-of-the-art manufacturing units in Bawal: Unit 1 - Machining & Fabrication (14k sq.m), Unit 2 - Casting Plant (1500kg capacity). CNC machining, assembly bays."
        keywords="manufacturing facility Bawal, casting plant, machining center, fabrication workshop, CNC facility"
        canonical="/facilities"
      />
      <main className="overflow-x-hidden">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary to-navy-dark text-white">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
          <div className="container-custom mx-auto px-4 relative z-10">
            <Breadcrumb items={[{ label: "Facilities" }]} />
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl pt-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <TypewriterText 
                  text="State-of-the-Art Manufacturing Facilities"
                  speed={40}
                  delay={300}
                />
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl text-white/80 mb-8"
              >
                Three state-of-the-art manufacturing units in IMT Bawal, Haryana, 
                equipped with modern machinery and dedicated workforce.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Unit 1 Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeLeft">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
                >
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">Unit 1</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Machining, Fabrication & Assembly
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Plot No. 192-G, Sector-4, Phase-1, IMT Bawal</span>
                </div>
                <p className="text-muted-foreground mb-8">
                  Our primary manufacturing facility houses advanced CNC machining centers, 
                  comprehensive fabrication workshops, and dedicated assembly bays for various 
                  product lines. The temperature-controlled inspection area ensures precise 
                  quality control.
                </p>
                
                <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                  {unit1Capabilities.map((cap, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-card p-4 rounded-xl border border-border hover:border-primary/50 transition-colors"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                          <cap.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{cap.title}</h3>
                        <p className="text-sm text-muted-foreground">{cap.description}</p>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </AnimatedSection>

              <AnimatedSection animation="fadeRight" delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square bg-secondary rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Factory className="w-12 h-12 text-primary/40" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

        {/* Unit 2 Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeLeft" className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square bg-card rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Flame className="w-12 h-12 text-accent/40" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeRight" delay={0.2} className="order-1 lg:order-2">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6"
                >
                  <Flame className="w-5 h-5" />
                  <span className="font-semibold">Unit 2</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Casting Plant
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Plot No. 5-C, Sector-15, IMT Bawal</span>
                </div>
                <p className="text-muted-foreground mb-8">
                  Our dedicated casting facility features Inductotherm furnaces with 
                  combined capacity of 1500kg. Specialized in ductile iron casting 
                  and various alloy castings to support our manufacturing requirements.
                </p>
                
                <div className="space-y-4">
                  {unit2Capabilities.map((cap, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-card p-4 rounded-xl border border-border hover:border-accent/50 transition-colors flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <cap.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{cap.title}</h3>
                        <p className="text-sm text-muted-foreground">{cap.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capacity Stats */}
        <section className="py-12 bg-primary text-white">
          <div className="container-custom mx-auto px-4">
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: 3, suffix: "", label: "Manufacturing Units" },
                { value: 100, suffix: "T", label: "Monthly Capacity" },
                { value: 1500, suffix: "kg", label: "Furnace Capacity" },
                { value: 300, suffix: "T", label: "Planned Expansion" },
              ].map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <p className="text-4xl md:text-5xl font-bold mb-2">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-white/70">{stat.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection animation="fadeUp">
          <section className="section-padding bg-background">
            <div className="container-custom mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Want to See Our Capabilities?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Learn more about our manufacturing capabilities and how we can support your production needs
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/capabilities"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    View Capabilities <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/#contact"
                    className="bg-card border-2 border-primary text-primary font-semibold px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    Schedule a Visit
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default FacilitiesPage;