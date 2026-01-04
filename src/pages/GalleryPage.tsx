import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import factoryImg from "@/assets/factory.jpg";
import assemblyImg from "@/assets/assembly.jpg";
import machiningImg from "@/assets/machining.jpg";
import facilityImg from "@/assets/facility.jpg";
import product1Img from "@/assets/products-1.jpg";
import product2Img from "@/assets/products-2.jpg";
import product3Img from "@/assets/products-3.jpg";
import teamImg from "@/assets/team.jpg";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Facilities", "Products", "Assembly", "Quality", "Team"];

  const galleryItems = [
    { image: factoryImg, title: "Manufacturing Floor", category: "Facilities", description: "State-of-the-art CNC machining facility" },
    { image: machiningImg, title: "CNC Machining Center", category: "Facilities", description: "Precision machining operations" },
    { image: product1Img, title: "Thickener Components", category: "Products", description: "Heavy-duty mining equipment parts" },
    { image: assemblyImg, title: "Assembly Operations", category: "Assembly", description: "Complex assembly of machinery components" },
    { image: product2Img, title: "Filter Press Parts", category: "Products", description: "Industrial filtration system components" },
    { image: facilityImg, title: "Production Facility", category: "Facilities", description: "Modern manufacturing infrastructure" },
    { image: product3Img, title: "Automotive Components", category: "Products", description: "Precision automotive parts" },
    { image: teamImg, title: "Expert Team", category: "Team", description: "Our skilled workforce" },
    { image: factoryImg, title: "Quality Inspection Area", category: "Quality", description: "Temperature-controlled inspection zone" },
    { image: machiningImg, title: "CNC Turning", category: "Facilities", description: "Advanced turning operations" },
    { image: assemblyImg, title: "Component Assembly", category: "Assembly", description: "Precision assembly work" },
    { image: product1Img, title: "Mining Equipment", category: "Products", description: "Heavy machinery components" },
  ];

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <PageTransition>
      <SEO
        title="Manufacturing Gallery | Facility Photos | Products Showcase | Precision Engineering"
        description="Explore our manufacturing facilities, products, casting plant, assembly operations, and quality inspection areas. 30+ images showcasing our capabilities."
        keywords="manufacturing gallery, factory photos, products showcase, facility images"
        canonical="/gallery"
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
                { label: "Gallery", href: "/gallery" },
              ]}
            />
            <div className="text-center mt-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              >
                Our <span className="text-accent">Gallery</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-montserrat text-lg text-white/80 max-w-3xl mx-auto"
              >
                Explore our manufacturing facilities, products, and the skilled team behind our success
              </motion.p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-background border-b border-border sticky top-[72px] z-30">
          <div className="container-custom mx-auto">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="font-montserrat text-sm text-muted-foreground">Filter by:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full font-montserrat text-sm font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-foreground hover:bg-accent/20"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-[4/3]"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-montserrat font-semibold mb-2 w-fit">
                        {item.category}
                      </span>
                      <h3 className="font-montserrat font-bold text-white text-lg mb-1">{item.title}</h3>
                      <p className="font-montserrat text-sm text-white/80">{item.description}</p>
                    </div>
                    <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="font-montserrat text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Video Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3">
                Virtual Tour
              </p>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground">
                Factory <span className="text-accent">Walkthrough</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" className="max-w-4xl mx-auto">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-navy-dark group cursor-pointer"
              >
                <img
                  src={facilityImg}
                  alt="Factory Tour"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-4 shadow-2xl"
                  >
                    <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                  </motion.div>
                  <p className="font-montserrat font-semibold text-white text-lg">Watch Virtual Factory Tour</p>
                  <p className="font-montserrat text-white/60 text-sm mt-2">Coming Soon</p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-r from-primary to-navy-dark">
          <div className="container-custom mx-auto">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 50000, suffix: "+", label: "Sq.ft Manufacturing Area" },
                { value: 3, suffix: "", label: "Manufacturing Units" },
                { value: 25, suffix: "+", label: "CNC Machines" },
                { value: 100, suffix: "+", label: "Skilled Employees" },
              ].map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <p className="font-montserrat font-bold text-3xl md:text-4xl text-accent mb-2">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="font-montserrat text-white/80 text-sm">{stat.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-10"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                <X className="w-10 h-10" />
              </motion.button>
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={selectedImage}
                alt="Gallery"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
        <WhatsAppButton />
      </main>
    </PageTransition>
  );
};

export default GalleryPage;