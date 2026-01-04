import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight, Check, Factory, FileText, Settings } from "lucide-react";

const productData: Record<string, {
  title: string;
  description: string;
  components: { name: string; description: string }[];
  specifications: { label: string; value: string }[];
  materials: string[];
  scopeOfWork: string[];
  relatedProducts: string[];
}> = {
  "thickener-drive-components": {
    title: "Thickener Drive Components",
    description: "High-precision drive components for thickener systems used in mining and mineral processing. Our thickener components are engineered to withstand extreme operating conditions while maintaining optimal performance.",
    components: [
      { name: "Upper Eye", description: "Precision machined upper eye assembly for lift mechanism" },
      { name: "Lift Arms", description: "Heavy-duty lift arms with superior load-bearing capacity" },
      { name: "Drive Base", description: "Robust drive base for stable torque transmission" },
      { name: "Lift Tube", description: "High-strength lift tube for vertical movement" },
      { name: "Bearing Hubs", description: "Precision bearing hubs for smooth rotation" },
      { name: "Lift Assembly", description: "Complete lift assembly with integrated components" },
    ],
    specifications: [
      { label: "Max Weight Capacity", value: "Up to 50 Tons" },
      { label: "Material Options", value: "Ductile Iron, EN24 QT, ASTM 4140" },
      { label: "Surface Finish", value: "Ra 1.6 - Ra 3.2" },
      { label: "Tolerance", value: "±0.05mm" },
      { label: "Heat Treatment", value: "Quenched & Tempered" },
      { label: "Testing", value: "100% Dimensional Inspection" },
    ],
    materials: ["Ductile Iron GGG40/50/60", "EN24 QT", "EN19 QT", "ASTM 4140", "ASTM 4340"],
    scopeOfWork: [
      "Machining as per customer drawings",
      "Complete dimensional inspection",
      "Surface treatment & coating",
      "Assembly & testing",
      "Packaging for safe transport",
    ],
    relatedProducts: ["filter-press-systems", "slurry-pump-solutions", "material-handling-equipment"],
  },
  "filter-press-systems": {
    title: "Filter Press Systems",
    description: "Complete filter press components and assemblies for industrial filtration applications. Our filter press systems are designed for optimal solid-liquid separation with maximum efficiency.",
    components: [
      { name: "Filter Plates", description: "High-pressure resistant filter plates" },
      { name: "Head Frames", description: "Structural head frames for system stability" },
      { name: "Hydraulic Cylinders", description: "Precision hydraulic cylinders for plate compression" },
      { name: "Manifolds", description: "Custom manifolds for fluid distribution" },
      { name: "Support Rails", description: "Heavy-duty support rails and guides" },
      { name: "Closure Systems", description: "Automated closure and locking mechanisms" },
    ],
    specifications: [
      { label: "Plate Size", value: "800mm to 2000mm" },
      { label: "Operating Pressure", value: "Up to 16 Bar" },
      { label: "Material", value: "Cast Iron, Stainless Steel" },
      { label: "Surface Area", value: "Custom per requirement" },
      { label: "Cycle Time", value: "Optimized per application" },
      { label: "Automation Level", value: "Semi to Fully Automatic" },
    ],
    materials: ["Cast Iron", "Ductile Iron", "Stainless Steel 304/316", "Carbon Steel"],
    scopeOfWork: [
      "Design consultation",
      "Precision machining",
      "Assembly & integration",
      "Pressure testing",
      "On-site installation support",
    ],
    relatedProducts: ["thickener-drive-components", "disc-filter-components", "hydro-cyclones"],
  },
  "slurry-pump-solutions": {
    title: "Slurry Pump Solutions",
    description: "Heavy-duty slurry pump components designed for abrasive material handling in mining and industrial applications. Built to withstand the toughest operating conditions.",
    components: [
      { name: "Impellers", description: "High-chrome alloy impellers for abrasion resistance" },
      { name: "Volutes", description: "Wear-resistant pump volutes" },
      { name: "Shaft Sleeves", description: "Hardened shaft sleeves and seals" },
      { name: "Bearing Assemblies", description: "Heavy-duty bearing assemblies" },
      { name: "Suction Liners", description: "Replaceable suction liners" },
      { name: "Frame Plates", description: "Structural frame plates and mounts" },
    ],
    specifications: [
      { label: "Flow Rate", value: "Up to 5000 m³/hr" },
      { label: "Head", value: "Up to 80m" },
      { label: "Solid Handling", value: "Up to 75mm particles" },
      { label: "Material", value: "High Chrome, Ni-Hard, Rubber Lined" },
      { label: "Efficiency", value: "Up to 85%" },
      { label: "Drive Type", value: "Belt/Direct Drive" },
    ],
    materials: ["High Chrome White Iron", "Ni-Hard", "Ductile Iron", "Natural Rubber", "Polyurethane"],
    scopeOfWork: [
      "Reverse engineering",
      "Pattern development",
      "Casting & machining",
      "Balancing & assembly",
      "Performance testing",
    ],
    relatedProducts: ["hydro-cyclones", "material-handling-equipment", "thickener-drive-components"],
  },
  "hydro-cyclones": {
    title: "Hydro Cyclones",
    description: "Precision-engineered hydro cyclone components for separation and classification in mineral processing. Optimized for maximum separation efficiency.",
    components: [
      { name: "Cyclone Bodies", description: "Wear-resistant cyclone bodies" },
      { name: "Vortex Finders", description: "Precision vortex finders" },
      { name: "Apex Valves", description: "Adjustable apex valves" },
      { name: "Feed Chambers", description: "Optimized feed chambers" },
      { name: "Overflow Boxes", description: "Collection overflow boxes" },
      { name: "Mounting Frames", description: "Structural mounting frames" },
    ],
    specifications: [
      { label: "Diameter Range", value: "100mm to 1000mm" },
      { label: "Cut Size", value: "5 to 200 microns" },
      { label: "Operating Pressure", value: "Up to 4 Bar" },
      { label: "Material", value: "Ceramic, Polyurethane, Steel" },
      { label: "Efficiency", value: "Up to 95% separation" },
      { label: "Flow Capacity", value: "Custom per size" },
    ],
    materials: ["Ceramic Lined", "Polyurethane", "Rubber Lined", "Stainless Steel", "Carbon Steel"],
    scopeOfWork: [
      "Application analysis",
      "Custom sizing",
      "Manufacturing & lining",
      "Assembly & testing",
      "Installation guidance",
    ],
    relatedProducts: ["slurry-pump-solutions", "filter-press-systems", "disc-filter-components"],
  },
  "disc-filter-components": {
    title: "Disc Filter Components",
    description: "Specialized disc filter parts for continuous filtration processes in mineral processing and industrial applications.",
    components: [
      { name: "Filter Discs", description: "Multi-sector filter discs" },
      { name: "Sector Plates", description: "Replaceable sector plates" },
      { name: "Scraper Assemblies", description: "Automatic scraper assemblies" },
      { name: "Drive Shafts", description: "Heavy-duty drive shafts" },
      { name: "Bearing Housings", description: "Sealed bearing housings" },
      { name: "Vacuum Boxes", description: "Vacuum distribution boxes" },
    ],
    specifications: [
      { label: "Disc Diameter", value: "2m to 6m" },
      { label: "Number of Sectors", value: "12 to 24" },
      { label: "Filtration Area", value: "Up to 200 m²" },
      { label: "Vacuum Level", value: "400-600 mbar" },
      { label: "Rotation Speed", value: "0.5-2 RPM" },
      { label: "Cake Thickness", value: "10-40mm" },
    ],
    materials: ["Stainless Steel", "Polypropylene", "Rubber", "Special Alloys"],
    scopeOfWork: [
      "Component manufacturing",
      "Assembly services",
      "Filter media selection",
      "Performance optimization",
      "Spare parts supply",
    ],
    relatedProducts: ["filter-press-systems", "hydro-cyclones", "thickener-drive-components"],
  },
  "material-handling-equipment": {
    title: "Material Handling Equipment",
    description: "Robust material handling solutions for industrial and mining operations. Designed for reliability and long service life.",
    components: [
      { name: "Conveyor Drums", description: "Drive and tail drums for conveyors" },
      { name: "Idler Frames", description: "Heavy-duty idler frames" },
      { name: "Chutes & Hoppers", description: "Wear-lined chutes and hoppers" },
      { name: "Scrapers", description: "Belt cleaning scrapers" },
      { name: "Pulleys", description: "Drive and tension pulleys" },
      { name: "Support Structures", description: "Structural supports and frames" },
    ],
    specifications: [
      { label: "Belt Width", value: "600mm to 2400mm" },
      { label: "Capacity", value: "Up to 10,000 TPH" },
      { label: "Speed", value: "Up to 6 m/s" },
      { label: "Material", value: "MS, AR Plate, SS" },
      { label: "Coating Options", value: "Rubber, Ceramic, PU" },
      { label: "Standards", value: "IS, DIN, CEMA" },
    ],
    materials: ["Mild Steel", "Abrasion Resistant Steel", "Stainless Steel", "Hardox"],
    scopeOfWork: [
      "Design & engineering",
      "Fabrication & machining",
      "Rubber lining",
      "Assembly & testing",
      "Site installation",
    ],
    relatedProducts: ["railway-mining-equipment", "slurry-pump-solutions", "custom-fabrication"],
  },
  "railway-mining-equipment": {
    title: "Railway & Mining Equipment",
    description: "Heavy machinery components for railway and mining industry applications. Precision manufactured to stringent quality standards.",
    components: [
      { name: "Bogie Components", description: "Railway bogie parts and assemblies" },
      { name: "Coupler Systems", description: "Wagon coupling components" },
      { name: "Axle Boxes", description: "Precision axle box housings" },
      { name: "Brake Components", description: "Railway brake system parts" },
      { name: "Mining Truck Parts", description: "Components for mining vehicles" },
      { name: "Structural Parts", description: "Heavy structural components" },
    ],
    specifications: [
      { label: "Load Capacity", value: "As per design" },
      { label: "Material", value: "EN8, EN24, Ductile Iron" },
      { label: "Heat Treatment", value: "Normalized/QT" },
      { label: "Testing", value: "UT, MT, RT" },
      { label: "Standards", value: "RDSO, AAR, Mining" },
      { label: "Tolerance", value: "As per drawing" },
    ],
    materials: ["EN8D", "EN24 QT", "EN19 QT", "Ductile Iron", "Cast Steel"],
    scopeOfWork: [
      "Pattern making",
      "Casting procurement",
      "Precision machining",
      "NDT testing",
      "Documentation",
    ],
    relatedProducts: ["material-handling-equipment", "thickener-drive-components", "custom-fabrication"],
  },
  "custom-fabrication": {
    title: "Custom Fabrication Services",
    description: "Bespoke fabrication solutions tailored to your specific requirements. From prototype to production, we deliver precision custom work.",
    components: [
      { name: "Structural Fabrication", description: "Heavy structural steel fabrication" },
      { name: "Pressure Vessels", description: "Custom pressure vessel fabrication" },
      { name: "Tanks & Silos", description: "Storage tanks and silos" },
      { name: "Platforms & Walkways", description: "Access platforms and structures" },
      { name: "Machine Frames", description: "Custom machine frames and bases" },
      { name: "Special Equipment", description: "One-off special equipment" },
    ],
    specifications: [
      { label: "Plate Thickness", value: "3mm to 100mm" },
      { label: "Welding", value: "MIG, TIG, SMAW, SAW" },
      { label: "Capacity", value: "Up to 50 Ton single piece" },
      { label: "Surface Treatment", value: "Blasting, Painting, Galvanizing" },
      { label: "Standards", value: "AWS, ASME, IS" },
      { label: "Testing", value: "NDT, Hydro Test, Load Test" },
    ],
    materials: ["Mild Steel", "Stainless Steel", "Duplex Steel", "Alloy Steel", "Aluminum"],
    scopeOfWork: [
      "Design engineering",
      "Material procurement",
      "Cutting & forming",
      "Welding & assembly",
      "Quality certification",
    ],
    relatedProducts: ["material-handling-equipment", "railway-mining-equipment", "thickener-drive-components"],
  },
};

const productTitles: Record<string, string> = {
  "thickener-drive-components": "Thickener Drive Components",
  "filter-press-systems": "Filter Press Systems",
  "slurry-pump-solutions": "Slurry Pump Solutions",
  "hydro-cyclones": "Hydro Cyclones",
  "disc-filter-components": "Disc Filter Components",
  "material-handling-equipment": "Material Handling Equipment",
  "railway-mining-equipment": "Railway & Mining Equipment",
  "custom-fabrication": "Custom Fabrication Services",
};

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productData[productId || ""];

  if (!product) {
    return (
      <main className="overflow-x-hidden">
        <Header />
        <section className="pt-32 pb-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link to="/products" className="text-primary hover:underline">
              Back to Products
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary to-navy-dark text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
        <div className="container-custom mx-auto px-4 relative z-10">
          <Breadcrumb 
            items={[
              { label: "Products", href: "/products" },
              { label: product.title }
            ]} 
          />
          <div className="max-w-4xl pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {product.title}
            </h1>
            <p className="text-xl text-white/80 mb-8">
              {product.description}
            </p>
            <Link
              to="/#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Request Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Components & Parts
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.components.map((component, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {component.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Technical Specifications
          </h2>
          <div className="bg-card rounded-xl overflow-hidden border border-border">
            <table className="w-full">
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-card" : "bg-secondary/50"}
                  >
                    <td className="px-6 py-4 font-semibold text-foreground border-r border-border">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Materials & Scope */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Material Grades */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Material Grades
              </h2>
              <div className="space-y-3">
                {product.materials.map((material, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope of Work */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Scope of Work
              </h2>
              <div className="space-y-3">
                {product.scopeOfWork.map((scope, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                  >
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{scope}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Product Gallery
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className="aspect-[4/3] bg-card rounded-xl overflow-hidden border border-border group cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Factory className="w-16 h-16 text-primary/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in {product.title}?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch with our engineering team for custom quotes and technical consultation
          </p>
          <Link
            to="/#contact"
            className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2"
          >
            Request Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Related Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.relatedProducts.map((relatedId) => (
              <Link
                key={relatedId}
                to={`/products/${relatedId}`}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="aspect-[16/9] bg-secondary overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Factory className="w-12 h-12 text-primary/50" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {productTitles[relatedId]}
                  </h3>
                  <div className="flex items-center text-primary font-semibold text-sm mt-3">
                    View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductDetailPage;
