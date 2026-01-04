import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Users, Building2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import TypewriterText from "@/components/TypewriterText";
import factoryBg from "@/assets/factory.jpg";
import assemblyBg from "@/assets/assembly.jpg";
import machiningSrc from "@/assets/machining.jpg";
import facilityBg from "@/assets/facility.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const carouselImages = [
    { src: factoryBg, alt: "Factory Floor" },
    { src: assemblyBg, alt: "Assembly Line" },
    { src: machiningSrc, alt: "Machining Process" },
    { src: facilityBg, alt: "Manufacturing Facility" },
  ];

  const trustBadges = [];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Carousel with Blue Overlay on All Slides */}
      <div className="absolute inset-0">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="h-screen relative">
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${image.src})` }}
                >
                  {/* Slightly darker blue overlay - increased from 35/25/45 to 45/35/55 */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/45 via-blue-900/35 to-blue-900/55 pointer-events-none" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/10 border-white/30 hover:bg-white/20 text-white backdrop-blur-sm" />
          <CarouselNext className="right-4 bg-white/10 border-white/30 hover:bg-white/20 text-white backdrop-blur-sm" />
        </Carousel>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-accent font-montserrat font-semibold text-lg md:text-xl mb-4 tracking-wider uppercase"
          >
            Since 2007 • Bawal, Haryana
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
          >
            <TypewriterText
              text="Quality Engineering Solutions Since 2007"
              speed={60}
              delay={800}
              className="text-white"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-montserrat text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Precision Engineering Products - Your trusted partner for heavy machinery
            and automotive parts manufacturing with unmatched quality, precision, and reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary pulse-glow"
            >
              Get a Quote
            </motion.a>
            <motion.a
              href="#capabilities"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              Our Capabilities
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-white/20"
              >
                <badge.icon className="w-6 h-6 text-accent" />
                <div className="text-left">
                  <p className="text-white font-bold">{badge.label}</p>
                  <p className="text-white/70 text-sm">{badge.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
