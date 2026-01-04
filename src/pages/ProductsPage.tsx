import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import TypewriterText from "@/components/TypewriterText";
import { ArrowRight, Factory, Settings, Wrench, CheckCircle, Gauge, Cog, Target, Workflow } from "lucide-react";
import rotaryAirlockImg from "@/assets/Rotary Airlock Valve.jpeg";


const productCategories = [
  {
    id: "thickener-drive-components",
    title: "Thickener Drive Components",
    description: "High-precision drive components for thickener systems used in mining and mineral processing.",
    image: "https://www.metso.com/contentassets/5176a8d9eb994bb583931b642ad06766/hctwithreactorwell-rebranded_forscreenusedpi150-1.jpg?preset=preset_700x700_no-crop",
  },
  {
    id: "filter-press-systems",
    title: "Filter Press Systems",
    description: "Complete filter press components and assemblies for industrial filtration applications.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXkzZMt5mIxZDFa-ob1TSs41hrDfEY3-RLQ&s",
  },
  {
    id: "slurry-pump-solutions",
    title: "Slurry Pump Solutions",
    description: "Heavy-duty slurry pump components designed for abrasive material handling.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzYlq9CvH5R2DtlXYW1TbUZGmIZZb9_q-CQ&s",
  },
  // {
  //   id: "hydro-cyclones",
  //   title: "Hydro Cyclones",
  //   description: "Precision-engineered hydro cyclone components for separation and classification.",
  //   image: "https://5.imimg.com/data5/SELLER/Default/2025/1/481506285/GO/QT/KU/4758425/industrial-hydro-cyclone.jpg",
  // },
  {
    id: "disc-filter-components",
    title: "Disc Filter Components",
    description: "Specialized disc filter parts for continuous filtration processes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRjuMsSefPMoh4ru-SrrCuRLoz_R7Riv6jQ&s",
  },
  // {
  //   id: "material-handling-equipment",
  //   title: "Material Handling Equipment",
  //   description: "Robust material handling solutions for industrial and mining operations.",
  //   image: "https://mrosupply2-uploads.s3.amazonaws.com/uploads/2019/08/20/screenshot_112.png",
  // },
  {
    id: "railway-mining-equipment",
    title: "Railway & Mining Equipment",
    description: "Heavy machinery components for railway and mining industry applications.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KvD6hD85AUz8zMNfMgl4TPhkN5hPS2mrVw&s",
  },
  {
    id: "custom-fabrication",
    title: "Custom Fabrication Services",
    description: "Bespoke fabrication solutions tailored to your specific requirements.",
    image: "https://www.teknoflow.co/wp-content/uploads/2023/04/SS-Custom-Fabrication-e1681125029848.jpg",
  },
];


const materialGrades = [
  { name: "Ductile Iron", specs: "GGG40, GGG50, GGG60" },
  { name: "EN8D", specs: "Carbon Steel" },
  { name: "EN24 QT", specs: "Quenched & Tempered" },
  { name: "EN19 QT", specs: "Chromium-Molybdenum" },
  { name: "ASTM 4140", specs: "Alloy Steel" },
  { name: "ASTM 4340", specs: "High-Strength Alloy" },
];


const ProductsPage = () => {
  return (
    <PageTransition>
      <SEO
        title="Heavy Machinery Products | Mining Equipment | Automotive Parts | Precision Engineering"
        description="Manufacturing heavy duty machinery & automotive products: Thickener drives, filter press, slurry pumps, hydro cyclones, disc filters, material handling equipment, rotary airlock valves."
        keywords="heavy machinery products, mining equipment manufacturer, automotive parts, thickener drive, filter press, slurry pump, hydro cyclone, rotary airlock valve, VMC machining, CNC turning, VTL machining"
        canonical="/products"
      />
      <main className="overflow-x-hidden">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary to-navy-dark text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop')] opacity-10 bg-cover bg-center" />
          <div className="container-custom mx-auto px-4 relative z-10">
            <Breadcrumb items={[{ label: "Products" }]} />
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl pt-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <TypewriterText 
                  text="Heavy Duty Machinery & Automotive Products" 
                  speed={50}
                  delay={300}
                />
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl text-white/80 mb-8"
              >
                Precision-engineered components for mining, material handling, and industrial applications. 
                ISO 9001:2015 certified manufacturing excellence.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/facilities"
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    View Facilities
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Production Capacity Banner */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-accent text-white py-6"
        >
          <div className="container-custom mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3"
              >
                <Factory className="w-8 h-8" />
                <div>
                  <p className="text-2xl font-bold">High Capacity</p>
                  <p className="text-sm opacity-80">Production Capability</p>
                </div>
              </motion.div>
              <div className="hidden md:block w-px h-12 bg-white/30" />
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3"
              >
                <Settings className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
                <div>
                  <p className="text-2xl font-bold">Expanding</p>
                  <p className="text-sm opacity-80">Continuous Growth</p>
                </div>
              </motion.div>
              <div className="hidden md:block w-px h-12 bg-white/30" />
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3"
              >
                <Wrench className="w-8 h-8" />
                <div>
                  <p className="text-2xl font-bold">Multiple Units</p>
                  <p className="text-sm opacity-80">Manufacturing Facilities</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Rotary Airlock Valve Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeLeft">
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                  Rotary Airlock Valve
                </h2>
                <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                  Our precision-engineered Rotary Airlock Valves are designed for reliable material handling in bulk processing applications. These valves provide an effective air seal while allowing controlled material flow in pneumatic conveying systems.
                </p>
                <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                  Manufactured with high-quality materials and advanced machining techniques, our rotary airlock valves ensure long-lasting performance in demanding industrial environments including cement, food processing, chemical, and mining industries.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Heavy-duty construction for abrasive materials</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Precision machined rotors for minimal air leakage</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Available in various sizes and configurations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Customizable for specific application requirements</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeRight" delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={rotaryAirlockImg} 
                    alt="Rotary Airlock Valve" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Advanced Machining Capabilities Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-montserrat font-semibold mb-2 tracking-widest uppercase">
                Precision Manufacturing
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Advanced Machining Capabilities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                State-of-the-art machinery delivering exceptional precision and quality for complex industrial components
              </p>
            </AnimatedSection>

            {/* Integrated Manufacturing Workflow */}
            <AnimatedSection className="mb-16">
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <Workflow className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-montserrat font-bold text-foreground">
                    Integrated Manufacturing Workflow
                  </h3>
                </div>
                <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                  Our VMC, CNC, and VTL machines work in perfect synergy to create a complete manufacturing ecosystem. Each machine specializes in specific operations, yet they complement each other to handle components from initial roughing to final precision finishing [web:44].
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/50 rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                      <h4 className="font-montserrat font-semibold text-foreground">VTL - Primary Operations</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Large, heavy components start on the VTL for initial turning, facing, and boring operations. The vertical orientation stabilizes heavy workpieces using gravity [web:46][web:50].</p>
                  </div>
                  <div className="bg-white/50 rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">2</div>
                      <h4 className="font-montserrat font-semibold text-foreground">VMC - Precision Milling</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Components move to VMC for detailed vertical milling, drilling, tapping, and complex 3D contours. Multi-axis capabilities enable intricate geometries [web:42][web:51].</p>
                  </div>
                  <div className="bg-white/50 rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                      <h4 className="font-montserrat font-semibold text-foreground">CNC - Final Finishing</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">CNC turning centers perform final precision turning, threading, and grooving. Live tooling enables secondary operations in a single setup [web:47][web:49].</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="space-y-16">
              {/* VTL Machine Section */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="fadeRight" delay={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src="https://www.ameraseikicnc.com/images/cnc-machinery/VT-1600R.jpg" 
                      alt="Vertical Turret Lathe (VTL)" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection animation="fadeLeft">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-primary" />
                    <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground">
                      Vertical Turret Lathe (VTL)
                    </h3>
                  </div>
                  <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                    Our VTL machines are the foundation of heavy component manufacturing. Unlike horizontal lathes, the vertical orientation uses gravity to stabilize large, disc-shaped workpieces like turbine rotors, gear blanks, and pump housings, eliminating sagging and distortion [web:46][web:48].
                  </p>
                  <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                    The horizontal rotating table securely holds workpieces while cutting tools mounted on vertical rams perform turning, boring, and facing operations along multiple axes. This design is ideal for components too large or heavy for conventional horizontal lathes [web:47][web:50].
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">Handles large diameter components up to several meters [web:46]</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">Dual turret system with automated tool changers [web:48]</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">Gravity-assisted stability prevents part distortion [web:50]</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">Multi-axis CNC control for complex geometries [web:48]</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* VMC Machine Section */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="fadeLeft">
                  <div className="flex items-center gap-3 mb-4">
                    <Gauge className="w-8 h-8 text-primary" />
                    <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground">
                      Vertical Machining Center (VMC)
                    </h3>
                  </div>
                  <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                    VMC is a specialized CNC machine with a vertically-oriented spindle that moves along X, Y, and Z axes while the workpiece remains stationary on the table. This configuration is perfect for milling flat surfaces, drilling precise holes, and creating complex 3D contours [web:42][web:51].
                  </p>
                  <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                    Our VMCs feature automatic tool changers (ATC) that can switch between dozens of cutting tools in seconds, enabling continuous multi-operation machining without manual intervention. Advanced 5-axis VMCs can approach workpieces from any angle for ultimate flexibility [web:44][web:51].
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">3-axis to 5-axis machining capabilities [web:44]</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">Precision tolerances up to ±0.005mm [web:42]</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">Automatic tool changer with 20+ tool capacity [web:51]</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">Ideal for drilling, milling, tapping, and boring [web:49]</p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeRight" delay={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBucKImUVLVCPnLa6cgubHTsihipHYwtPWQ&s" 
                      alt="Vertical Machining Center (VMC)" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </motion.div>
                </AnimatedSection>
              </div>

              {/* CNC Machine Section */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="fadeRight" delay={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src="https://www.indiantradebird.com/content/images/thumb/638114662761508087_what-cnc-milling-machine-to-buy.png" 
                      alt="CNC Turning and Milling Center" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection animation="fadeLeft">
                  <div className="flex items-center gap-3 mb-4">
                    <Cog className="w-8 h-8 text-primary" />
                    <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground">
                      CNC Turning & Milling Center
                    </h3>
                  </div>
                  <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                    CNC (Computer Numerical Control) is the umbrella term for all digitally-controlled machining equipment. Our CNC turning centers specialize in rotating cylindrical parts while cutting tools shape them. Modern CNC lathes feature live tooling - rotating tools that perform milling operations during turning [web:47][web:49].
                  </p>
                  <p className="text-muted-foreground font-montserrat leading-relaxed mb-6">
                    Multi-tasking CNC machines combine turning and milling in one setup, drastically reducing production time and improving accuracy by eliminating multiple setups. Sub-spindles capture finished parts from the main spindle for secondary operations, enabling complete part processing unmanned [web:44][web:47].
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">Multi-tasking turning and milling in one setup [web:44]</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">Live tooling for secondary milling operations [web:47]</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">Sub-spindle for complete part processing [web:44]</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">High-speed spindles up to 6000 RPM [web:49]</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Grid */}
<section className="section-padding bg-secondary">
  <div className="container-custom mx-auto px-4">
    <AnimatedSection className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Our Product Range
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Comprehensive range of heavy machinery components manufactured to the highest quality standards
      </p>
    </AnimatedSection>
    
    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {productCategories.map((product) => (
        <StaggerItem key={product.id}>
          <Link
            to={`/products/${product.id}`}
            className="group block"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-border h-full"
            >
              <div className="aspect-[4/3] bg-secondary overflow-hidden">
                <motion.img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center text-primary font-semibold text-sm">
                  View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          </Link>
        </StaggerItem>
      ))}
    </StaggerContainer>
  </div>
</section>


        {/* Material Grades Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Material Grades We Work With
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We source and machine a wide range of high-quality materials to meet diverse industrial requirements
              </p>
            </AnimatedSection>
            
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialGrades.map((material, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-2">{material.name}</h3>
                    <p className="text-muted-foreground">{material.specs}</p>
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
                Need Custom Manufacturing Solutions?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Our engineering team is ready to help you with custom fabrication and precision machining services
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


export default ProductsPage;
