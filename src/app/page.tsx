import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import DotPattern from "./components/DotPattern";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Pink Pizza Berlin",
    description: "A modern website for a trendy Berlin pizzeria featuring online ordering, menu design, and Google Maps integration.",
    imageUrl: "/pink-pizza-hero.jpg",
    category: "Web Design",
    year: "2025"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "An intuitive mobile banking application designed to simplify financial management for users on the go.",
    imageUrl: "/project2.jpg",
    category: "App Development",
    year: "2023"
  },
  {
    id: 3,
    title: "Brand Identity System",
    description: "A comprehensive brand identity system for a tech startup that needed to establish a strong market presence.",
    imageUrl: "/project3.jpg",
    category: "Branding",
    year: "2022"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-amber-50 bg-opacity-50"></div>
        <DotPattern color="#B05C35" size={1.5} spacing={22} className="z-[1] opacity-25" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-secondary">
            Crafting Digital <br />
            <span className="text-primary">Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-10 text-secondary">
            Site and Sight is a creative studio focused on designing and developing unique digital experiences that captivate and inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/work" 
              className="px-8 py-3 bg-[#ff5500] text-white rounded-md hover:bg-[#e64d00] transition-colors inline-block text-center"
            >
              View Our Work
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 border border-primary rounded-md text-black bg-white hover:bg-gray-200 hover:text-black transition-colors inline-block text-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="px-8 md:px-16 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="h-64 bg-gray-200 relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={project.id === 1}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <Link href={`/work/project-${project.id}`} className="text-[#ff5500] font-medium hover:underline">
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="px-8 md:px-16 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#ff5500] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">We learn about your business, goals, and requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ff5500] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a tailored strategy to meet your specific needs.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ff5500] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">We bring your project to life with expert execution.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ff5500] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">We provide ongoing support to ensure continued success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
