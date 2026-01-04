import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Flame, Factory, Thermometer, Shield } from "lucide-react";
import factoryImg from "@/assets/factory.jpg";

const castingCapabilities = [
  {
    title: "Ductile Iron Casting",
    description: "GGG40, GGG50, GGG60 grades with excellent mechanical properties",
    icon: Factory,
  },
  {
    title: "Grey Iron Casting",
    description: "FG200, FG260, FG300 grades for various applications",
    icon: Flame,
  },
  {
    title: "Steel Casting",
    description: "Carbon steel and alloy steel castings",
    icon: Shield,
  },
  {
    title: "Heat Treatment",
    description: "In-house heat treatment for required properties",
    icon: Thermometer,
  },
];

const specifications = [
  { label: "Furnace Capacity", value: "1500 kg per heat" },
  { label: "Max Casting Weight", value: "Up to 3000 kg" },
  { label: "Min Casting Weight", value: "5 kg" },
  { label: "Production Capacity", value: "100+ Tons/month" },
  { label: "Pattern Types", value: "Wood, Metal, Resin" },
  { label: "Molding", value: "Green Sand, No-Bake" },
];

const materials = [
  "Ductile Iron (GGG40/50/60)",
  "Grey Iron (FG200/260/300)",
  "SG Iron",
  "Carbon Steel",
  "Alloy Steel",
  "High Chrome Iron",
];

const qualityChecks = [
  "Spectro analysis for chemical composition",
  "Tensile and impact testing",
  "Hardness testing (Brinell, Rockwell)",
  "Microstructure analysis",
  "Ultrasonic testing (UT)",
  "Magnetic particle testing (MT)",
];

const Unit2CastingPage = () => {
  return (
    <PageTransition>
      <SEO
        title="Unit 2: Casting Plant | Foundry | 1500kg Furnace | Precision Engineering"
        description="In-house casting facility with 1500kg furnace capacity. Ductile iron, grey iron, steel castings. Green sand & no-bake molding. 100+ tons monthly production."
        keywords="casting plant, foundry, ductile iron casting, grey iron casting, steel casting, furnace, pattern making, Bawal foundry"
        canonical="/facilities/unit-2-casting-plant"
      />
      <main className="overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-orange-600 to-red-700 text-white">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container-custom mx-auto px-4 relative z-10">
            <Breadcrumb
              items={[
                { label: "Facilities", href: "/facilities" },
                { label: "Unit 2: Casting Plant" },
              ]}
            />
            <AnimatedSection animation="fadeUp" className="max-w-4xl pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-10 h-10" />
                <span className="text-lg font-medium text-white/80">In-House Foundry</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Unit 2: Casting Plant
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Our dedicated casting facility with 1500kg furnace capacity, producing high-quality ductile iron, grey iron, and steel castings for heavy machinery applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary bg-white text-orange-600 hover:bg-white/90">
                  Get Quote <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link to="/facilities" className="btn-outline border-white text-white hover:bg-white/10">
                  All Facilities
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-secondary">
          <div className="container-custom mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <AnimatedSection animation="scaleIn" delay={0}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={1500} suffix="kg" />
                </div>
                <p className="text-muted-foreground">Furnace Capacity</p>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={0.1}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={3000} suffix="kg" />
                </div>
                <p className="text-muted-foreground">Max Casting</p>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={0.2}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={100} suffix="+" />
                </div>
                <p className="text-muted-foreground">Tons/Month</p>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={0.3}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={6} />
                </div>
                <p className="text-muted-foreground">Material Grades</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Facility Image */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp">
              <div className="relative rounded-xl overflow-hidden aspect-video max-w-4xl mx-auto">
                <img
                  src={factoryImg}
                  alt="Casting Plant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-white text-2xl font-bold">Modern Casting Facility</h3>
                  <p className="text-white/80">Induction furnace with advanced melting capabilities</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Casting Capabilities */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Casting Capabilities
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {castingCapabilities.map((cap, index) => (
                <StaggerItem key={index}>
                  <div className="bg-card p-6 rounded-xl border border-border h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <cap.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{cap.title}</h3>
                    <p className="text-muted-foreground">{cap.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Specifications & Materials */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection animation="fadeLeft">
                <h2 className="text-3xl font-bold text-foreground mb-6">Technical Specifications</h2>
                <div className="bg-card rounded-xl overflow-hidden border border-border">
                  <table className="w-full">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-card" : "bg-secondary/50"}>
                          <td className="px-6 py-4 font-semibold text-foreground border-r border-border">
                            {spec.label}
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeRight">
                <h2 className="text-3xl font-bold text-foreground mb-6">Material Grades</h2>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="grid grid-cols-2 gap-3">
                    {materials.map((material, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-foreground font-medium text-sm">{material}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Quality Checks */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quality Assurance
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every casting undergoes rigorous quality checks to ensure compliance with specifications
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {qualityChecks.map((check, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{check}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Process Flow */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Casting Process
              </h2>
            </AnimatedSection>

            <div className="flex flex-wrap justify-center gap-4">
              {["Pattern Making", "Molding", "Melting", "Pouring", "Cooling", "Fettling", "Heat Treatment", "Inspection"].map((step, index) => (
                <AnimatedSection key={index} animation="scaleIn" delay={index * 0.1}>
                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-foreground font-medium">{step}</span>
                    {index < 7 && <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom mx-auto px-4 text-center">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Custom Castings?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Contact us for ductile iron, grey iron, or steel castings. We handle everything from pattern making to finished machined components.
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

export default Unit2CastingPage;
