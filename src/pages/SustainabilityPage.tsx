import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Shield, Leaf, Recycle, AlertTriangle, Users, TrendingUp, CheckCircle, Zap, Droplets, Wind } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";

const SustainabilityPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const hsePoints = [
    { icon: Shield, title: "Legislative Compliance", description: "Strict adherence to all applicable health, safety, and environmental regulations." },
    { icon: Users, title: "Strong Leadership", description: "Management commitment to HSE excellence with dedicated resources." },
    { icon: AlertTriangle, title: "Risk Elimination", description: "Systematic identification and elimination of HSE hazards." },
    { icon: TrendingUp, title: "Awareness Programs", description: "Regular training and awareness campaigns for all employees." },
    { icon: CheckCircle, title: "Strong HSE Culture", description: "Building a workplace culture where safety is everyone's responsibility." },
  ];

  const processImprovements = [
    { title: "ERP Implementation", subtitle: "Transzact System", features: ["Real-time production tracking", "Inventory management optimization", "Quality traceability", "Automated reporting", "Resource planning"] },
    { title: "Planning Optimization", subtitle: "Lean Manufacturing", features: ["Reduced lead times", "Minimized waste", "Improved workflow efficiency", "Better capacity utilization", "Streamlined operations"] },
    { title: "Quality Enhancement", subtitle: "Continuous Improvement", features: ["Temperature-controlled inspection", "Advanced measurement systems", "Statistical process control", "Zero-defect initiatives", "Customer feedback integration"] },
  ];

  return (
    <PageTransition>
      <SEO
        title="Sustainability & HSE Policy | 200 KW Solar System | Clean Manufacturing | PEP"
        description="Committed to sustainable manufacturing: 200 KW solar system, HSE policy compliant, ERP-driven process improvements, workplace safety focus."
        keywords="sustainable manufacturing, solar power factory, HSE policy, clean manufacturing, energy efficient"
        canonical="/sustainability"
      />
      <main className="overflow-x-hidden">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-green-700 via-green-800 to-green-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
          <div className="container-custom mx-auto relative z-10">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Sustainability", href: "/sustainability" },
              ]}
            />
            <div className="text-center mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6"
              >
                <Leaf className="w-4 h-4" />
                <span className="font-montserrat font-medium text-sm">Green Manufacturing Initiative</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              >
                Committed to <span className="text-green-300">Sustainable Manufacturing</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-montserrat text-lg text-white/80 max-w-3xl mx-auto"
              >
                Building a greener future through responsible manufacturing practices, renewable energy, and continuous improvement
              </motion.p>
            </div>
          </div>
        </section>

        {/* Environmental Initiatives */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="text-green-600 font-montserrat font-semibold text-sm uppercase tracking-wider mb-3">
                Environmental Initiatives
              </p>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground">
                Our Green <span className="text-green-600">Commitments</span>
              </h2>
            </AnimatedSection>

            {/* Solar Project Highlight */}
            <AnimatedSection animation="fadeUp" className="mb-12">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-yellow-200"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full mb-6"
                    >
                      <Sun className="w-5 h-5" />
                      <span className="font-montserrat font-semibold text-sm">Under Commissioning</span>
                    </motion.div>
                    <h3 className="font-montserrat font-bold text-3xl text-foreground mb-4">
                      200 KW Solar Power System
                    </h3>
                    <p className="font-montserrat text-lg text-muted-foreground mb-6">
                      We're installing a state-of-the-art 200 KW solar power system to significantly reduce our carbon footprint and transition towards renewable energy.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Expected to offset 240 tonnes of CO2 annually",
                        "30% reduction in grid power consumption",
                        "Payback period of 4-5 years",
                        "25-year system lifespan",
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="font-montserrat text-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-center"
                  >
                    <Sun className="w-24 h-24 text-white mx-auto mb-4" />
                    <p className="font-montserrat font-bold text-5xl text-white mb-2">
                      <AnimatedCounter target={200} suffix=" KW" />
                    </p>
                    <p className="font-montserrat text-white/90">Solar Capacity</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Other Environmental Initiatives */}
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Droplets, title: "Water Conservation", desc: "Rainwater harvesting and recycling systems to minimize water consumption.", color: "bg-blue-100", iconColor: "text-blue-600" },
                { icon: Recycle, title: "Waste Management", desc: "Comprehensive waste segregation and recycling. Metal scrap is 100% recycled.", color: "bg-green-100", iconColor: "text-green-600" },
                { icon: Wind, title: "Clean Air Initiatives", desc: "Advanced dust collection systems and proper ventilation for air quality.", color: "bg-purple-100", iconColor: "text-purple-600" },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-card rounded-2xl p-8 border border-border shadow-lg h-full"
                  >
                    <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                      <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">{item.title}</h3>
                    <p className="font-montserrat text-muted-foreground">{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* HSE Policy Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-primary to-navy-dark">
          <div className="container-custom mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3">
                Health, Safety & Environment
              </p>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white">
                Our HSE <span className="text-accent">Policy</span>
              </h2>
            </AnimatedSection>

            {/* Policy Statement */}
            <AnimatedSection animation="fadeUp" className="mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-white mb-4">English</h3>
                    <p className="font-montserrat text-white/90 leading-relaxed">
                      "Precision Engineering Products is committed to providing a safe and healthy workplace for all employees, 
                      contractors, and visitors. We believe that all accidents are preventable and strive for zero incidents."
                    </p>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-white mb-4">हिंदी</h3>
                    <p className="font-montserrat text-white/90 leading-relaxed">
                      "प्रिसिजन इंजीनियरिंग प्रोडक्ट्स सभी कर्मचारियों, ठेकेदारों और आगंतुकों के लिए एक सुरक्षित और स्वस्थ कार्यस्थल 
                      प्रदान करने के लिए प्रतिबद्ध है।"
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* 5 Key Focus Areas */}
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {hsePoints.map((point, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center h-full"
                  >
                    <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                      <point.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-montserrat font-bold text-white mb-2">{point.title}</h3>
                    <p className="font-montserrat text-sm text-white/70">{point.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Safety Statistics */}
            <StaggerContainer className="grid md:grid-cols-4 gap-6">
              {[
                { value: 365, suffix: "+", label: "Days Without LTI", color: "text-accent" },
                { value: 100, suffix: "%", label: "PPE Compliance", color: "text-green-400" },
                { value: 12, suffix: "", label: "Monthly Safety Drills", color: "text-blue-400" },
                { value: 0, suffix: "", label: "Environmental Incidents", color: "text-yellow-400" },
              ].map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                  >
                    <p className={`font-montserrat font-bold text-4xl ${stat.color} mb-2`}>
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="font-montserrat text-white/80">{stat.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Process Improvements */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3">
                Process Improvements
              </p>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground">
                Continuous <span className="text-accent">Enhancement</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid lg:grid-cols-3 gap-8">
              {processImprovements.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-card rounded-2xl p-8 border border-border shadow-lg h-full"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-bold text-xl text-foreground">{item.title}</h3>
                        <p className="font-montserrat text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {item.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="font-montserrat text-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Temperature Controlled Inspection */}
            <AnimatedSection animation="fadeUp" className="mt-12">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-10"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                      Temperature-Controlled Inspection Environment
                    </h3>
                    <p className="font-montserrat text-white/80 mb-6">
                      Our quality inspection area maintains a consistent temperature of 20°C ± 2°C to ensure accurate measurements 
                      and reliable quality verification of precision components.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {["20°C ± 2°C Maintained", "CMM Accuracy", "ISO Standards"].map((tag, index) => (
                        <span key={index} className="px-4 py-2 bg-white/20 rounded-full text-white font-montserrat text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="inline-block bg-white/20 rounded-full p-8"
                    >
                      <p className="font-montserrat font-bold text-6xl text-white">20°C</p>
                      <p className="font-montserrat text-white/80">± 2°C</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </main>
    </PageTransition>
  );
};

export default SustainabilityPage;
