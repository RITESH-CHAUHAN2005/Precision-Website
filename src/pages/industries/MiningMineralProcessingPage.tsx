import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Factory, Pickaxe, Settings, Truck } from "lucide-react";

const products = [
  {
    title: "Thickener Drive Components",
    description: "Upper eye, lift arms, drive base, bearing hubs for thickener systems",
    href: "/products/thickener-drive-components",
    icon: Settings,
  },
  {
    title: "Slurry Pump Solutions",
    description: "Complete pump parts and assemblies for slurry handling",
    href: "/products/slurry-pump-solutions",
    icon: Factory,
  },
  {
    title: "Hydro Cyclones",
    description: "Precision manufactured cyclones for mineral separation",
    href: "/products/hydro-cyclones",
    icon: Pickaxe,
  },
  {
    title: "Filter Press Systems",
    description: "Filtration components for solid-liquid separation",
    href: "/products/filter-press-systems",
    icon: Settings,
  },
  {
    title: "Disc Filter Components",
    description: "Shell plates, trunnion housings, central shafts",
    href: "/products/disc-filter-components",
    icon: Factory,
  },
];

const clients = [
  { name: "FLSmidth", contribution: "56%" },
  { name: "Metso", contribution: "29%" },
];

const capabilities = [
  "Heavy machining up to 50 tons",
  "Precision casting with in-house foundry",
  "Complete assembly and mock-up testing",
  "NDT and quality inspection",
  "Surface treatment and coating",
  "Custom engineering solutions",
];

const MiningMineralProcessingPage = () => {
  return (
    <PageTransition>
      <SEO
        title="Mining & Mineral Processing Equipment | Precision Engineering Products"
        description="Leading supplier of mining equipment components - thickener drives, slurry pumps, hydro cyclones, filter press systems. Trusted by FLSmidth (56%) and Metso (29%)."
        keywords="mining equipment, mineral processing, thickener drive, slurry pump, hydro cyclone, filter press, FLSmidth supplier, Metso partner"
        canonical="/industries/mining-mineral-processing"
      />
      <main className="overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container-custom mx-auto px-4 relative z-10">
            <Breadcrumb
              items={[
                { label: "Industries", href: "/industries" },
                { label: "Mining & Mineral Processing" },
              ]}
            />
            <AnimatedSection animation="fadeUp" className="max-w-4xl pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Pickaxe className="w-10 h-10" />
                <span className="text-lg font-medium text-white/80">Our Primary Industry</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Mining & Mineral Processing
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Your trusted partner for heavy-duty mining equipment components. We serve the world's leading mining companies with precision-engineered parts for thickeners, pumps, cyclones, and filtration systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-white/90">
                  Get Quote <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link to="/products" className="btn-outline border-white text-white hover:bg-white/10">
                  View Products
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
                  <AnimatedCounter target={56} suffix="%" />
                </div>
                <p className="text-muted-foreground">Revenue from Mining</p>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={0.1}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={15} suffix="+" />
                </div>
                <p className="text-muted-foreground">Years Experience</p>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={0.2}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={50} suffix="T" />
                </div>
                <p className="text-muted-foreground">Max Component Weight</p>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={0.3}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={100} suffix="%" />
                </div>
                <p className="text-muted-foreground">Quality Tested</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Products for Mining Industry
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive range of heavy-duty components engineered for the demanding mining environment
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <StaggerItem key={index}>
                  <Link
                    to={product.href}
                    className="block bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <product.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <span className="text-primary font-medium inline-flex items-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Key Clients */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeLeft">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Trusted by Global Mining Leaders
                </h2>
                <p className="text-muted-foreground mb-8">
                  We are proud to be a preferred supplier for the world's leading mining equipment manufacturers. Our components are used in mining operations across 5 continents.
                </p>
                <div className="space-y-4">
                  {clients.map((client, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                      <span className="text-lg font-semibold text-foreground">{client.name}</span>
                      <span className="text-2xl font-bold text-primary">{client.contribution}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeRight">
                <div className="bg-card p-8 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6">Our Capabilities</h3>
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom mx-auto px-4 text-center">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Mining Equipment Components?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Contact us for custom manufacturing of thickener drives, slurry pumps, hydro cyclones, and more.
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

export default MiningMineralProcessingPage;
