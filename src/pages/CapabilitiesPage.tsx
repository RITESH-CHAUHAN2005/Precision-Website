import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  ClipboardCheck, 
  Factory, 
  Package, 
  Search, 
  Settings, 
  Truck, 
  Wrench 
} from "lucide-react";

const processSteps = [
  { icon: Package, title: "Casting Sourcing", description: "Quality raw materials from certified suppliers" },
  { icon: Settings, title: "Machining", description: "Precision CNC machining to tight tolerances" },
  { icon: Wrench, title: "Fabrication", description: "Heavy fabrication and welding services" },
  { icon: Factory, title: "Assembly", description: "Mock-up assembly and sub-assemblies" },
  { icon: Search, title: "Quality Testing", description: "Comprehensive inspection and testing" },
  { icon: Truck, title: "Delivery", description: "Safe packaging and timely delivery" },
];

const capabilities = [
  {
    icon: Settings,
    title: "Precision Machining",
    description: "State-of-the-art CNC machining centers capable of handling complex geometries and tight tolerances",
    features: [
      "CNC Turning up to Ø1500mm",
      "CNC Milling 2000x1000mm bed",
      "Boring & Drilling operations",
      "Surface grinding",
      "Tolerance: ±0.05mm",
    ],
  },
  {
    icon: Wrench,
    title: "Heavy Fabrication & Welding",
    description: "Complete fabrication services with qualified welders and modern equipment",
    features: [
      "MIG/TIG/SMAW welding",
      "Plate cutting & forming",
      "Structural fabrication",
      "Pipe fabrication",
      "Up to 50T single piece",
    ],
  },
  {
    icon: Factory,
    title: "Mock-up Assembly & Testing",
    description: "Dedicated assembly bays for complete system integration and functional testing",
    features: [
      "TLM Assembly Bay",
      "DRW Assembly Bay",
      "Packer Assembly Bay",
      "FRW Assembly Bay",
      "Functional testing",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "Temperature-controlled inspection area with advanced measuring instruments",
    features: [
      "CMM inspection",
      "Surface finish testing",
      "NDT (UT, MT, PT)",
      "Dimensional inspection",
      "Material testing",
    ],
  },
];

const materials = [
  { name: "Ductile Iron", grades: "GGG40, GGG50, GGG60, GGG70" },
  { name: "Cast Iron", grades: "FC200, FC250, FC300" },
  { name: "Carbon Steel", grades: "EN8D, A105, 1045" },
  { name: "Alloy Steel", grades: "EN24 QT, EN19 QT, ASTM 4140, 4340" },
  { name: "Stainless Steel", grades: "SS304, SS316, Duplex" },
  { name: "Special Alloys", grades: "Ni-Hard, High Chrome, Hadfield" },
];

const metrics = [
  { value: "100T", label: "Monthly Capacity", subtext: "Current" },
  { value: "300T", label: "Planned Expansion", subtext: "Target" },
  { value: "±0.05", label: "Tolerance (mm)", subtext: "Precision" },
  { value: "50T", label: "Max Single Piece", subtext: "Capability" },
];

const CapabilitiesPage = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary to-navy-dark text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
        <div className="container-custom mx-auto px-4 relative z-10">
          <Breadcrumb items={[{ label: "Manufacturing Capabilities" }]} />
          <div className="max-w-4xl pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Manufacturing Capabilities
            </h1>
            <p className="text-xl text-white/80 mb-8">
              End-to-end manufacturing solutions from casting to final assembly. 
              ISO 9001:2015 certified processes ensuring consistent quality.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process Flow
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Integrated manufacturing process ensuring quality at every step
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-white rounded-full text-xs flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive manufacturing services under one roof
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{cap.title}</h3>
                    <p className="text-muted-foreground">{cap.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {cap.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Expertise */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Material Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with a wide range of materials to meet diverse industrial requirements
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{material.name}</h3>
                <p className="text-muted-foreground">{material.grades}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Metrics */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Production Capacity
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl md:text-6xl font-bold mb-2">{metric.value}</p>
                <p className="text-xl text-white/90 mb-1">{metric.label}</p>
                <p className="text-sm text-white/60">{metric.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you with your manufacturing needs. Our team is ready to discuss your requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/facilities"
              className="bg-card border-2 border-primary text-primary font-semibold px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-2"
            >
              View Our Facilities
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CapabilitiesPage;
