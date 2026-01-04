import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { ArrowRight, Building2, Cog, Factory, Filter, HardHat, Train, Truck } from "lucide-react";
import clientFlsmidth from "@/assets/client-flsmidth.png";
import clientMetso from "@/assets/client-metso.png";
import clientTenneco from "@/assets/client-tenneco.png";
import clientValmet from "@/assets/client-valmet.png";

const industries = [
  {
    icon: HardHat,
    title: "Mining & Mineral Processing",
    percentage: "56%",
    client: "FLSmidth",
    description: "Comprehensive solutions for mining operations including thickener components, slurry handling equipment, and mineral processing machinery parts.",
    applications: ["Thickener Drive Systems", "Slurry Pumps", "Hydro Cyclones", "Conveyor Components"],
  },
  {
    icon: Truck,
    title: "Material Handling",
    percentage: "29%",
    client: "Metso",
    description: "Robust material handling equipment for bulk material transport and processing in various industrial applications.",
    applications: ["Conveyor Systems", "Chutes & Hoppers", "Feeders", "Screening Equipment"],
  },
  {
    icon: Train,
    title: "Railways & Transportation",
    percentage: "8%",
    client: "Various",
    description: "Precision components for railway rolling stock and transportation equipment meeting stringent quality standards.",
    applications: ["Bogie Components", "Coupler Systems", "Axle Boxes", "Brake Components"],
  },
  {
    icon: Filter,
    title: "Filtration Systems",
    percentage: "4%",
    client: "Various",
    description: "High-quality filtration equipment components for industrial solid-liquid separation applications.",
    applications: ["Filter Press Parts", "Disc Filters", "Belt Filters", "Vacuum Systems"],
  },
  {
    icon: Factory,
    title: "Heavy Machinery",
    percentage: "2%",
    client: "Various",
    description: "Custom heavy machinery components for diverse industrial applications requiring precision engineering.",
    applications: ["Machine Frames", "Gear Boxes", "Heavy Structures", "Custom Fabrication"],
  },
  {
    icon: Cog,
    title: "Automotive Components",
    percentage: "1%",
    client: "Tenneco, Valmet",
    description: "Precision automotive parts and components manufactured to OEM specifications.",
    applications: ["Engine Components", "Transmission Parts", "Suspension Systems", "Custom Parts"],
  },
];

const clients = [
  { name: "FLSmidth", logo: clientFlsmidth, description: "Global mining equipment leader" },
  { name: "Metso", logo: clientMetso, description: "Material handling solutions" },
  { name: "Tenneco", logo: clientTenneco, description: "Automotive components" },
  { name: "Valmet", logo: clientValmet, description: "Process technology" },
];

const testimonials = [
  {
    quote: "Precision Engineering Products has been our trusted partner for critical components. Their quality and delivery performance is exceptional.",
    author: "Procurement Head",
    company: "FLSmidth India",
  },
  {
    quote: "The team at PEP understands our requirements and consistently delivers precision-machined components that meet our stringent specifications.",
    author: "Supply Chain Manager",
    company: "Metso Outotec",
  },
];

const IndustriesPage = () => {
  return (
    <PageTransition>
      <SEO
        title="Industries Served | Mining, Railways, Material Handling | Engineering Solutions"
        description="Serving leading industries: Mining & mineral processing (FLSmidth - 56%), Material handling (Metso - 29%), Railways, Filtration systems, Automotive."
        keywords="mining industry supplier, railway equipment supplier, material handling solutions, engineering industries"
        canonical="/industries"
      />
      <main className="overflow-x-hidden">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary to-navy-dark text-white">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
          <div className="container-custom mx-auto px-4 relative z-10">
            <Breadcrumb items={[{ label: "Industries We Serve" }]} />
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl pt-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Industries We Serve
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl text-white/80 mb-8"
              >
                Delivering precision engineering solutions across diverse industrial sectors. 
                Trusted by global leaders in mining, material handling, and automotive industries.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sector Expertise
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our diverse portfolio serves multiple industries with specialized solutions
              </p>
            </AnimatedSection>
            
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors"
                        >
                          <industry.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                        </motion.div>
                        <span className="text-3xl font-bold text-accent">{industry.percentage}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{industry.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{industry.description}</p>
                      
                      <div className="border-t border-border pt-4 mt-4">
                        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Key Applications:</p>
                        <div className="flex flex-wrap gap-2">
                          {industry.applications.map((app, appIndex) => (
                            <span
                              key={appIndex}
                              className="text-xs bg-secondary text-foreground px-2 py-1 rounded"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 bg-secondary">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Valued Clients
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trusted by industry leaders worldwide
              </p>
            </AnimatedSection>
            
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-card p-8 rounded-xl border border-border flex flex-col items-center text-center"
                  >
                    <div className="h-20 flex items-center justify-center mb-4">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-bold text-foreground">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
            </AnimatedSection>
            
            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card p-8 rounded-xl border border-border relative"
                  >
                    <div className="text-6xl text-primary/20 absolute top-4 left-6">"</div>
                    <blockquote className="text-foreground mb-6 relative z-10 pt-8">
                      {testimonial.quote}
                    </blockquote>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Appreciation Letters */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Appreciation & Recognition
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Letters of appreciation from our valued partners
              </p>
            </AnimatedSection>
            
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((_, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="aspect-[3/4] bg-card rounded-xl border border-border overflow-hidden group cursor-pointer"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <Building2 className="w-16 h-16 text-primary/30" />
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection animation="fadeUp">
          <section className="section-padding bg-primary text-white">
            <div className="container-custom mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join our growing list of satisfied clients. Let's discuss how we can support your manufacturing needs.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/#contact"
                  className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                >
                  Get in Touch <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default IndustriesPage;