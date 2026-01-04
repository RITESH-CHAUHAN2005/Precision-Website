import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Products from "@/components/Products";
import Capabilities from "@/components/Capabilities";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Quality from "@/components/Quality";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <SEO
        title="Precision Engineering Products | Heavy Machinery Manufacturing | ISO 9001:2015 Certified"
        description="Leading manufacturer of heavy duty machinery & automotive products in India. ISO 9001:2015 certified. Specializing in thickener drives, filter press, slurry pumps. Serving FLSmidth, Metso, Tenneco."
        keywords="precision engineering, heavy machinery manufacturer, automotive products, casting plant, machining services, Bawal manufacturing, ISO certified manufacturer"
        canonical="/"
      />
      <main className="overflow-x-hidden">
        <Header />
        <Hero />
        {/* <Leadership /> */}
        <About />
        <CoreValues />
        <Products />
        <Capabilities />
        <Services />
        <Clients />
        <WhyChooseUs />
        {/* <Quality /> */}
        <Gallery />
        <Timeline />
        {/* <Contact /> */}
        <Footer />
        <WhatsAppButton />
      </main>
    </PageTransition>
  );
};

export default Index;
