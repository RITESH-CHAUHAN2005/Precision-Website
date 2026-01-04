import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Train, Cog, Shield, Wrench } from "lucide-react";

const products = [
  {
    title: "Bogie Components",
    description: "Railway bogie parts including wheels, axle boxes, and frames",
    icon: Train,
  },
  {
    title: "Coupler Systems",
    description: "Wagon coupling components and draft gear assemblies",
    icon: Cog,
  },
  {
    title: "Brake Components",
    description: "Railway brake system parts and assemblies",
    icon: Shield,
  },
  {
    title: "Structural Parts",
    description: "Heavy structural components for rolling stock",
    icon: Wrench,
  },
];

const standards = [
  "RDSO (Research Designs & Standards Organisation)",
  "AAR (Association of American Railroads)",
  "UIC (International Union of Railways)",
  "IS (Indian Standards)",
];

const capabilities = [
  "Pattern making and development",
  "Casting procurement and machining",
  "Heat treatment (Normalized/QT)",
  "NDT testing (UT, MT, RT)",
  "Complete documentation and certification",
  "Reverse engineering capabilities",
];

const materials = [
  "EN8D Steel",
  "EN24 QT",
  "EN19 QT",
  "Ductile Iron (GGG40/50/60)",
  "Cast Steel",
  "Alloy Steels",
];

const RailwaysTransportationPage = () => {
  return (
    <PageTransition>
      <SEO
        title="Railway Equipment Components | Bogie Wheels, Couplers | Precision Engineering"
        description="Manufacturing railway bogie components, coupler systems, brake parts. RDSO & AAR standards compliant. NDT tested - UT, MT, RT. EN8D, EN24, Ductile Iron materials."
        keywords="railway components, bogie wheels, railway couplers, brake components, RDSO standards, AAR compliant, railway equipment manufacturer"
        canonical="/industries/railways-transportation"
      />
      <main className="overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-700 to-slate-800 text-white">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container-custom mx-auto px-4 relative z-10">
            <Breadcrumb
              items={[
                { label: "Industries", href: "/industries" },
                { label: "Railways & Transportation" },
              ]}
            />
            <AnimatedSection animation="fadeUp" className="max-w-4xl pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Train className="w-10 h-10" />
                <span className="text-lg font-medium text-white/80">Growing Segment</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Railways & Transportation
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Precision-engineered railway components meeting stringent quality standards. From bogie wheels to complete assemblies, we deliver reliability for India's railways.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary bg-white text-slate-700 hover:bg-white/90">
                  Get Quote <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link to="/products/railway-mining-equipment" className="btn-outline border-white text-white hover:bg-white/10">
                  View Products
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-12 bg-secondary">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Compliance Standards</h2>
            </AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {standards.map((standard, index) => (
                <AnimatedSection key={index} animation="scaleIn" delay={index * 0.1}>
                  <div className="bg-card px-6 py-3 rounded-full border border-border">
                    <span className="text-foreground font-medium">{standard}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Railway Products
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                High-quality components for rolling stock and railway infrastructure
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <StaggerItem key={index}>
                  <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <product.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection animation="fadeUp" className="mt-8 text-center">
              <Link
                to="/products/railway-mining-equipment"
                className="btn-primary inline-flex items-center gap-2"
              >
                View All Products <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Capabilities & Materials */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection animation="fadeLeft">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Capabilities</h2>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="space-y-3">
                    {capabilities.map((capability, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeRight">
                <h2 className="text-3xl font-bold text-foreground mb-6">Material Grades</h2>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="grid grid-cols-2 gap-3">
                    {materials.map((material, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-foreground font-medium">{material}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Quality Testing */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quality Testing
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All railway components undergo rigorous non-destructive testing
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <StaggerItem>
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <div className="text-4xl font-bold text-primary mb-2">UT</div>
                  <p className="text-muted-foreground">Ultrasonic Testing</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <div className="text-4xl font-bold text-primary mb-2">MT</div>
                  <p className="text-muted-foreground">Magnetic Testing</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <div className="text-4xl font-bold text-primary mb-2">RT</div>
                  <p className="text-muted-foreground">Radiographic Testing</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom mx-auto px-4 text-center">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Railway Components?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Contact us for RDSO compliant bogie components, couplers, and railway equipment.
              </p>
              <Link
                to="/contact"
                className="btn-primary bg-white text-primary hover:bg-white/90 inline-flex items-center gap-2"
              >
                Request Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default RailwaysTransportationPage;
