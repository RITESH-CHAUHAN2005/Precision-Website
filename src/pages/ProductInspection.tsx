import { useEffect, useRef, useState } from "react";
import { CheckCircle, Shield, Eye, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

// Import images for Inspection By Quality
import inspectionByQuality1 from "@/assets/inspectionbyquality1.jpg";
import inspectionByQuality2 from "@/assets/inspectionbyquality2.jpg";
import inspectionByQuality3 from "@/assets/inspectionbyquality3.jpg";
import inspectionByQuality4 from "@/assets/inspectionbyquality4.jpg";

// Import images for Temperature Controlled Room
import temperatureControlled1 from "@/assets/temperaturecontrolled1.jpg";
import temperatureControlled2 from "@/assets/temperaturecontrolled2.jpg";
import temperatureControlled3 from "@/assets/temperaturecontrolled3.jpg";
import temperatureControlled4 from "@/assets/temperaturecontrolled4.jpg";

// Import images for Parts Inspection
import partsInspection1 from "@/assets/partsinspection1.jpg";
import partsInspection2 from "@/assets/partsinspection2.jpg";
import partsInspection3 from "@/assets/partsinspection3.jpg";
import partsInspection4 from "@/assets/partsinspection4.jpg";

// Import single image for Castings Inspection After Machining
import machiningStage from "@/assets/machiningstage.jpg";

// Import images for Castings Inspection (section 5)
import castingsInspection1 from "@/assets/castingsinspection1.jpg";
import castingsInspection2 from "@/assets/castingsinspection2.jpg";
import castingsInspection3 from "@/assets/castingsinspection3.jpg";
import castingsInspection4 from "@/assets/castingsinspection4.jpg";

// Import images for Cement Packer
import cementPacker1 from "@/assets/cementpacker1.jpg";
import cementPacker2 from "@/assets/cementpacker2.jpg";
import cementPacker3 from "@/assets/cementpacker3.jpg";
import cementPacker4 from "@/assets/cementpacker4.jpg";

// Import image for Fabrication
import fabrication from "@/assets/fabrication.jpg";

// Import images for Castings (section 7)
import castings1 from "@/assets/castings1.jpg";
import castings2 from "@/assets/castings2.jpg";

const ProductInspectionPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const inspectionServices = [
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: "Quality Assurance",
      description:
        "Comprehensive quality checks ensuring every product meets international standards and specifications.",
    },
    {
      icon: <Eye className="w-12 h-12 text-accent" />,
      title: "Visual Inspection",
      description:
        "Detailed visual examination of products to identify defects, damages, or inconsistencies in manufacturing.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-accent" />,
      title: "Dimensional Verification",
      description:
        "Precise measurement and verification of product dimensions using advanced metrology equipment.",
    },
    {
      icon: <Award className="w-12 h-12 text-accent" />,
      title: "Certification Support",
      description:
        "Complete documentation and certification support for product compliance and quality standards.",
    },
  ];

  const inspectionProcess = [
    "Initial Product Assessment",
    "Dimensional & Specification Verification",
    "Material Quality Testing",
    "Visual & Functional Inspection",
    "Documentation & Reporting",
    "Final Approval & Certification",
  ];

  // Images for Inspection By Quality section
  const inspectionByQualityImages = [
    inspectionByQuality1,
    inspectionByQuality2,
    inspectionByQuality3,
    inspectionByQuality4,
  ];

  // Images for Temperature Controlled section
  const temperatureControlledImages = [
    temperatureControlled1,
    temperatureControlled2,
    temperatureControlled3,
    temperatureControlled4,
  ];

  // Images for Parts Inspection section
  const partsInspectionImages = [
    partsInspection1,
    partsInspection2,
    partsInspection3,
    partsInspection4,
  ];

  // Images for Final Stage Castings Inspection (section 5)
  const castingsInspectionImages = [
    castingsInspection1,
    castingsInspection2,
    castingsInspection3,
    castingsInspection4,
  ];

  // Images for Cement Packer (4 images)
  const cementPackerImages = [
    cementPacker1,
    cementPacker2,
    cementPacker3,
    cementPacker4,
  ];

  // Images for Castings With Machining and Paint (only 2 images)
  const castingsWithMachiningImages = [castings1, castings2];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary to-navy-dark text-white">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
          <div className="container-custom mx-auto px-4 relative z-10">
            <Breadcrumb items={[{ label: "Product Inspection Services" }]} />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl pt-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Product Inspection Services
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl text-white/80 mb-8"
              >
                Ensuring Quality Excellence Through Comprehensive Inspection Solutions
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={sectionRef} className="section-padding bg-background">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <p
                className={`text-accent font-poppins font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                Our Services
              </p>
              <h2
                className={`font-poppins font-bold text-3xl md:text-4xl text-foreground transition-all duration-500 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Comprehensive Inspection <span className="text-accent">Solutions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {inspectionServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-secondary p-6 rounded-xl border border-border hover:shadow-xl transition-all duration-500 card-lift ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="font-poppins font-bold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1. Inspection By Quality Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
                Inspection By <span className="text-accent">Quality</span>
              </h2>
              <p className="font-inter text-muted-foreground max-w-3xl mx-auto text-lg">
                Our quality inspection process ensures that every component meets stringent standards before proceeding to the next manufacturing stage. We utilize advanced measuring instruments and visual inspection techniques to maintain consistency and precision across all products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {inspectionByQualityImages.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border group"
                >
                  <img
                    src={img}
                    alt={`Quality Inspection ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-poppins text-sm">Quality Check Process</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-background p-6 rounded-xl border border-border">
              <p className="font-inter text-foreground leading-relaxed">
                Our inspection by quality methodology incorporates systematic checks at multiple stages, ensuring dimensional accuracy, surface finish quality, and material compliance. Each component undergoes rigorous testing protocols that include visual inspection for defects, measurement verification using precision instruments, and functional testing to validate performance parameters.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Temperature Controlled Standard Room Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
                Temperature Controlled <span className="text-accent">Standard Room</span>
              </h2>
              <p className="font-inter text-muted-foreground max-w-3xl mx-auto text-lg">
                Our state-of-the-art temperature-controlled inspection room maintains optimal environmental conditions to ensure accurate measurement and inspection results. Climate control eliminates thermal expansion variables that could affect precision measurements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {temperatureControlledImages.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border group"
                >
                  <img
                    src={img}
                    alt={`Temperature Controlled Room ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-poppins text-sm">Climate Controlled Facility</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-secondary p-6 rounded-xl border border-border">
              <p className="font-inter text-foreground leading-relaxed">
                Maintained at a constant temperature of 20°C ±2°C with controlled humidity levels, our inspection room provides the ideal environment for conducting precise dimensional verification. This facility is equipped with advanced metrology equipment including CMM (Coordinate Measuring Machines), height gauges, and precision measurement tools that deliver micron-level accuracy for critical components.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Parts Inspection Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
                Parts <span className="text-accent">Inspection</span>
              </h2>
              <p className="font-inter text-muted-foreground max-w-3xl mx-auto text-lg">
                Comprehensive inspection of individual parts and components to verify conformance with engineering drawings and specifications. Every part is meticulously examined before assembly integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {partsInspectionImages.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border group"
                >
                  <img
                    src={img}
                    alt={`Parts Inspection ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-poppins text-sm">Parts Quality Check</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-background p-6 rounded-xl border border-border">
              <p className="font-inter text-foreground leading-relaxed">
                Our parts inspection process includes dimensional verification, surface roughness measurement, hardness testing, and visual examination for defects. We employ both manual and automated inspection methods to ensure 100% compliance with customer specifications. Critical dimensions are measured using calibrated instruments, and inspection reports are generated for complete traceability.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Castings Inspection After Machining Stage - Single Image */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
                Castings Inspection <span className="text-accent">After Machining</span>
              </h2>
              <p className="font-inter text-muted-foreground max-w-3xl mx-auto text-lg">
                Post-machining inspection of castings ensures that all machined surfaces meet dimensional tolerances and surface finish requirements specified in the engineering drawings.
              </p>
            </div>

            <div className="mb-8 max-w-4xl mx-auto">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-border group">
                <img
                  src={machiningStage}
                  alt="Casting After Machining Inspection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-poppins text-sm">Machined Casting Inspection</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-xl border border-border">
              <p className="font-inter text-foreground leading-relaxed">
                After precision machining operations, each casting undergoes thorough inspection to verify critical dimensions, thread specifications, hole positions, and surface finish quality. We check for any machining defects, burrs, or dimensional deviations. Non-destructive testing methods are employed where necessary to ensure internal integrity. All inspection data is documented for quality assurance and customer review.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Casting Inspection at Final Stage After Paint */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
                Casting Inspection <span className="text-accent">Final Stage After Paint</span>
              </h2>
              <p className="font-inter text-muted-foreground max-w-3xl mx-auto text-lg">
                Final inspection after painting and coating application ensures that castings meet all aesthetic and protective requirements before dispatch to customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {castingsInspectionImages.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border group"
                >
                  <img
                    src={img}
                    alt={`Final Painted Casting ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-poppins text-sm">Painted Casting Inspection</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-background p-6 rounded-xl border border-border">
              <p className="font-inter text-foreground leading-relaxed">
                The final inspection stage includes verification of paint adhesion, coating thickness measurement, color matching against approved samples, and checking for surface defects such as runs, sags, or contamination. We ensure proper coverage on all surfaces and verify that protective coatings meet specified performance standards. Each casting is visually inspected under controlled lighting conditions to guarantee consistent finish quality.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Fabrication Section - 4 cement packer images + 1 fabrication image */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
                Fabrication <span className="text-accent">Inspection</span>
              </h2>
              <p className="font-inter text-muted-foreground max-w-3xl mx-auto text-lg">
                Comprehensive inspection of fabricated structures and assemblies including welded components, ensuring structural integrity and compliance with welding standards and specifications.
              </p>
            </div>

            {/* Cement Packer Subsection */}
            <div className="mb-12">
              <h3 className="font-poppins font-bold text-2xl text-foreground mb-6 text-center">
                Cement Packer <span className="text-accent">Fabrication Parts</span>
              </h3>

              {/* 4 Cement Packer Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {cementPackerImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border group"
                  >
                    <img
                      src={img}
                      alt={`Cement Packer ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-poppins text-sm">Cement Packer Components</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-secondary p-6 rounded-xl border border-border mb-8">
                <p className="font-inter text-foreground leading-relaxed">
                  Cement packer fabrication parts undergo specialized inspection protocols to ensure proper fit, weld quality, and dimensional accuracy. These critical components require precise alignment and robust construction to withstand operational stresses. We verify weld penetration, check for porosity using NDT methods, and ensure all fabricated assemblies meet customer specifications and industry standards for material handling equipment.
                </p>
              </div>

              {/* Additional Fabrication Image */}
              <div className="grid grid-cols-1 gap-4">
                <div className="relative aspect-video overflow-hidden rounded-lg border border-border group">
                  <img
                    src={fabrication}
                    alt="Fabrication Process"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-poppins text-sm">Fabrication Inspection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Castings With Machining and Paint - Only 2 images */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
                Castings With <span className="text-accent">Machining & Paint</span>
              </h2>
              <p className="font-inter text-muted-foreground max-w-3xl mx-auto text-lg">
                Complete inspection coverage from raw casting through machining operations to final painted finish, ensuring quality at every stage of the manufacturing process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
              {castingsWithMachiningImages.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border group"
                >
                  <img
                    src={img}
                    alt={`Complete Process ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-poppins text-sm">Complete Manufacturing Process</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-background p-6 rounded-xl border border-border">
              <p className="font-inter text-foreground leading-relaxed">
                Our integrated quality control system tracks castings through every manufacturing stage. Initial casting inspection verifies material composition and basic dimensions. Post-machining inspection ensures precision tolerances are achieved. Final painted inspection confirms aesthetic quality and coating performance. This comprehensive approach provides complete traceability and ensures that only components meeting all specifications are delivered to customers.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
                Our Inspection <span className="text-accent">Process</span>
              </h2>
              <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to ensure quality and precision at every step
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {inspectionProcess.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-secondary p-4 rounded-lg border border-border"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-poppins font-bold">
                      {index + 1}
                    </div>
                    <p className="font-inter font-medium text-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-6">
              Ready to Ensure Quality?
            </h2>
            <p className="font-inter text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your product inspection requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919812509301" className="btn-primary">
                Call Us Now
              </a>
              <a href="/#contact" className="btn-secondary">
                Get a Quote
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProductInspectionPage;
