import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import ceoImg from "@/assets/ceo.png";
import procurementHeadImg from "@/assets/procurement-head.jpg";
import teamImg from "@/assets/team.jpg";

const LeadershipPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const ceo = {
    name: "Mr. Dharamveer Choken",
    role: "Chief Executive Officer",
    image: ceoImg,
    description: "Leading Precision Engineering Products with a vision to establish the company as a global leader in precision manufacturing. With decades of experience in the manufacturing industry, Mr. Choken has transformed the company from a small workshop to a multi-unit manufacturing powerhouse.",
    achievements: ["Founded the company in 2007", "Expanded operations to 3 manufacturing units", "Achieved ISO 9001:2015 certification"],
  };

  const seniorLeadership = [
    {
      name: "Mr. Jaikishan",
      role: "Head of Operations",
      image: procurementHeadImg,
      description: "Overseeing all manufacturing operations across three units, ensuring efficiency, quality, and on-time delivery.",
    },
    {
      name: "Mr. Ajay",
      role: "Head of Commercial",
      image: teamImg,
      description: "Managing business development, customer relationships, and commercial operations for sustained growth.",
    },
  ];

  const departmentHeads = [
    { name: "Production Manager", department: "Production" },
    { name: "Quality Manager", department: "Quality Control" },
    { name: "Engineering Manager", department: "Engineering & Design" },
    { name: "HR Manager", department: "Human Resources" },
    { name: "Purchase Manager", department: "Procurement" },
    { name: "Finance Manager", department: "Finance & Accounts" },
  ];

  return (
    <PageTransition>
      <SEO
        title="Leadership Team | Management & Organization Structure | Precision Engineering Products"
        description="Meet our leadership team led by CEO Mr. Dharamveer Choken. Experienced management with heads of operations, commercial, production, quality, and procurement."
        keywords="manufacturing leadership, engineering management team, CEO precision engineering"
        canonical="/leadership"
      />
      <main className="overflow-x-hidden">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-primary">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-accent font-montserrat font-semibold mb-4 tracking-widest"
            >
              MEET OUR TEAM
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl font-montserrat font-bold mb-6"
            >
              Leadership Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl font-montserrat font-light opacity-90 max-w-2xl mx-auto"
            >
              Experienced professionals driving innovation and excellence
            </motion.p>
          </div>
        </section>

        {/* CEO Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeLeft">
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative z-10"
                  >
                    <img
                      src={ceo.image}
                      alt={ceo.name}
                      className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
                      loading="lazy"
                    />
                  </motion.div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-xl -z-0" />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeRight" delay={0.2}>
                <p className="text-accent font-montserrat font-semibold mb-2 tracking-widest">
                  CHIEF EXECUTIVE OFFICER
                </p>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
                  {ceo.name}
                </h2>
                <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                  {ceo.description}
                </p>
                <div className="space-y-3 mb-6">
                  {ceo.achievements.map((achievement, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground font-montserrat">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-montserrat hover:bg-primary/90 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Contact
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-montserrat hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </motion.button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Organization Chart */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-montserrat font-semibold mb-2 tracking-widest">
                ORGANIZATION STRUCTURE
              </p>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground">
                Our Organizational Hierarchy
              </h2>
            </AnimatedSection>
            
            {/* Org Chart Visual */}
            <div className="max-w-4xl mx-auto">
              {/* CEO Level */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-center mb-8"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary text-white px-8 py-4 rounded-xl shadow-lg"
                >
                  <p className="font-montserrat font-bold text-lg">{ceo.name}</p>
                  <p className="font-montserrat text-sm opacity-90">CEO</p>
                </motion.div>
              </motion.div>
              
              {/* Connector Line */}
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                className="flex justify-center mb-8"
              >
                <div className="w-0.5 h-12 bg-primary/30" />
              </motion.div>
              
              {/* Senior Leadership Level */}
              <div className="flex justify-center gap-8 mb-8">
                {seniorLeadership.map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white px-6 py-4 rounded-xl shadow-lg border-t-4 border-primary"
                  >
                    <p className="font-montserrat font-bold">{leader.name}</p>
                    <p className="font-montserrat text-sm text-muted-foreground">{leader.role}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Connector Line */}
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                className="flex justify-center mb-8"
              >
                <div className="w-0.5 h-12 bg-primary/30" />
              </motion.div>
              
              {/* Department Heads */}
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {departmentHeads.map((head, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-white px-4 py-3 rounded-lg shadow-md text-center"
                    >
                      <p className="font-montserrat font-semibold text-sm">{head.name}</p>
                      <p className="font-montserrat text-xs text-muted-foreground">{head.department}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Senior Leadership Cards */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-montserrat font-semibold mb-2 tracking-widest">
                SENIOR LEADERSHIP
              </p>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground">
                Driving Operations & Growth
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {seniorLeadership.map((leader, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                        className="absolute inset-0 bg-primary/60 flex items-center justify-center"
                      >
                        <div className="flex gap-4">
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            className="bg-white text-primary p-3 rounded-full hover:bg-accent hover:text-white transition-colors"
                          >
                            <Mail className="w-5 h-5" />
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            className="bg-white text-primary p-3 rounded-full hover:bg-accent hover:text-white transition-colors"
                          >
                            <Phone className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-montserrat font-bold text-foreground mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-accent font-montserrat font-semibold text-sm mb-3">
                        {leader.role}
                      </p>
                      <p className="text-muted-foreground font-montserrat text-sm">
                        {leader.description}
                      </p>
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

export default LeadershipPage;