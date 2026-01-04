import { motion } from "framer-motion";
import { Download, Shield, Award, CheckCircle, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import isoCertificateImg from "@/assets/iso-certificate.jpg";
import facilityImg from "@/assets/facility.jpg";

const QualityCertificationsPage = () => {
  const qualityFeatures = [
    "Incoming raw material inspection",
    "In-process quality checks at every stage",
    "Final product inspection before dispatch",
    "Dimensional accuracy verification using CMM",
    "Non-destructive testing (NDT)",
    "Material testing and certification",
    "Traceability of all materials",
    "Continuous improvement programs",
  ];

  const hseFeatures = [
    "Safe working environment for all employees",
    "Regular safety training and drills",
    "Personal protective equipment (PPE) for all workers",
    "Fire safety systems and emergency protocols",
    "Environmental compliance and waste management",
    "Health monitoring and wellness programs",
  ];

  return (
    <PageTransition>
      <SEO
        title="ISO 9001:2015 Certified | Quality Management System | HSE Policy | Precision Engineering"
        description="ISO 9001:2015 certified manufacturer with robust quality management system. Health, Safety & Environment (HSE) policy compliant. Green category supplier for FLSmidth."
        keywords="ISO 9001:2015 certification, quality management, HSE policy, green supplier, certified manufacturer"
        canonical="/quality-certifications"
      />
      <main className="overflow-x-hidden">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <img src={facilityImg} alt="Quality Facility" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-primary/85" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
            >
              <Award className="w-6 h-6 text-accent" />
              <span className="font-montserrat font-semibold tracking-widest">CERTIFIED EXCELLENCE</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl font-montserrat font-bold mb-6"
            >
              Quality & Certifications
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl font-montserrat font-light opacity-90 max-w-2xl mx-auto"
            >
              ISO 9001:2015 Certified | FLSmidth Green Category Supplier
            </motion.p>
          </div>
        </section>

        {/* ISO Certificate Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeLeft">
                <div className="relative group">
                  <motion.img
                    src={isoCertificateImg}
                    alt="ISO 9001:2015 Certificate"
                    className="rounded-xl shadow-2xl w-full"
                    loading="lazy"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 rounded-xl" />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-6 right-6 bg-accent text-white px-6 py-3 rounded-lg font-montserrat font-semibold flex items-center gap-2 hover:bg-red-dark transition-colors shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    Download Certificate
                  </motion.button>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeRight" delay={0.2}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-3 bg-green-100 px-4 py-2 rounded-full mb-6"
                >
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="font-montserrat font-semibold text-green-700">ISO 9001:2015 CERTIFIED</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                  International Quality Standards
                </h2>
                <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                  Precision Engineering Products is certified to ISO 9001:2015, the internationally 
                  recognized standard for quality management systems. This certification demonstrates 
                  our commitment to consistent quality, customer satisfaction, and continuous improvement.
                </p>
                <div className="bg-secondary p-6 rounded-xl">
                  <h4 className="font-montserrat font-bold text-foreground mb-3">Certificate Details</h4>
                  <div className="space-y-2 text-sm font-montserrat">
                    <p><span className="text-muted-foreground">Certificate No:</span> <span className="font-semibold">QMS-2023-XXXX</span></p>
                    <p><span className="text-muted-foreground">Valid Until:</span> <span className="font-semibold">December 2026</span></p>
                    <p><span className="text-muted-foreground">Certifying Body:</span> <span className="font-semibold">Bureau Veritas</span></p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Quality Policy Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-montserrat font-semibold mb-2 tracking-widest">
                OUR COMMITMENT
              </p>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground">
                Quality Policy
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <StaggerItem>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl shadow-lg h-full"
                >
                  <h3 className="text-xl font-montserrat font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">EN</span>
                    English
                  </h3>
                  <p className="text-muted-foreground font-montserrat leading-relaxed">
                    At Precision Engineering Products, we are committed to delivering products and 
                    services that consistently meet or exceed customer expectations. We achieve this through:
                  </p>
                  <ul className="mt-4 space-y-2">
                    {[
                      "Continuous improvement of our quality management system",
                      "Employee training and skill development",
                      "Compliance with applicable regulations and standards",
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 text-foreground font-montserrat text-sm"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl shadow-lg h-full"
                >
                  <h3 className="text-xl font-montserrat font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">हिं</span>
                    हिंदी
                  </h3>
                  <p className="text-muted-foreground font-montserrat leading-relaxed">
                    प्रिसिजन इंजीनियरिंग प्रोडक्ट्स में, हम ऐसे उत्पाद और सेवाएं प्रदान करने के लिए प्रतिबद्ध हैं 
                    जो लगातार ग्राहकों की अपेक्षाओं को पूरा करते हैं या उससे अधिक होते हैं।
                  </p>
                  <ul className="mt-4 space-y-2">
                    {[
                      "गुणवत्ता प्रबंधन प्रणाली में निरंतर सुधार",
                      "कर्मचारी प्रशिक्षण और कौशल विकास",
                      "लागू नियमों और मानकों का अनुपालन",
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 text-foreground font-montserrat text-sm"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* HSE Policy Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeLeft">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-3 bg-orange-100 px-4 py-2 rounded-full mb-6"
                >
                  <Shield className="w-5 h-5 text-orange-600" />
                  <span className="font-montserrat font-semibold text-orange-700">HSE POLICY</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                  Health, Safety & Environment
                </h2>
                <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                  स्वास्थ्य, सुरक्षा और पर्यावरण नीति
                </p>
                <p className="text-muted-foreground font-montserrat leading-relaxed mb-8">
                  We are committed to providing a safe and healthy work environment for all our 
                  employees, contractors, and visitors. Our HSE policy ensures compliance with 
                  all applicable health, safety, and environmental regulations.
                </p>
                <div className="space-y-3">
                  {hseFeatures.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-foreground font-montserrat">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
              <StaggerContainer className="grid grid-cols-2 gap-4">
                {qualityFeatures.map((feature, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-secondary p-4 rounded-lg flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-montserrat text-sm">{feature}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Green Category Supplier */}
        <section className="section-padding bg-green-50">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 bg-green-200 px-6 py-3 rounded-full mb-6"
              >
                <Leaf className="w-6 h-6 text-green-700" />
                <span className="font-montserrat font-semibold text-green-800">GREEN CATEGORY SUPPLIER</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                FLSmidth Green Category Supplier
              </h2>
              <p className="text-muted-foreground font-montserrat leading-relaxed mb-8 text-lg">
                We are proud to be recognized as a Green Category Supplier by FLSmidth, 
                one of the world's leading suppliers to the mining and cement industries. 
                This recognition reflects our commitment to sustainable manufacturing practices 
                and environmental responsibility.
              </p>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Leaf, title: "Sustainable Practices", desc: "Eco-friendly manufacturing processes" },
                { icon: Shield, title: "Quality Assurance", desc: "Rigorous quality control standards" },
                { icon: Award, title: "Global Recognition", desc: "Trusted by international partners" },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md text-center"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-montserrat font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-montserrat text-sm">{item.desc}</p>
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

export default QualityCertificationsPage;