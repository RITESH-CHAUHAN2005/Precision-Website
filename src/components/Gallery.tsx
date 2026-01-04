import { useEffect, useRef, useState } from "react";
import factoryImg from "@/assets/factory.jpg";
import assemblyImg from "@/assets/assembly.jpg";
import machiningImg from "@/assets/machining.jpg";
import facilityImg from "@/assets/facility.jpg";
import product1Img from "@/assets/products-1.jpg";
import product2Img from "@/assets/products-2.jpg";
import product3Img from "@/assets/products-3.jpg";
import teamImg from "@/assets/team.jpg";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const galleryItems = [
    {
      image: factoryImg,
      title: "Machining Floor",
      category: "Facility",
    },
    {
      image: machiningImg,
      title: "Casting With Machining ",
      category: "Process",
    },
    {
      image: product1Img,
      title: "Precision Components",
      category: "Products",
    },
    {
      image: assemblyImg,
      title: "Testing",
      category: "Process",
    },
    {
      image: product2Img,
      title: "Heavy Machinery Parts",
      category: "Products",
    },
    {
      image: facilityImg,
      title: "Fabrication",
      category: "Facility",
    },
    {
      image: product3Img,
      title: "Heavy Machinery ",
      category: "Products",
    },
    {
      image: teamImg,
      title: "Global Customer Visit",
      category: "Team",
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Our Work
          </p>
          <h2
            className={`font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-foreground transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Project <span className="text-accent">Gallery</span>
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Explore our manufacturing excellence through completed projects and production processes
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${
                index % 4 === 0 || index % 4 === 3 ? "lg:row-span-2 h-[400px]" : "h-[190px]"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-xs font-montserrat font-semibold mb-2 w-fit">
                  {item.category}
                </span>
                <h3 className="font-montserrat font-bold text-white text-lg group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="inline-block btn-primary"
          >
            Request Project Portfolio
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
