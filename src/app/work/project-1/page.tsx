import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Project1Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Navigation */}
      <Navigation currentPage="work" />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] flex items-center" style={{ backgroundImage: "url('/pink-pizza-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full">
          <span className="text-pink-500 font-medium mb-2 inline-block">Web Design Project</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Pink Pizza Berlin</h1>
          <p className="text-xl text-white max-w-3xl">
            A modern website for a trendy Berlin pizzeria featuring online ordering, menu design, and Google Maps integration.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="px-8 md:px-16 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              Pink Pizza is a trendy, Instagram-friendly pizzeria in Berlin that needed a website that would match their unique brand identity and drive online orders. Our goal was to create a visually appealing and functional website that would showcase their menu, facilitate online ordering, and help customers find and review the restaurant.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The client wanted a design that would stand out from typical pizzeria websites while maintaining excellent user experience and driving business results.
            </p>
            <h3 className="text-2xl font-semibold mb-4 mt-10">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2 font-bold">✓</span>
                <span>Custom menu design with categorization</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2 font-bold">✓</span>
                <span>Online ordering system</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2 font-bold">✓</span>
                <span>Mobile-responsive design</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2 font-bold">✓</span>
                <span>Google Maps integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2 font-bold">✓</span>
                <span>QR code for customer reviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2 font-bold">✓</span>
                <span>Multi-language support (EN/DE)</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2 font-bold">✓</span>
                <span>Brand-aligned visual design</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2 font-bold">✓</span>
                <span>SEO optimization</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg h-fit">
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-gray-500 text-sm">CLIENT</h4>
                <p className="font-medium">Pink Pizza Berlin</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-sm">TIMELINE</h4>
                <p className="font-medium">6 weeks</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-sm">SERVICES</h4>
                <p className="font-medium">Web Design, UI/UX Design, Menu Design, Development</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-sm">TECHNOLOGIES</h4>
                <p className="font-medium">React, Next.js, Tailwind CSS, Vercel</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-sm">WEBSITE</h4>
                <a href="#" className="text-pink-500 hover:underline font-medium">www.pinkpizza.de</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Showcase */}
      <section className="px-8 md:px-16 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Website Showcase</h2>
          
          {/* Hero Section Showcase */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Homepage Design</h3>
            <p className="text-lg text-gray-700 mb-8">
              The homepage features a striking hero section with a high-quality image of their signature pizza, the Pink Pizza logo, and a compelling tagline. We added a prominent "Order Now" button to drive conversions.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/pink-pizza-hero.jpg" 
                alt="Pink Pizza Website Homepage" 
                width={1200} 
                height={675}
                className="w-full"
              />
            </div>
          </div>

          {/* Menu Design and QR Code Side by Side */}
          <div className="grid grid-cols-1 gap-16">
            {/* Menu Design Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/pink-pizza-menu.jpg" 
                  alt="Pink Pizza Menu Design" 
                  width={300} 
                  height={400}
                  className="w-full"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Menu Design</h3>
                <p className="text-gray-700">
                  We created a visually appealing menu that highlights their offerings while maintaining the brand's aesthetic. The menu is easy to navigate with clear categories and descriptions in both English and German.
                </p>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6 flex items-center justify-center">
                <Image 
                  src="/pink-pizza-qr.png" 
                  alt="Pink Pizza Google Reviews QR Code" 
                  width={400} 
                  height={400}
                  className="w-full max-w-[300px]"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">QR Code for Google Reviews</h3>
                <p className="text-gray-700">
                  To encourage customer feedback, we created a QR code that directs customers to leave Google reviews. This QR code is displayed at the restaurant and on printed materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-8 md:px-16 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Discovery & Strategy</h3>
              <p className="text-gray-700 mb-4">
                We began with an in-depth discovery session to understand Pink Pizza's brand, target audience, and business goals. We analyzed competitor websites and identified opportunities to create a unique online presence.
              </p>
              <p className="text-gray-700">
                Through collaborative workshops, we defined the key features and functionality that would drive online orders and enhance the customer experience.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Design & Development</h3>
              <p className="text-gray-700 mb-4">
                Our design team created a visually striking interface that aligned with Pink Pizza&apos;s brand identity, featuring their signature pink color, custom typography, and high-quality food photography.
              </p>
              <p className="text-gray-700">
                We developed the website using modern technologies to ensure fast loading times, responsive design, and seamless functionality across all devices.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Menu Optimization</h3>
              <p className="text-gray-700 mb-4">
                We worked closely with Pink Pizza to design a menu that not only looked visually appealing but also optimized for conversions. We organized items by category, highlighted popular dishes, and ensured descriptions were enticing and informative.
              </p>
              <p className="text-gray-700">
                The menu was designed to be easy to update, allowing Pink Pizza to modify items and prices as needed.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Launch & Results</h3>
              <p className="text-gray-700 mb-4">
                After thorough testing and optimization, we launched the website and provided training for the Pink Pizza team to manage content updates.
              </p>
              <p className="text-gray-700">
                Within the first month, online orders increased by 45%, and the website received positive feedback from customers for its user-friendly design and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-8 md:px-16 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-12 h-12 text-pink-500 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
            <path d="M14 4.34v4.66c-1.72 0-3.196.493-4.428 1.477C8.34 11.46 7.724 12.837 7.724 14.6c0 .127.005.252.016.375h4.976v9.375H0V15.525c0-3.403.553-6.142 1.66-8.217C2.767 5.235 4.267 3.619 6.16 2.46 8.054 1.3 10.34.59 13.016.33L14 4.34zm18 0v4.66c-1.72 0-3.196.493-4.428 1.477-1.233 .983-1.848 2.36-1.848 4.123 0 .127.005.252.016.375h4.976v9.375H18V15.525c0-3.403.553-6.142 1.66-8.217.813-2.073 2.313-3.69 4.207-4.848C25.76 1.3 28.054.59 30.73.33L32 4.34z" />
          </svg>
          <blockquote className="text-2xl font-light italic text-gray-700 mb-8">
            &ldquo;Site and Sight perfectly captured our brand&apos;s personality in the website design. The online ordering system has significantly increased our sales, and customers love how easy it is to use. Working with their team was a pleasure from start to finish.&rdquo;
          </blockquote>
          <div>
            <p className="font-medium text-lg">Maria Schneider</p>
            <p className="text-gray-500">Owner, Pink Pizza Berlin</p>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="px-8 md:px-16 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to create your project?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Let&apos;s discuss how we can help bring your vision to life with a custom digital solution tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-[#ff5500] text-white rounded-md hover:bg-[#e64d00] transition-colors inline-block"
            >
              Start Your Project
            </Link>
            <Link 
              href="/work" 
              className="px-8 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors inline-block"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 