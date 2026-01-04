import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Filter, Droplets, Settings, Cog } from "lucide-react";

const products = [
  {
    title: "Filter Press Systems",
    href: "/products/filter-press-systems",
    description: "Complete filter press components - plates, frames, hydraulic systems",
    icon: Filter,
  },
  {
    title: "Disc Filter Components",
    href: "/products/disc-filter-components",
    description: "Shell plates, trunnion housings, central shafts, sector plates",
    icon: Settings,
  },
  {
    title: "Hydro Cyclones",
    href: "/products/hydro-cyclones",
    description: "Precision cyclones for separation and classification",
    icon: Droplets,
  },
];

const applications = [
  "Mining & Mineral Processing",
  "Chemical Industry",
  "Food & Beverage",
  "Pharmaceutical",
  "Wastewater Treatment",
  "Paper & Pulp Industry",
];

const filterPressSpecs = [
  { label: "Plate Size", value: "800mm to 2000mm" },
  { label: "Operating Pressure", value: "Up to 16 Bar" },
  { label: "Automation Level", value: "Semi to Fully Automatic" },
];

const discFilterSpecs = [
  { label: "Disc Diameter", value: "2m to 6m" },
  { label: "Filtration Area", value: "Up to 200 m²" },
  { label: "Vacuum Level", value: "400-600 mbar" },
];

const capabilities = [
  "Design consultation and engineering",
  "Precision machining and fabrication",
  "Complete assembly and integration",
  "Pressure and performance testing",
  "On-site installation support",
  "Spare parts and maintenance",
];

const FiltrationSystemsPage = () => {
  return (
    <PageTransition>
      <SEO
        title="Filtration Systems & Components | Filter Press, Disc Filters | Precision Engineering"
        description="Manufacturing filtration equipment - filter press systems, disc filter components, hydro cyclones. Plate sizes 800-2000mm, operating pressure up to 16 bar."
        keywords="filtration systems, filter press, disc filter, hydro cyclone, filtration equipment, solid liquid separation, industrial filtration"
        canonical="/industries/filtration-systems"
      />
      <main className="overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container-custom mx-auto px-4 relative z-10">
            <Breadcrumb
              items={[
                { label: "Industries", href: "/industries" },
                { label: "Filtration Systems" },
              ]}
            />
            <AnimatedSection animation="fadeUp" className="max-w-4xl pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Filter className="w-10 h-10" />
                <span className="text-lg font-medium text-white/80">Industrial Filtration</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Filtration Systems
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Complete filtration solutions for solid-liquid separation. From filter press components to disc filters, we deliver precision-engineered parts for optimal filtration efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary bg-white text-cyan-600 hover:bg-white/90">
                  Get Quote <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link to="/products" className="btn-outline border-white text-white hover:bg-white/10">
                  View Products
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-12 bg-secondary">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Applications</h2>
            </AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {applications.map((app, index) => (
                <AnimatedSection key={index} animation="scaleIn" delay={index * 0.1}>
                  <div className="bg-card px-6 py-3 rounded-full border border-border">
                    <span className="text-foreground font-medium">{app}</span>
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
                Filtration Products
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive range of filtration equipment and components
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-6">
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

        {/* Specifications */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Technical Specifications
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="fadeLeft">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-primary" />
                    Filter Press Systems
                  </h3>
                  <div className="space-y-3">
                    {filterPressSpecs.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-semibold text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeRight">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Cog className="w-5 h-5 text-primary" />
                    Disc Filter Components
                  </h3>
                  <div className="space-y-3">
                    {discFilterSpecs.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-semibold text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeLeft">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Capabilities
                </h2>
                <p className="text-muted-foreground mb-8">
                  From design to installation, we provide complete filtration solutions tailored to your specific requirements.
                </p>
                <div className="space-y-3">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeRight">
                <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">01</span>
                      <span>15+ years experience in filtration components</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">02</span>
                      <span>Trusted by global OEMs like FLSmidth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">03</span>
                      <span>Complete in-house manufacturing capability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">04</span>
                      <span>ISO 9001:2015 certified quality system</span>
                    </li>
                  </ul>
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
                Need Filtration Components?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Contact us for filter press systems, disc filter components, and custom filtration solutions.
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

export default FiltrationSystemsPage;
