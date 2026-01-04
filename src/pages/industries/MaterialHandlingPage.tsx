import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Cog, Package, Truck } from "lucide-react";

const products = [
  {
    title: "Conveyor Components",
    description: "Drive drums, tail drums, idler frames, and pulleys",
    icon: Cog,
  },
  {
    title: "Chutes & Hoppers",
    description: "Wear-lined transfer chutes and storage hoppers",
    icon: Package,
  },
  {
    title: "Belt Cleaning Systems",
    description: "Primary and secondary belt scrapers",
    icon: Cog,
  },
  {
    title: "Structural Supports",
    description: "Heavy-duty frames and support structures",
    icon: Package,
  },
];

const specifications = [
  { label: "Belt Width", value: "600mm to 2400mm" },
  { label: "Capacity", value: "Up to 10,000 TPH" },
  { label: "Speed", value: "Up to 6 m/s" },
  { label: "Standards", value: "IS, DIN, CEMA" },
];

const capabilities = [
  "Design & engineering services",
  "Heavy fabrication up to 50 tons",
  "Precision machining",
  "Rubber lining and coating",
  "Assembly and testing",
  "Site installation support",
];

const MaterialHandlingPage = () => {
  return (
    <PageTransition>
      <SEO
        title="Material Handling Equipment | Conveyor Components | Precision Engineering"
        description="Manufacturing material handling equipment - conveyor drums, idler frames, chutes, hoppers. Trusted by Metso (29% revenue). Belt widths 600-2400mm, capacity up to 10,000 TPH."
        keywords="material handling equipment, conveyor components, conveyor drums, idler frames, chutes, hoppers, belt scrapers, Metso supplier"
        canonical="/industries/material-handling"
      />
      <main className="overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container-custom mx-auto px-4 relative z-10">
            <Breadcrumb
              items={[
                { label: "Industries", href: "/industries" },
                { label: "Material Handling" },
              ]}
            />
            <AnimatedSection animation="fadeUp" className="max-w-4xl pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-10 h-10" />
                <span className="text-lg font-medium text-white/80">29% of Our Business</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Material Handling Equipment
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Heavy-duty material handling solutions for bulk material transport. From conveyor components to complete transfer systems, we deliver reliability and durability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary bg-white text-orange-600 hover:bg-white/90">
                  Get Quote <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link to="/products/material-handling-equipment" className="btn-outline border-white text-white hover:bg-white/10">
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
                  <AnimatedCounter target={29} suffix="%" />
                </div>
                <p className="text-muted-foreground">Revenue Share</p>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={0.1}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={2400} suffix="mm" />
                </div>
                <p className="text-muted-foreground">Max Belt Width</p>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={0.2}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={10000} />
                </div>
                <p className="text-muted-foreground">TPH Capacity</p>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={0.3}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={50} suffix="T" />
                </div>
                <p className="text-muted-foreground">Max Fabrication</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Material Handling Products
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete range of conveyor and material handling components built for heavy-duty applications
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
                to="/products/material-handling-equipment"
                className="btn-primary inline-flex items-center gap-2"
              >
                View All Products <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Specifications & Capabilities */}
        <section className="section-padding bg-secondary">
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
            </div>
          </div>
        </section>

        {/* Key Client */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Key Client
              </h2>
              <div className="max-w-md mx-auto bg-card p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold text-primary mb-2">Metso</h3>
                <p className="text-muted-foreground mb-4">
                  Contributing 29% of our revenue, Metso trusts us for their material handling equipment needs.
                </p>
                <Link to="/clients" className="text-primary font-medium inline-flex items-center gap-2 hover:underline">
                  View All Clients <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom mx-auto px-4 text-center">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Material Handling Components?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Contact us for custom conveyor drums, idler frames, chutes, and complete material handling solutions.
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

export default MaterialHandlingPage;
