import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Factory, Ruler, Settings, Wrench } from "lucide-react";
import machiningImg from "@/assets/machining.jpg";
import assemblyImg from "@/assets/assembly.jpg";

const machinesList = [
  {
    category: "CNC Machines",
    items: [
      "CNC Vertical Machining Centers",
      "CNC Horizontal Boring Machines",
      "CNC Lathes (up to 2m swing)",
      "CNC Drilling & Tapping Centers",
    ],
  },
  {
    category: "Conventional Machines",
    items: [
      "Heavy Duty Lathes",
      "Radial Drilling Machines",
      "Horizontal Boring Machines",
      "Slotting Machines",
    ],
  },
  {
    category: "Fabrication Equipment",
    items: [
      "MIG/TIG Welding Machines",
      "Submerged Arc Welding (SAW)",
      "Plasma Cutting Machine",
      "Press Brakes & Rolling Machines",
    ],
  },
];

const capabilities = [
  { label: "Max Machining Weight", value: "50 Tons" },
  { label: "Max Turning Diameter", value: "2000 mm" },
  { label: "Boring Capacity", value: "Up to 200mm dia" },
  { label: "Welding Capability", value: "MIG, TIG, SAW, SMAW" },
  { label: "Surface Treatment", value: "Painting, Galvanizing" },
  { label: "Assembly Bays", value: "3 Dedicated Bays" },
];

const features = [
  "Climate-controlled inspection room",
  "Overhead cranes (10T, 20T capacity)",
  "Dedicated assembly and mock-up area",
  "In-house tool room",
  "Material testing laboratory",
  "Quality inspection equipment",
];

const Unit1MachiningPage = () => {
  return (
    <PageTransition>
      <SEO
        title="Unit 1: Machining & Fabrication Facility | 14,000 Sq.m | Precision Engineering"
        description="Our main manufacturing facility - 14,000 sq.m with CNC machining, heavy fabrication, assembly bays. Machining capacity up to 50 tons. Overhead cranes 10T & 20T."
        keywords="machining facility, CNC machining, fabrication workshop, heavy machining, assembly bay, manufacturing unit Bawal"
        canonical="/facilities/unit-1-machining-fabrication"
      />
      <main className="overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container-custom mx-auto px-4 relative z-10">
            <Breadcrumb
              items={[
                { label: "Facilities", href: "/facilities" },
                { label: "Unit 1: Machining & Fabrication" },
              ]}
            />
            <AnimatedSection animation="fadeUp" className="max-w-4xl pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Factory className="w-10 h-10" />
                <span className="text-lg font-medium text-white/80">Main Manufacturing Unit</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Unit 1: Machining & Fabrication
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Our flagship facility spanning 14,000 sq.m with state-of-the-art CNC machines, heavy fabrication capabilities, and dedicated assembly bays.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-white/90">
                  Schedule Visit <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link to="/capabilities" className="btn-outline border-white text-white hover:bg-white/10">
                  View Capabilities
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
                  <AnimatedCounter target={14000} />
                </div>
                <p className="text-muted-foreground">Sq.m Area</p>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={0.1}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={50} suffix="T" />
                </div>
                <p className="text-muted-foreground">Max Machining</p>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={0.2}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={20} suffix="T" />
                </div>
                <p className="text-muted-foreground">Crane Capacity</p>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={0.3}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={3} />
                </div>
                <p className="text-muted-foreground">Assembly Bays</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Facility Images */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Facility Overview
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedSection animation="fadeLeft">
                <div className="relative rounded-xl overflow-hidden aspect-video">
                  <img
                    src={machiningImg}
                    alt="CNC Machining Area"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold">CNC Machining Area</h3>
                    <p className="text-white/80">State-of-the-art CNC machines</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeRight">
                <div className="relative rounded-xl overflow-hidden aspect-video">
                  <img
                    src={assemblyImg}
                    alt="Assembly Bay"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold">Assembly & Mock-up Bay</h3>
                    <p className="text-white/80">Complete assembly and testing</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Machines List */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Equipment & Machines
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {machinesList.map((category, index) => (
                <StaggerItem key={index}>
                  <div className="bg-card p-6 rounded-xl border border-border h-full">
                    <div className="flex items-center gap-3 mb-4">
                      {index === 0 && <Settings className="w-6 h-6 text-primary" />}
                      {index === 1 && <Wrench className="w-6 h-6 text-primary" />}
                      {index === 2 && <Factory className="w-6 h-6 text-primary" />}
                      <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Capabilities Table */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection animation="fadeLeft">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  <Ruler className="w-8 h-8 text-primary inline mr-2" />
                  Technical Capabilities
                </h2>
                <div className="bg-card rounded-xl overflow-hidden border border-border">
                  <table className="w-full">
                    <tbody>
                      {capabilities.map((cap, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-card" : "bg-secondary/50"}>
                          <td className="px-6 py-4 font-semibold text-foreground border-r border-border">
                            {cap.label}
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">{cap.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeRight">
                <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="section-padding bg-secondary">
          <div className="container-custom mx-auto px-4">
            <AnimatedSection animation="fadeUp" className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Location</h2>
              <p className="text-muted-foreground mb-6">
                Plot No. 192-G, Sector-4, Phase-1, IMT Bawal, Rewari, Haryana - 123501
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get Directions <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom mx-auto px-4 text-center">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Want to Visit Our Facility?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Schedule a visit to see our machining and fabrication capabilities in action.
              </p>
              <Link
                to="/contact"
                className="btn-primary bg-white text-primary hover:bg-white/90 inline-flex items-center gap-2"
              >
                Schedule Visit <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default Unit1MachiningPage;
