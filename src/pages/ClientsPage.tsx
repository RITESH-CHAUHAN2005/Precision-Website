import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Star, Quote, ArrowRight, CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import flsmidthLogo from "@/assets/client-flsmidth.png";
import metsoLogo from "@/assets/client-metso.png";
import tennecoLogo from "@/assets/client-tenneco.png";
import valmetLogo from "@/assets/client-valmet.png";

const ClientsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const majorClients = [
    {
      name: "FLSmidth",
      contribution: "56%",
      logo: flsmidthLogo,
      description: "Our largest partner since 2010. We supply critical components for their mining and cement equipment globally.",
      partnership: "Strategic supply partner for thickener drives, filter press components, and material handling systems. Recognized as Green Category Supplier.",
      projects: "50+ projects delivered",
    },
    {
      name: "Metso",
      contribution: "29%",
      logo: metsoLogo,
      description: "Trusted supplier for sustainable technology solutions in mining and aggregates industries.",
      partnership: "Key supplier for slurry pump solutions, hydro cyclones, and wear-resistant components. Long-term collaboration since 2015.",
      projects: "30+ projects delivered",
    },
  ];

  const otherClients = [
    { name: "Tenneco", logo: tennecoLogo, description: "Automotive components and emission control systems" },
    { name: "Valmet", logo: valmetLogo, description: "Pulp, paper, and energy industry solutions" },
  ];

  const testimonials = [
    {
      quote: "Precision Engineering has consistently delivered high-quality components that meet our stringent specifications. Their attention to detail and commitment to deadlines make them an invaluable partner.",
      author: "Procurement Head",
      company: "FLSmidth India",
      rating: 5,
    },
    {
      quote: "We've worked with many suppliers, but Precision Engineering stands out for their technical expertise and ability to handle complex custom requirements.",
      author: "Supply Chain Manager",
      company: "Metso Outotec",
      rating: 5,
    },
    {
      quote: "Their quality management system and on-time delivery record have made them a preferred supplier for our critical components.",
      author: "Vendor Development",
      company: "Tenneco",
      rating: 5,
    },
  ];

  const caseStudies = [
    { title: "Large-Scale Thickener Project", client: "FLSmidth", description: "Supplied complete drive components for a 45-meter diameter thickener installation.", outcome: "Delivered ahead of schedule with zero defects", value: "₹2.5 Cr" },
    { title: "Filter Press System Overhaul", client: "Metso", description: "Complete replacement of wear parts and structural components for a high-capacity filter press.", outcome: "Extended equipment life by 40%", value: "₹1.8 Cr" },
    { title: "Custom Hydro Cyclone Assembly", client: "Mining Major", description: "Designed and manufactured custom hydro cyclone components for a mineral processing plant.", outcome: "15% improvement in separation efficiency", value: "₹1.2 Cr" },
    { title: "Railway Component Supply", client: "Indian Railways Vendor", description: "Precision-machined components for railway infrastructure and rolling stock.", outcome: "100% acceptance rate in quality inspection", value: "₹0.8 Cr" },
  ];

  return (
    <PageTransition>
      <SEO
        title="Our Clients | FLSmidth, Metso, Tenneco, Valmet | Trusted Manufacturing Partner"
        description="Proudly serving industry leaders: FLSmidth (56%), Metso (29%), Tenneco, Valmet. Green category supplier. Customer appreciation and quality recognition."
        keywords="FLSmidth supplier, Metso partner, manufacturing clients, green category supplier, trusted vendor"
        canonical="/clients"
      />
      <main className="overflow-x-hidden">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary to-navy-dark relative overflow-hidden">
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
                { label: "Our Clients", href: "/clients" },
              ]}
            />
            <div className="text-center mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full mb-6"
              >
                <Award className="w-4 h-4" />
                <span className="font-montserrat font-medium text-sm">Green Category Supplier</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              >
                Proudly Serving <span className="text-accent">Industry Leaders</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-montserrat text-lg text-white/80 max-w-3xl mx-auto"
              >
                Building lasting partnerships with global manufacturing giants through quality, precision, and reliability
              </motion.p>
            </div>
          </div>
        </section>

        {/* Major Clients Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3">
                Strategic Partners
              </p>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground">
                Our Major <span className="text-accent">Clients</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid lg:grid-cols-2 gap-8 mb-12">
              {majorClients.map((client, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-2xl p-8 border border-border shadow-xl"
                  >
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 bg-secondary rounded-xl flex items-center justify-center p-4">
                        <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">{client.name}</h3>
                        <span className="inline-block px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-montserrat font-semibold">
                          {client.contribution} Contribution
                        </span>
                      </div>
                    </div>
                    <p className="font-montserrat text-muted-foreground mb-4">{client.description}</p>
                    <p className="font-montserrat text-sm text-foreground mb-4">{client.partnership}</p>
                    <div className="flex items-center gap-2 text-accent">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-montserrat font-semibold">{client.projects}</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Other Clients */}
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherClients.map((client, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-secondary rounded-xl p-6 text-center border border-border"
                  >
                    <div className="h-16 flex items-center justify-center mb-4">
                      <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
                    </div>
                    <h4 className="font-montserrat font-bold text-lg text-foreground mb-2">{client.name}</h4>
                    <p className="font-montserrat text-sm text-muted-foreground">{client.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
              <StaggerItem className="col-span-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-primary to-navy-dark rounded-xl p-6 text-center h-full flex flex-col justify-center"
                >
                  <Users className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h4 className="font-montserrat font-bold text-lg text-white mb-2">Other Valued Clients</h4>
                  <p className="font-montserrat text-sm text-white/80 mb-4">15% contribution from various industry partners</p>
                  <p className="font-montserrat text-xs text-white/60">Including automotive, railway, and general engineering sectors</p>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Customer Appreciation Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3">Recognition</p>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground">
                Customer <span className="text-accent">Appreciation</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid lg:grid-cols-2 gap-8 mb-12">
              {[
                { icon: Award, title: "Certificate of Appreciation", source: "FLSmidth India - May 2023", quote: "In recognition of outstanding quality and delivery performance as a valued supply partner for our mining and cement equipment divisions.", badge: "Green Category Supplier", badgeColor: "bg-green-100 text-green-700" },
                { icon: Star, title: "Appreciation from Metso", source: "Metso Outotec - 2023", quote: "We appreciate Precision Engineering's commitment to quality and their ability to meet our demanding specifications for critical mining components.", badge: "Preferred Supplier", badgeColor: "bg-blue-100 text-blue-700" },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-2xl p-8 border border-border shadow-lg"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                        <item.icon className="w-8 h-8 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-bold text-xl text-foreground">{item.title}</h3>
                        <p className="font-montserrat text-sm text-muted-foreground">{item.source}</p>
                      </div>
                    </div>
                    <div className="bg-secondary rounded-xl p-6 mb-4">
                      <p className="font-montserrat text-foreground italic">"{item.quote}"</p>
                    </div>
                    <span className={`px-3 py-1 ${item.badgeColor} rounded-full text-sm font-montserrat font-medium`}>
                      {item.badge}
                    </span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3">What They Say</p>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground">
                Client <span className="text-accent">Testimonials</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-card rounded-2xl p-8 border border-border shadow-lg h-full"
                  >
                    <Quote className="w-10 h-10 text-accent/30 mb-4" />
                    <p className="font-montserrat text-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-foreground">{testimonial.author}</p>
                      <p className="font-montserrat text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3">Success Stories</p>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground">
                Project <span className="text-accent">Highlights</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-montserrat font-medium">
                        {study.client}
                      </span>
                      <span className="font-montserrat font-bold text-lg text-accent">{study.value}</span>
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">{study.title}</h3>
                    <p className="font-montserrat text-muted-foreground mb-4">{study.description}</p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-montserrat text-sm font-medium">{study.outcome}</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection animation="fadeUp">
          <section className="section-padding bg-gradient-to-br from-primary via-primary to-navy-dark">
            <div className="container-custom mx-auto text-center">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">
                Become Our Partner
              </h2>
              <p className="font-montserrat text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Join our growing list of satisfied clients. Experience the Precision difference in quality, delivery, and service.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        <Footer />
        <WhatsAppButton />
      </main>
    </PageTransition>
  );
};

export default ClientsPage;
